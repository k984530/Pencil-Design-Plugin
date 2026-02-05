---
name: Design System
description: This skill should be used when the user asks to "set up a design system", "create design tokens", "organize design assets", "define color palette", "configure typography", "manage component specs", or mentions design system structure, token definitions, or component documentation for Pencil.dev projects.
version: 1.0.0
---

# Design System Management

Provides guidance for creating and managing design systems that integrate with Pencil.dev workflows. Design systems ensure visual consistency across projects by defining reusable tokens, component specifications, and design assets.

## Folder Structure Overview

Organize design system files in a dedicated `design/system/` directory:

```
design/
└── system/
    ├── tokens/           # Design tokens (colors, typography, spacing)
    │   ├── colors.md
    │   ├── typography.md
    │   └── spacing.md
    ├── components/       # Component specifications
    │   ├── button.md
    │   └── card.md
    └── assets/           # Visual assets (screenshots, images)
        └── button-variants.png
```

## Design Tokens

Design tokens are the atomic values of a design system. Define tokens in markdown files for platform-agnostic usage.

### Color Tokens

Create `design/system/tokens/colors.md`:

```markdown
# Color Tokens

## Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| primary | #3B82F6 | Primary actions, links |
| primary-hover | #2563EB | Hover state for primary |
| secondary | #6B7280 | Secondary elements |

## Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| success | #10B981 | Success messages |
| warning | #F59E0B | Warning alerts |
| error | #EF4444 | Error states |

## Neutral Colors
| Token | Value | Usage |
|-------|-------|-------|
| background | #FFFFFF | Page background |
| surface | #F9FAFB | Card backgrounds |
| border | #E5E7EB | Borders, dividers |
| text-primary | #111827 | Main text |
| text-secondary | #6B7280 | Supporting text |
```

### Typography Tokens

Create `design/system/tokens/typography.md`:

```markdown
# Typography Tokens

## Font Families
| Token | Value | Usage |
|-------|-------|-------|
| font-sans | Inter, system-ui, sans-serif | Body text |
| font-mono | JetBrains Mono, monospace | Code blocks |

## Font Sizes
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| text-xs | 12px | 16px | Captions |
| text-sm | 14px | 20px | Small text |
| text-base | 16px | 24px | Body text |
| text-lg | 18px | 28px | Large body |
| text-xl | 20px | 28px | Subheadings |
| text-2xl | 24px | 32px | Headings |

## Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| font-normal | 400 | Body text |
| font-medium | 500 | Emphasis |
| font-semibold | 600 | Subheadings |
| font-bold | 700 | Headings |
```

### Spacing Tokens

Create `design/system/tokens/spacing.md`:

```markdown
# Spacing Tokens

## Base Scale
| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight spacing |
| space-2 | 8px | Compact elements |
| space-3 | 12px | Default gap |
| space-4 | 16px | Standard spacing |
| space-6 | 24px | Section padding |
| space-8 | 32px | Large gaps |
| space-12 | 48px | Section margins |

## Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 4px | Buttons, inputs |
| radius-md | 8px | Cards |
| radius-lg | 12px | Modals |
| radius-full | 9999px | Pills, avatars |
```

## Component Specifications

Document each reusable component with its variants, states, and usage guidelines.

### Component Spec Template

Use this template for `design/system/components/{component-name}.md`:

```markdown
# {Component Name}

## Overview
Brief description of the component's purpose.

## Variants
| Variant | Description | Use Case |
|---------|-------------|----------|
| primary | Main action style | Submit, Save |
| secondary | Supporting action | Cancel, Back |
| ghost | Minimal style | Inline actions |

## States
- Default
- Hover
- Active/Pressed
- Disabled
- Loading (if applicable)

## Specifications

### Sizing
| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| sm | 32px | 12px 16px | text-sm |
| md | 40px | 12px 20px | text-base |
| lg | 48px | 16px 24px | text-lg |

### Tokens Used
- Background: `primary`, `secondary`
- Text: `text-primary`, `background`
- Border: `border`, `radius-sm`

## Usage Guidelines
- When to use this component
- When NOT to use this component
- Accessibility considerations

## Examples
[Include screenshots in assets/ folder]
See: `../assets/{component}-variants.png`
```

## Visual Assets

Store component screenshots and design references in `design/system/assets/`.

### Asset Naming Convention

```
{component}-{variant/state}.{extension}
```

Examples:
- `button-variants.png` - All button variants
- `card-states.png` - Card interaction states
- `color-palette.png` - Visual color reference

### Capturing Assets

To document existing components with screenshots:

1. Open Pencil.dev canvas with component designs
2. Export or screenshot relevant frames
3. Save to `design/system/assets/` with descriptive names
4. Reference in component spec markdown files

## Initializing Design System

To set up a new design system in a project:

```bash
# Create folder structure
mkdir -p design/system/{tokens,components,assets}

# Create initial token files
touch design/system/tokens/{colors,typography,spacing}.md

# Create component template
touch design/system/components/button.md
```

## Integration with Pencil.dev

When creating designs in Pencil.dev:

1. Reference token values from `design/system/tokens/`
2. Follow component specs from `design/system/components/`
3. Export design screenshots to `design/system/assets/`
4. Keep `.pen` files in sync with documentation

### Referencing in Design Descriptions

When writing design descriptions (specs), reference tokens:

```markdown
## Design Tokens Used

### Colors
- Primary button: `primary` (#3B82F6)
- Text: `text-primary` (#111827)

### Typography
- Heading: `text-xl` / `font-semibold`
- Body: `text-base` / `font-normal`

### Spacing
- Card padding: `space-4` (16px)
- Element gap: `space-3` (12px)
```

## Additional Resources

### Templates

Pre-made templates for quick setup:
- **`templates/colors-template.md`** - Color token starter
- **`templates/typography-template.md`** - Typography token starter
- **`templates/component-template.md`** - Component spec template

### References

Detailed guides for specific topics:
- **`references/token-naming.md`** - Token naming conventions and best practices
