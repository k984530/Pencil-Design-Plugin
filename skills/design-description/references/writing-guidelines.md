# Design Description Writing Guidelines

Comprehensive guide for writing clear, effective design descriptions.

## Core Principles

### 1. Clarity Over Brevity

Write enough detail to eliminate ambiguity. A longer, clear description is better than a short, vague one.

**❌ Too vague:**
```
Add a header with navigation
```

**✅ Clear:**
```
Header (64px height):
- Logo on left (32px height, linked to home)
- Navigation links center-aligned: Home, Products, About, Contact
- Search icon and user avatar on right
- Sticky on scroll
```

### 2. Structured Hierarchy

Organize information in consistent hierarchies:

```
Screen
└── Section
    └── Component
        └── Element
            └── State
```

### 3. Measurable Specifications

Replace subjective terms with measurable values:

| ❌ Subjective | ✅ Measurable |
|---------------|---------------|
| "Large button" | "Button, lg size (48px height)" |
| "Some padding" | "`space-4` (16px) padding" |
| "Light gray" | "`surface` (#F9FAFB)" |
| "Bold text" | "`weight-semibold` (600)" |
| "Rounded corners" | "`radius-md` (8px)" |

## Writing Components

### Element Descriptions

Follow this pattern for each UI element:

```markdown
### [Element Name]
- **Type**: Button / Input / Text / Image / etc.
- **Variant**: Primary / Secondary / etc. (if applicable)
- **Size**: xs / sm / md / lg / xl
- **Content**: "Button Label" or description
- **Position**: Left / Center / Right, Top / Middle / Bottom
- **States**: Default, Hover, Active, Disabled, Error
- **Behavior**: Click action, validation, etc.
```

### Layout Descriptions

Describe layouts with clear structure:

```markdown
### Layout

**Container**
- Max width: 1280px
- Padding: `space-6` (24px) horizontal
- Centered on page

**Grid**
- Columns: 12
- Gap: `space-4` (16px)
- Responsive:
  - Desktop (≥1024px): 3 columns
  - Tablet (≥768px): 2 columns
  - Mobile (<768px): 1 column

**Section Spacing**
- Between sections: `space-12` (48px)
- Within sections: `space-6` (24px)
```

### State Descriptions

Document all interaction states:

```markdown
### States

#### Default
- Background: `surface`
- Border: 1px `border`
- Text: `text-primary`

#### Hover
- Background: `surface-hover`
- Border: 1px `border-hover`
- Cursor: pointer

#### Focus
- Border: 2px `border-focus`
- Outline: 2px offset `primary` (opacity 25%)

#### Active
- Background: `surface-active`
- Scale: 98%

#### Disabled
- Opacity: 50%
- Cursor: not-allowed
- Interaction: none

#### Error
- Border: 1px `error`
- Helper text: Error message in `error` color
```

## Content Guidelines

### Text Content

Specify exact copy or content patterns:

```markdown
### Text Content

**Heading**
- Copy: "Welcome back"
- Fallback: User's first name ("Welcome back, {firstName}")

**Description**
- Copy: "Sign in to continue to your dashboard"
- Max length: 80 characters
- Truncation: Ellipsis (...)

**Button**
- Default: "Sign In"
- Loading: "Signing in..."
- Success: "Success!"
```

### Dynamic Content

Describe patterns for variable content:

```markdown
### Dynamic Content

**User Name**
- Format: "{firstName} {lastName}"
- Max display: 24 characters
- Truncation: "{firstName} {lastInitial}."
- Empty state: "Guest"

**Price**
- Format: "$X,XXX.XX"
- Currency: User's locale
- Free: "Free" (not "$0.00")

**Date**
- Format: "MMM DD, YYYY" (e.g., "Jan 15, 2024")
- Relative: "Today", "Yesterday", "X days ago"
```

## Edge Cases

### Empty States

Always define empty states:

```markdown
### Empty State

**Visual**
- Illustration: empty-inbox.svg (centered)
- Size: 200px × 200px

**Content**
- Heading: "No messages yet"
- Description: "When you receive messages, they'll appear here."
- Action: "Start a conversation" button (Secondary)
```

### Loading States

Describe loading behavior:

