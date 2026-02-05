# Color Tokens

> Design system color definitions for [Project Name]

## Brand Colors

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| primary | #3B82F6 | 🔵 | Primary actions, links, focus states |
| primary-hover | #2563EB | 🔵 | Hover state for primary elements |
| primary-active | #1D4ED8 | 🔵 | Active/pressed state |
| secondary | #6B7280 | ⚫ | Secondary actions, less emphasis |
| secondary-hover | #4B5563 | ⚫ | Hover state for secondary |
| accent | #8B5CF6 | 🟣 | Accent elements, highlights |

## Semantic Colors

### Feedback Colors

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| success | #10B981 | 🟢 | Success messages, confirmations |
| success-light | #D1FAE5 | 🟢 | Success backgrounds |
| warning | #F59E0B | 🟡 | Warning alerts, cautions |
| warning-light | #FEF3C7 | 🟡 | Warning backgrounds |
| error | #EF4444 | 🔴 | Error states, destructive actions |
| error-light | #FEE2E2 | 🔴 | Error backgrounds |
| info | #3B82F6 | 🔵 | Informational messages |
| info-light | #DBEAFE | 🔵 | Info backgrounds |

## Neutral Colors

### Backgrounds

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| background | #FFFFFF | ⬜ | Page background |
| surface | #F9FAFB | ⬜ | Card, panel backgrounds |
| surface-hover | #F3F4F6 | ⬜ | Hover state for surfaces |
| surface-active | #E5E7EB | ⬜ | Active/selected surfaces |

### Text

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| text-primary | #111827 | ⬛ | Main text, headings |
| text-secondary | #6B7280 | ⬛ | Supporting text, labels |
| text-tertiary | #9CA3AF | ⬛ | Placeholder, disabled text |
| text-inverse | #FFFFFF | ⬜ | Text on dark backgrounds |

### Borders

| Token | Value | Preview | Usage |
|-------|-------|---------|-------|
| border | #E5E7EB | ⬜ | Default borders, dividers |
| border-hover | #D1D5DB | ⬜ | Hover state borders |
| border-focus | #3B82F6 | 🔵 | Focus ring color |

## Dark Mode (Optional)

| Token | Light | Dark |
|-------|-------|------|
| background | #FFFFFF | #111827 |
| surface | #F9FAFB | #1F2937 |
| text-primary | #111827 | #F9FAFB |
| text-secondary | #6B7280 | #9CA3AF |
| border | #E5E7EB | #374151 |

---

## Usage Notes

### Accessibility

- Ensure text colors meet WCAG AA contrast ratio (4.5:1 for normal text)
- Use `text-primary` on `background` for main content
- Use `text-inverse` on `primary` for button labels

### Consistency

- Use semantic colors (success, error) for feedback states
- Avoid using raw hex values; always reference tokens
- Test colors in both light and dark modes if supporting themes
