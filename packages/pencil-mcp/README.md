# @pencil-dev/mcp

MCP (Model Context Protocol) server for [Pencil.dev](https://pencil.dev) - AI-powered design tool integration.

## Overview

This package enables AI assistants like Claude to create and manipulate designs directly in Pencil.dev canvas through the Model Context Protocol.

## Installation

```bash
npm install -g @pencil-dev/mcp
```

Or use with npx:

```bash
npx @pencil-dev/mcp
```

## Configuration

### Claude Code / Claude Desktop

Add to your `.mcp.json` or MCP settings:

```json
{
  "mcpServers": {
    "pencil": {
      "command": "npx",
      "args": ["-y", "@pencil-dev/mcp"]
    }
  }
}
```

### Environment Variables

- `PENCIL_DIR`: Directory for .pen files (default: `.pen` in current directory)

## Available Tools

### create_design

Create a new design from a text prompt.

```typescript
{
  prompt: "Login screen with email and password fields",
  name: "Login",
  deviceType: "mobile" | "desktop" | "tablet",
  width?: number,
  height?: number
}
```

### open_canvas

Open an existing .pen file or create a new canvas.

```typescript
{
  filePath?: string  // Optional path to .pen file
}
```

### get_design

Get the structure and content of a design file.

```typescript
{
  filePath: string  // Path to .pen file
}
```

### update_design

Update an existing design by modifying layers, styles, or content.

```typescript
{
  filePath: string,
  updates: object  // JSON updates to merge
}
```

### list_designs

List all .pen design files in the project.

```typescript
{
  directory?: string  // Default: .pen
}
```

### export_image

Export a design as PNG or SVG.

```typescript
{
  filePath: string,
  format?: "png" | "svg",
  scale?: number
}
```

### apply_design_system

Apply design system tokens to a design.

```typescript
{
  filePath: string,
  designSystem?: string  // e.g., "tds" for Toss Design System
}
```

## Resources

The server provides these MCP resources:

- `pencil://designs` - List of all .pen files
- `pencil://design-system` - Current design system tokens

## .pen File Format

Pencil uses a JSON-based file format:

```json
{
  "version": "1.0",
  "name": "My Design",
  "canvas": {
    "width": 390,
    "height": 844
  },
  "frames": [...],
  "layers": [...],
  "variables": {
    "colors": {...},
    "typography": {...},
    "spacing": {...}
  }
}
```

## Usage Example

With Claude Code:

```
Human: Create a finance app home screen with TDS style

Claude: [Uses create_design tool]
- Creates .pen file with canvas setup
- Opens in Pencil app
- Applies TDS design tokens
```

## Development

```bash
# Clone and install
git clone https://github.com/pencil-dev/mcp
cd mcp
npm install

# Build
npm run build

# Run locally
npm start
```

## License

MIT