```markdown
### Loading State

**Initial Load**
- Skeleton screens for content areas
- Preserve layout structure
- Animation: Shimmer effect

**Action Loading**
- Button shows spinner
- Button text changes to "Loading..."
- Disable all form inputs
- Show progress indicator for long operations

**Partial Load**
- Load critical content first
- Lazy load images below fold
- Show placeholder for deferred content
```

### Error States

Document error handling:

```markdown
### Error States

**Field Validation**
- Show inline below input
- Icon: ⚠️ warning icon
- Color: `error`
- Message examples:
  - Email: "Please enter a valid email address"
  - Password: "Password must be at least 8 characters"

**Form Error**
- Show alert banner at top of form
- Color: `error-light` background
- Icon: ❌ error icon
- Dismissible: Yes

**Page Error**
- Full page error state
- Illustration: error-500.svg
- Retry button available
```

### Overflow Handling

Specify text and content overflow:

```markdown
### Overflow Handling

**Single Line Text**
- Truncate with ellipsis
- Show full text on hover (tooltip)
- Max width: Container width minus padding

**Multi-line Text**
- Limit: 3 lines
- Truncate with "... Read more" link
- Expandable: Yes

**Lists**
- Show first 5 items
- "Show X more" button
- Virtualize for 50+ items
```

## Responsive Design

### Breakpoint Definitions

```markdown
### Breakpoints

| Name | Min Width | Common Devices |
|------|-----------|----------------|
| mobile | 0 | Phones |
| tablet | 768px | Tablets, small laptops |
| desktop | 1024px | Laptops, desktops |
| wide | 1280px | Large monitors |
```

### Responsive Behavior

Document changes per breakpoint:

```markdown
### Responsive Behavior

**Navigation**
- Desktop: Horizontal nav links
- Tablet: Horizontal, reduced padding
- Mobile: Hamburger menu → slide-out drawer

**Grid Layout**
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column (stacked)

**Typography**
- Desktop: `text-4xl` heading
- Tablet: `text-3xl` heading
- Mobile: `text-2xl` heading

**Spacing**
- Desktop: `space-8` sections
- Mobile: `space-6` sections
```

## Accessibility Notes

Include accessibility requirements:

```markdown
### Accessibility

**Keyboard Navigation**
- Tab order follows visual order
- Focus visible on all interactive elements
- Escape closes modals/dropdowns

**Screen Readers**
- All images have alt text
- Form fields have associated labels
- Error messages announced automatically
- Live regions for dynamic updates

**Color & Contrast**
- Text contrast: Minimum 4.5:1
- Large text contrast: Minimum 3:1
- Don't rely on color alone for meaning

**Touch Targets**
- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum
```

## Animation & Motion

Describe animations when relevant:

```markdown
### Animation

**Page Transitions**
- Type: Fade
- Duration: 200ms
- Easing: ease-out

**Micro-interactions**
- Button press: Scale down 2%, 100ms
- Hover effects: 150ms transition
- Form validation: Shake animation on error

**Content Loading**
- Skeleton shimmer: 1.5s infinite
- Fade in: 200ms ease-out
- Stagger delay: 50ms between items

**Respect Motion Preferences**
- Honor `prefers-reduced-motion`
- Provide instant alternatives
```

## Checklist Before Submission

Use this checklist before marking a spec as ready:

```markdown
## Review Checklist

### Content
- [ ] All text content specified or templated
- [ ] Dynamic content patterns defined
- [ ] Placeholder/empty states described

### Visual
- [ ] All design tokens referenced
- [ ] Layout clearly defined
- [ ] Spacing values specified
- [ ] Typography styles listed

### States
- [ ] Default state documented
- [ ] Interactive states (hover, focus, active)
- [ ] Loading states defined
- [ ] Error states described
- [ ] Disabled states noted

### Edge Cases
- [ ] Empty states designed
- [ ] Overflow handling specified
- [ ] Long content handling
- [ ] Error scenarios covered

### Responsive
- [ ] All breakpoints addressed
- [ ] Layout changes documented
- [ ] Touch targets sized appropriately

### Accessibility
- [ ] Keyboard navigation noted
- [ ] Screen reader requirements
- [ ] Color contrast verified
- [ ] Touch target sizes specified
```
