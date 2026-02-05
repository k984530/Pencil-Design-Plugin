# Typography Tokens

> Design system typography definitions for [Project Name]

## Font Families

| Token | Value | Usage |
|-------|-------|-------|
| font-sans | 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif | Body text, UI elements |
| font-serif | 'Georgia', 'Times New Roman', serif | Editorial, long-form content |
| font-mono | 'JetBrains Mono', 'Fira Code', 'Consolas', monospace | Code blocks, technical content |

## Type Scale

### Font Sizes

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| text-xs | 12px (0.75rem) | 16px (1rem) | Captions, badges, labels |
| text-sm | 14px (0.875rem) | 20px (1.25rem) | Secondary text, form labels |
| text-base | 16px (1rem) | 24px (1.5rem) | Body text, paragraphs |
| text-lg | 18px (1.125rem) | 28px (1.75rem) | Lead text, large body |
| text-xl | 20px (1.25rem) | 28px (1.75rem) | Small headings (h4) |
| text-2xl | 24px (1.5rem) | 32px (2rem) | Section headings (h3) |
| text-3xl | 30px (1.875rem) | 36px (2.25rem) | Page headings (h2) |
| text-4xl | 36px (2.25rem) | 40px (2.5rem) | Hero headings (h1) |
| text-5xl | 48px (3rem) | 48px (3rem) | Display headings |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| weight-light | 300 | Decorative, large display text |
| weight-normal | 400 | Body text, regular content |
| weight-medium | 500 | Emphasis, buttons, labels |
| weight-semibold | 600 | Subheadings, strong emphasis |
| weight-bold | 700 | Headings, important content |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| leading-none | 1 | Single-line text, buttons |
| leading-tight | 1.25 | Headings, compact text |
| leading-snug | 1.375 | Tight body text |
| leading-normal | 1.5 | Default body text |
| leading-relaxed | 1.625 | Comfortable reading |
| leading-loose | 2 | Spacious paragraphs |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| tracking-tighter | -0.05em | Display headings |
| tracking-tight | -0.025em | Headings |
| tracking-normal | 0 | Body text |
| tracking-wide | 0.025em | Uppercase labels |
| tracking-wider | 0.05em | Button text, badges |

## Text Styles (Presets)

### Headings

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| display | font-sans | text-5xl | weight-bold | leading-tight | tracking-tight |
| h1 | font-sans | text-4xl | weight-bold | leading-tight | tracking-tight |
| h2 | font-sans | text-3xl | weight-semibold | leading-tight | tracking-normal |
| h3 | font-sans | text-2xl | weight-semibold | leading-snug | tracking-normal |
| h4 | font-sans | text-xl | weight-medium | leading-snug | tracking-normal |

### Body

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| body-lg | font-sans | text-lg | weight-normal | leading-relaxed |
| body | font-sans | text-base | weight-normal | leading-normal |
| body-sm | font-sans | text-sm | weight-normal | leading-normal |

### UI Elements

| Style | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| button | font-sans | text-sm | weight-medium | leading-none | tracking-wide |
| label | font-sans | text-sm | weight-medium | leading-tight | tracking-normal |
| caption | font-sans | text-xs | weight-normal | leading-tight | tracking-normal |
| overline | font-sans | text-xs | weight-semibold | leading-tight | tracking-wider |

### Code

| Style | Font | Size | Weight | Line Height |
|-------|------|------|--------|-------------|
| code | font-mono | text-sm | weight-normal | leading-normal |
| code-block | font-mono | text-sm | weight-normal | leading-relaxed |

---

## Usage Guidelines

### Hierarchy

1. Use one `h1` per page
2. Don't skip heading levels (h1 → h3)
3. Use body styles for paragraphs
4. Reserve display style for hero sections

### Accessibility

- Minimum body text size: 16px (text-base)
- Minimum touch target label: 14px (text-sm)
- Ensure sufficient contrast between text and background
- Avoid using font-weight alone to convey meaning

### Responsive Considerations

- Consider reducing heading sizes on mobile
- Maintain readable line lengths (45-75 characters)
- Increase line height for smaller screens
