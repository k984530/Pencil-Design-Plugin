#!/bin/bash
# Design System Initialization Script
# Creates the folder structure and template files for a new design system

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🎨 Initializing Design System...${NC}"

# Create folder structure
mkdir -p design/system/tokens
mkdir -p design/system/components
mkdir -p design/system/assets
mkdir -p design/references/moodboard
mkdir -p design/references/benchmarks
mkdir -p design/specs
mkdir -p .pen/screens
mkdir -p .pen/components

echo -e "${GREEN}✓${NC} Created folder structure"

# Create colors.md if not exists
if [ ! -f "design/system/tokens/colors.md" ]; then
cat > design/system/tokens/colors.md << 'EOF'
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
EOF
echo -e "${GREEN}✓${NC} Created colors.md"
fi

# Create typography.md if not exists
if [ ! -f "design/system/tokens/typography.md" ]; then
cat > design/system/tokens/typography.md << 'EOF'
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
| weight-normal | 400 | Body text |
| weight-medium | 500 | Emphasis |
| weight-semibold | 600 | Subheadings |
| weight-bold | 700 | Headings |
EOF
echo -e "${GREEN}✓${NC} Created typography.md"
fi

# Create spacing.md if not exists
if [ ! -f "design/system/tokens/spacing.md" ]; then
cat > design/system/tokens/spacing.md << 'EOF'
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
EOF
echo -e "${GREEN}✓${NC} Created spacing.md"
fi

# Create button component if not exists
if [ ! -f "design/system/components/button.md" ]; then
cat > design/system/components/button.md << 'EOF'
# Button

## Overview

Button component for triggering actions and navigation.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| primary | High emphasis, main actions | Submit, Save, Confirm |
| secondary | Medium emphasis, supporting | Cancel, Back |
| ghost | Minimal, text-only | Inline actions |
| destructive | Dangerous actions | Delete, Remove |

## Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| sm | 32px | 12px 16px | text-sm |
| md | 40px | 12px 20px | text-base |
| lg | 48px | 16px 24px | text-lg |

## States

- Default
- Hover
- Active/Pressed
- Disabled
- Loading

## Tokens Used

- Background: `primary`, `secondary`
- Text: `text-primary`, `background`
- Border Radius: `radius-sm`
EOF
echo -e "${GREEN}✓${NC} Created button.md component"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Design System initialized!${NC}"
echo ""
echo "Created structure:"
echo "├── design/"
echo "│   ├── system/"
echo "│   │   ├── tokens/"
echo "│   │   │   ├── colors.md"
echo "│   │   │   ├── typography.md"
echo "│   │   │   └── spacing.md"
echo "│   │   ├── components/"
echo "│   │   │   └── button.md"
echo "│   │   └── assets/"
echo "│   ├── references/"
echo "│   │   ├── moodboard/"
echo "│   │   └── benchmarks/"
echo "│   └── specs/"
echo "└── .pen/"
echo "    ├── screens/"
echo "    └── components/"
echo ""
echo "Next steps:"
echo "1. Edit token files with your project's values"
echo "2. Add component specs as needed"
echo "3. Use /design to create designs"
