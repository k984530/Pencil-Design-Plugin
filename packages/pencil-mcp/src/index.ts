#!/usr/bin/env node

/**
 * @pencil-dev/mcp
 * MCP (Model Context Protocol) server for Pencil.dev
 *
 * Enables AI assistants like Claude to create and manipulate designs
 * directly in Pencil.dev canvas.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs/promises";
import * as path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// Pencil file storage path
const PENCIL_DIR = process.env.PENCIL_DIR || path.join(process.cwd(), ".pen");

/**
 * PencilMCPServer
 * Provides MCP tools for Pencil.dev integration
 */
class PencilMCPServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "pencil-mcp",
        version: "0.1.0",
      },
      {
        capabilities: {
          tools: {},
          resources: {},
        },
      }
    );

    this.setupHandlers();
  }

  private setupHandlers(): void {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: "create_design",
          description: "Create a new design in Pencil canvas from a text prompt. Generates UI components, layouts, and screens based on the description.",
          inputSchema: {
            type: "object",
            properties: {
              prompt: {
                type: "string",
                description: "Description of the design to create (e.g., 'Login screen with email and password fields')",
              },
              name: {
                type: "string",
                description: "Name for the design file",
              },
              deviceType: {
                type: "string",
                enum: ["mobile", "desktop", "tablet"],
                description: "Target device type (default: mobile)",
              },
              width: {
                type: "number",
                description: "Canvas width in pixels (default: 390 for mobile)",
              },
              height: {
                type: "number",
                description: "Canvas height in pixels (default: 844 for mobile)",
              },
            },
            required: ["prompt", "name"],
          },
        },
        {
          name: "open_canvas",
          description: "Open an existing .pen file in Pencil app or create a new canvas",
          inputSchema: {
            type: "object",
            properties: {
              filePath: {
                type: "string",
                description: "Path to the .pen file to open (optional, creates new if not specified)",
              },
            },
          },
        },
        {
          name: "get_design",
          description: "Get the structure and content of a Pencil design file",
          inputSchema: {
            type: "object",
            properties: {
              filePath: {
                type: "string",
                description: "Path to the .pen file",
              },
            },
            required: ["filePath"],
          },
        },
        {
          name: "update_design",
          description: "Update an existing design by modifying layers, styles, or content",
          inputSchema: {
            type: "object",
            properties: {
              filePath: {
                type: "string",
                description: "Path to the .pen file to update",
              },
              updates: {
                type: "object",
                description: "JSON object with updates to apply (layers, variables, etc.)",
              },
            },
            required: ["filePath", "updates"],
          },
        },
        {
          name: "list_designs",
          description: "List all .pen design files in the project",
          inputSchema: {
            type: "object",
            properties: {
              directory: {
                type: "string",
                description: "Directory to search (default: .pen)",
              },
            },
          },
        },
        {
          name: "export_image",
          description: "Export a design as PNG or SVG image",
          inputSchema: {
            type: "object",
            properties: {
              filePath: {
                type: "string",
                description: "Path to the .pen file",
              },
              format: {
                type: "string",
                enum: ["png", "svg"],
                description: "Export format (default: png)",
              },
              scale: {
                type: "number",
                description: "Export scale (1x, 2x, 3x)",
              },
            },
            required: ["filePath"],
          },
        },
        {
          name: "apply_design_system",
          description: "Apply design system tokens to a design",
          inputSchema: {
            type: "object",
            properties: {
              filePath: {
                type: "string",
                description: "Path to the .pen file",
              },
              designSystem: {
                type: "string",
                description: "Design system to apply (e.g., 'tds' for Toss Design System)",
              },
            },
            required: ["filePath"],
          },
        },
      ],
    }));

    // List available resources
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => ({
      resources: [
        {
          uri: "pencil://designs",
          name: "Pencil Designs",
          description: "List of all .pen design files in the project",
          mimeType: "application/json",
        },
        {
          uri: "pencil://design-system",
          name: "Design System",
          description: "Current project's design system tokens",
          mimeType: "application/json",
        },
      ],
    }));

    // Read resources
    this.server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
      const { uri } = request.params;

      if (uri === "pencil://designs") {
        const designs = await this.listDesigns(PENCIL_DIR);
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(designs, null, 2),
            },
          ],
        };
      }

      if (uri === "pencil://design-system") {
        const tokens = await this.loadDesignSystem();
        return {
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(tokens, null, 2),
            },
          ],
        };
      }

      throw new Error(`Unknown resource: ${uri}`);
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      switch (name) {
        case "create_design":
          return await this.createDesign(args as any);
        case "open_canvas":
          return await this.openCanvas(args as any);
        case "get_design":
          return await this.getDesign(args as any);
        case "update_design":
          return await this.updateDesign(args as any);
        case "list_designs":
          return await this.handleListDesigns(args as any);
        case "export_image":
          return await this.exportImage(args as any);
        case "apply_design_system":
          return await this.applyDesignSystem(args as any);
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  /**
   * Create a new design from prompt
   */
  private async createDesign(args: {
    prompt: string;
    name: string;
    deviceType?: string;
    width?: number;
    height?: number;
  }) {
    const devicePresets: Record<string, { width: number; height: number }> = {
      mobile: { width: 390, height: 844 },
      desktop: { width: 1440, height: 900 },
      tablet: { width: 834, height: 1194 },
    };

    const device = args.deviceType || "mobile";
    const preset = devicePresets[device] || devicePresets.mobile;
    const width = args.width || preset.width;
    const height = args.height || preset.height;

    // Create design structure
    const design = {
      version: "1.0",
      name: args.name,
      prompt: args.prompt,
      canvas: { width, height },
      frames: [
        {
          id: "frame-main",
          name: args.name,
          x: 0,
          y: 0,
          width,
          height,
          backgroundColor: "#FFFFFF",
        },
      ],
      layers: [],
      variables: {},
      metadata: {
        createdAt: new Date().toISOString(),
        createdBy: "pencil-mcp",
        deviceType: device,
      },
    };

    // Ensure directory exists
    const screensDir = path.join(PENCIL_DIR, "screens");
    await fs.mkdir(screensDir, { recursive: true });

    // Save file
    const fileName = args.name.toLowerCase().replace(/\s+/g, "-") + ".pen";
    const filePath = path.join(screensDir, fileName);
    await fs.writeFile(filePath, JSON.stringify(design, null, 2));

    // Try to open in Pencil app
    try {
      await execAsync(`open -a Pencil "${filePath}"`);
    } catch (e) {
      // Pencil app might not be installed
    }

    return {
      content: [
        {
          type: "text",
          text: `Design created successfully!\n\nFile: ${filePath}\nCanvas: ${width}x${height} (${device})\n\nNote: The design structure has been created. Use Pencil app's AI feature (Cmd+K) to generate the visual design from the prompt:\n\n"${args.prompt}"`,
        },
      ],
    };
  }

  /**
   * Open canvas in Pencil app
   */
  private async openCanvas(args: { filePath?: string }) {
    if (args.filePath) {
      const fullPath = path.isAbsolute(args.filePath)
        ? args.filePath
        : path.join(process.cwd(), args.filePath);

      try {
        await fs.access(fullPath);
        await execAsync(`open -a Pencil "${fullPath}"`);
        return {
          content: [
            {
              type: "text",
              text: `Opened ${fullPath} in Pencil app`,
            },
          ],
        };
      } catch (e) {
        throw new Error(`File not found: ${fullPath}`);
      }
    }

    // Open Pencil app without file
    try {
      await execAsync("open -a Pencil");
      return {
        content: [
          {
            type: "text",
            text: "Opened Pencil app with new canvas",
          },
        ],
      };
    } catch (e) {
      throw new Error("Failed to open Pencil app. Is it installed?");
    }
  }

  /**
   * Get design content
   */
  private async getDesign(args: { filePath: string }) {
    const fullPath = path.isAbsolute(args.filePath)
      ? args.filePath
      : path.join(process.cwd(), args.filePath);

    try {
      const content = await fs.readFile(fullPath, "utf-8");
      const design = JSON.parse(content);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(design, null, 2),
          },
        ],
      };
    } catch (e) {
      throw new Error(`Failed to read design: ${(e as Error).message}`);
    }
  }

  /**
   * Update existing design
   */
  private async updateDesign(args: { filePath: string; updates: object }) {
    const fullPath = path.isAbsolute(args.filePath)
      ? args.filePath
      : path.join(process.cwd(), args.filePath);

    try {
      const content = await fs.readFile(fullPath, "utf-8");
      const design = JSON.parse(content);
      const updated = this.deepMerge(design, args.updates);
      await fs.writeFile(fullPath, JSON.stringify(updated, null, 2));

      return {
        content: [
          {
            type: "text",
            text: `Design updated: ${fullPath}`,
          },
        ],
      };
    } catch (e) {
      throw new Error(`Failed to update design: ${(e as Error).message}`);
    }
  }

  /**
   * List all designs
   */
  private async listDesigns(directory: string): Promise<string[]> {
    const designs: string[] = [];

    async function scanDir(dir: string) {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            await scanDir(fullPath);
          } else if (entry.name.endsWith(".pen")) {
            designs.push(fullPath);
          }
        }
      } catch (e) {
        // Directory might not exist
      }
    }

    await scanDir(directory);
    return designs;
  }

  private async handleListDesigns(args: { directory?: string }) {
    const dir = args.directory || PENCIL_DIR;
    const designs = await this.listDesigns(dir);

    return {
      content: [
        {
          type: "text",
          text:
            designs.length > 0
              ? `Found ${designs.length} design(s):\n\n${designs.join("\n")}`
              : "No .pen files found",
        },
      ],
    };
  }

  /**
   * Export design as image (placeholder - requires Pencil app API)
   */
  private async exportImage(args: {
    filePath: string;
    format?: string;
    scale?: number;
  }) {
    return {
      content: [
        {
          type: "text",
          text: `Export functionality requires Pencil app integration.\n\nTo export manually:\n1. Open ${args.filePath} in Pencil\n2. Use File > Export (Cmd+E)\n3. Select format: ${args.format || "png"}\n4. Scale: ${args.scale || 1}x`,
        },
      ],
    };
  }

  /**
   * Apply design system tokens
   */
  private async applyDesignSystem(args: {
    filePath: string;
    designSystem?: string;
  }) {
    const fullPath = path.isAbsolute(args.filePath)
      ? args.filePath
      : path.join(process.cwd(), args.filePath);

    const tokens = await this.loadDesignSystem();

    try {
      const content = await fs.readFile(fullPath, "utf-8");
      const design = JSON.parse(content);

      design.variables = {
        ...design.variables,
        ...tokens,
      };

      await fs.writeFile(fullPath, JSON.stringify(design, null, 2));

      return {
        content: [
          {
            type: "text",
            text: `Applied design system to ${fullPath}\n\nTokens applied:\n- Colors: ${Object.keys(tokens.colors || {}).length} tokens\n- Typography: ${Object.keys(tokens.typography || {}).length} tokens\n- Spacing: ${Object.keys(tokens.spacing || {}).length} tokens`,
          },
        ],
      };
    } catch (e) {
      throw new Error(`Failed to apply design system: ${(e as Error).message}`);
    }
  }

  /**
   * Load design system tokens from project
   */
  private async loadDesignSystem(): Promise<Record<string, any>> {
    const tokensDir = path.join(process.cwd(), "design", "system", "tokens");

    const defaultTokens = {
      colors: {
        primary: "#3182F6",
        background: "#FFFFFF",
        surface: "#F9FAFB",
        text: "#191F28",
        textSecondary: "#6B7684",
        border: "#E5E8EB",
        success: "#4CAF50",
        error: "#F44336",
        warning: "#FF9800",
      },
      typography: {
        display: { size: 30, weight: 700, lineHeight: 38 },
        title: { size: 24, weight: 700, lineHeight: 32 },
        body: { size: 16, weight: 400, lineHeight: 24 },
        caption: { size: 14, weight: 400, lineHeight: 20 },
      },
      spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
      },
      radius: {
        sm: 8,
        md: 12,
        lg: 16,
        full: 9999,
      },
    };

    try {
      await fs.access(tokensDir);
      // Could parse markdown token files here
      return defaultTokens;
    } catch {
      return defaultTokens;
    }
  }

  /**
   * Deep merge objects
   */
  private deepMerge(target: any, source: any): any {
    const result = { ...target };
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        result[key] = this.deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }

  /**
   * Start the MCP server
   */
  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error("Pencil MCP server running on stdio");
  }
}

// Start server
const server = new PencilMCPServer();
server.run().catch(console.error);
