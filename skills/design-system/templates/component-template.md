# {Component Name}

> Brief description of what this component is and its primary purpose.

## Overview

{Component Name} is used for {primary use case}. It provides {key benefit} and supports {key feature}.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| primary | High emphasis, main actions | Submit, Save, Confirm |
| secondary | Medium emphasis, supporting | Cancel, Back, Reset |
| outline | Low emphasis, bordered | Filters, toggles |
| ghost | Minimal, text-only | Inline actions, links |
| destructive | Dangerous actions | Delete, Remove |

## Sizes

| Size | Height | Padding (h/v) | Font Size | Icon Size |
|------|--------|---------------|-----------|-----------|
| xs | 24px | 8px / 4px | text-xs | 12px |
| sm | 32px | 12px / 6px | text-sm | 14px |
| md | 40px | 16px / 8px | text-base | 16px |
| lg | 48px | 20px / 10px | text-lg | 20px |
| xl | 56px | 24px / 12px | text-xl | 24px |

## States

### Interactive States

| State | Description | Visual Change |
|-------|-------------|---------------|
| Default | Normal resting state | Base colors |
| Hover | Mouse over | Darker background, cursor pointer |
| Focus | Keyboard focus | Focus ring (border-focus) |
| Active | Being clicked/pressed | Darkest background |
| Disabled | Not interactive | 50% opacity, cursor not-allowed |

### Loading State

- Show spinner icon
- Disable interaction
- Optional: Show loading text

## Specifications

### Primary Variant

```
Background: primary (#3B82F6)
Background Hover: primary-hover (#2563EB)
Background Active: primary-active (#1D4ED8)
Text: text-inverse (#FFFFFF)
Border: none
Border Radius: radius-sm (4px)
```

### Secondary Variant

```
Background: surface (#F9FAFB)
Background Hover: surface-hover (#F3F4F6)
Text: text-primary (#111827)
Border: 1px solid border (#E5E7EB)
Border Radius: radius-sm (4px)
```

### Outline Variant

```
Background: transparent
Background Hover: surface-hover (#F3F4F6)
Text: primary (#3B82F6)
Border: 1px solid primary (#3B82F6)
Border Radius: radius-sm (4px)
```

### Ghost Variant

```
Background: transparent
Background Hover: surface-hover (#F3F4F6)
Text: text-primary (#111827)
Border: none
Border Radius: radius-sm (4px)
```

### Destructive Variant

```
Background: error (#EF4444)
Background Hover: #DC2626
Text: text-inverse (#FFFFFF)
Border: none
Border Radius: radius-sm (4px)
```

## Design Tokens Used

### Colors
- `primary`, `primary-hover`, `primary-active`
- `surface`, `surface-hover`
- `text-primary`, `text-inverse`
- `border`, `border-focus`
- `error`

### Typography
- Font: `font-sans`
- Size: Varies by size prop
- Weight: `weight-medium`

### Spacing
- Padding: Varies by size prop
- Gap (with icon): `space-2` (8px)

### Effects
- Border Radius: `radius-sm` (4px)
- Focus Ring: 2px offset, `border-focus` color

## Anatomy

```
┌─────────────────────────────────┐
│  [Icon]  Label Text  [Icon]     │
└─────────────────────────────────┘
     ↑          ↑          ↑
  Leading    Content    Trailing
   Icon                   Icon
```

- **Leading Icon**: Optional, before text
- **Label Text**: Required, button text
- **Trailing Icon**: Optional, after text

## Usage Guidelines

### ✅ Do

- Use primary for main page action
- Use secondary for supporting actions
- Use destructive only for permanent actions
- Include clear, action-oriented labels
- Add icons to enhance meaning

### ❌ Don't

- Don't use multiple primary buttons together
- Don't use destructive for reversible actions
- Don't use icon-only without aria-label
- Don't exceed 3-4 words in label
- Don't disable without explanation

## Accessibility

- Minimum touch target: 44px × 44px
- Color contrast: 4.5:1 for text
- Include `aria-label` for icon-only buttons
- Support keyboard navigation (Enter, Space)
- Visible focus indicator

## Examples

### Basic Usage

```
[Primary Button]  [Secondary Button]  [Ghost]
```

### With Icons

```
[🔍 Search]  [Save 💾]  [← Back]
```

### Button Group

```
[Cancel] [Save Draft] [Publish]
```

### Loading State

```
[⟳ Saving...]
```

## Visual Reference

See: `../assets/{component-name}-variants.png`

---

## Change Log

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | YYYY-MM-DD | Initial specification |
