# Design Token Naming Conventions

Comprehensive guide for naming design tokens consistently across projects.

## Naming Principles

### 1. Semantic Over Literal

Prefer semantic names that describe purpose over literal values:

| ❌ Avoid | ✅ Prefer | Reason |
|----------|-----------|--------|
| `blue-500` | `primary` | Purpose-driven |
| `gray-100` | `surface` | Context-aware |
| `14px` | `text-sm` | Scalable |

### 2. Hierarchical Structure

Use a consistent hierarchy: `category-property-variant-state`

```
color-background-primary-hover
│     │          │       └── State (optional)
│     │          └── Variant (optional)
│     └── Property
└── Category
```

### 3. Kebab-Case Convention

Always use lowercase with hyphens:
- ✅ `text-primary`
- ✅ `space-4`
- ❌ `textPrimary`
- ❌ `TEXT_PRIMARY`

## Category Guidelines

### Colors

```
color-{property}-{variant}

Properties:
- background
- text
- border
- icon

Variants:
- primary, secondary, tertiary
- success, warning, error, info
- muted, subtle, emphasis
```

**Examples:**
```
color-background-primary
color-text-secondary
color-border-subtle
color-icon-muted
```

### Typography

```
{property}-{scale}

Properties:
- font (family)
- text (size)
- leading (line-height)
- tracking (letter-spacing)
- weight
```

**Examples:**
```
font-sans
font-mono
text-xs, text-sm, text-base, text-lg, text-xl
weight-normal, weight-medium, weight-bold
leading-tight, leading-normal, leading-relaxed
```

### Spacing

```
space-{scale}

Scale options:
- Numeric: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16
- Semantic: xs, sm, md, lg, xl, 2xl
```

**Examples:**
```
space-1 (4px)
space-2 (8px)
space-4 (16px)
space-8 (32px)
```

### Border Radius

```
radius-{scale}

Scale:
- none, sm, md, lg, xl, full
```

**Examples:**
```
radius-none (0)
radius-sm (4px)
radius-md (8px)
radius-lg (12px)
radius-full (9999px)
```

### Shadows

```
shadow-{scale}

Scale:
- none, sm, md, lg, xl, 2xl
```

**Examples:**
```
shadow-none
shadow-sm (subtle elevation)
shadow-md (card elevation)
shadow-lg (modal elevation)
```

## State Suffixes

Append state to base token when needed:

| State | Suffix | Example |
|-------|--------|---------|
| Default | (none) | `primary` |
| Hover | `-hover` | `primary-hover` |
| Active | `-active` | `primary-active` |
| Disabled | `-disabled` | `primary-disabled` |
| Focus | `-focus` | `border-focus` |

## Platform Mapping

### Tailwind CSS

```
Design Token → Tailwind Class
primary → bg-blue-500 / text-blue-500
space-4 → p-4 / m-4 / gap-4
text-lg → text-lg
radius-md → rounded-lg
```

### CSS Variables

```
Design Token → CSS Variable
primary → --color-primary
space-4 → --space-4
text-lg → --text-lg
```

### Flutter

```
Design Token → Dart Constant
primary → AppColors.primary
space4 → AppSpacing.md
textLg → AppTypography.bodyLarge
```

### React Native

```
Design Token → Style Object
primary → colors.primary
space4 → spacing.md
textLg → typography.bodyLarge
```

## Token Organization by Theme

### Light/Dark Mode

```
color-background-primary
├── light: #FFFFFF
└── dark: #1F2937

color-text-primary
├── light: #111827
└── dark: #F9FAFB
```

### Multi-Brand

```
brand-a/
├── color-primary: #3B82F6
└── color-secondary: #6366F1

brand-b/
├── color-primary: #10B981
└── color-secondary: #14B8A6
```

## Deprecation Strategy

When renaming tokens, maintain backwards compatibility:

```markdown
## Deprecated Tokens

| Old Token | New Token | Removal Date |
|-----------|-----------|--------------|
| `bg-primary` | `color-background-primary` | 2024-06-01 |
| `txt-main` | `color-text-primary` | 2024-06-01 |
```

## Checklist for New Tokens

Before adding a new token:

- [ ] Does a similar token already exist?
- [ ] Is the name semantic (describes purpose)?
- [ ] Does it follow the naming convention?
- [ ] Is it documented with value and usage?
- [ ] Does it work across light/dark modes?
- [ ] Is it platform-agnostic?
