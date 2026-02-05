# Pencil.dev Prompt Patterns

Effective prompt patterns for generating designs in Pencil.dev canvas.

## Prompt Structure

### Basic Pattern

```
Create a [component/screen type] with:
- [Element 1]
- [Element 2]
- [Element 3]

Style: [color scheme, typography]
Layout: [arrangement, sizing]
```

### Detailed Pattern

```
Design a [specific screen] for [app type/context]:

**Header:**
- [Header elements]

**Main Content:**
- [Content structure]
- [Key components]

**Actions:**
- [Buttons, CTAs]

**Style Guidelines:**
- Colors: [specific hex values or descriptions]
- Typography: [font sizes, weights]
- Spacing: [padding, margins]
```

## Screen Type Prompts

### Login/Authentication

```
Create a mobile login screen:

Header:
- App logo centered, 48px
- "Welcome back" heading below logo

Form:
- Email input with envelope icon
- Password input with eye toggle for show/hide
- "Forgot password?" link aligned right

Actions:
- "Sign In" primary button, full width
- OR divider
- Google and Apple social login buttons
- "Don't have an account? Sign up" link

Style:
- White background
- Blue (#3B82F6) for primary actions
- Gray (#6B7280) for secondary text
- 24px padding all around
- 16px spacing between elements
```

### Dashboard

```
Design a dashboard overview screen:

Header:
- "Good morning, [Name]" greeting
- Today's date
- Notification bell and avatar on right

Stats Cards (row of 3):
- Total Revenue: $12,345 with up arrow +12%
- Active Users: 1,234 with up arrow +5%
- Pending Tasks: 23 with neutral indicator

Chart Section:
- Line chart showing weekly trends
- Legend below chart
- Time period selector (Week/Month/Year)

Recent Activity:
- List of 5 recent items
- Icon, title, timestamp for each
- "View all" link

Style:
- Light gray (#F9FAFB) background
- White cards with subtle shadow
- Rounded corners (8px)
- 24px grid gap
```

### Settings

```
Create a settings page with sections:

Navigation:
- Back arrow and "Settings" title
- Save button on right

Profile Section:
- Avatar with edit overlay
- Name input field
- Email input field (read-only indicator)
- Phone input field

Preferences Section:
- "Notifications" toggle row
- "Dark mode" toggle row
- "Language" dropdown selector

Account Section:
- "Change password" navigation row
- "Privacy settings" navigation row
- "Delete account" destructive row (red text)

Style:
- Grouped sections with headers
- Dividers between rows
- Chevron icons for navigation rows
- Toggle switches for boolean options
```

### List/Feed

```
Design a content feed screen:

Header:
- "Discover" title
- Search icon, filter icon

Filter Bar:
- Horizontal scrolling chips: All, Popular, Recent, Following

Content Cards (vertical scroll):
- Each card contains:
  - Hero image (16:9 ratio)
  - Title (max 2 lines, truncate)
  - Author avatar + name + date
  - Like and comment counts
  - Bookmark icon

Floating Action:
- "+" button bottom right for new post

Style:
- Card spacing: 16px
- Card border radius: 12px
- Subtle shadow on cards
- 16px horizontal padding
```

### Form/Input

```
Create a checkout form:

Progress:
- Step indicator: Shipping → Payment → Review
- Currently on Payment step

Payment Method:
- Credit Card selected
- Apple Pay, Google Pay alternatives

Card Details:
- Card number input with card type icon
- Expiry (MM/YY) and CVV side by side
- Cardholder name input

Billing Address:
- "Same as shipping" checkbox (checked)
- Collapsible address form

Order Summary:
- Collapsible section
- Items count, subtotal
- Tax, shipping
- Total highlighted

Actions:
- "Back" secondary button
- "Pay $XX.XX" primary button

Style:
- Sections separated by dividers
- Input fields with labels above
- Error states in red
- Secure payment badge
```

## Component Prompts

### Navigation

```
Create a bottom navigation bar:

5 tabs:
- Home (house icon) - active
- Search (magnifier icon)
- Add (plus in circle, larger)
- Messages (chat bubble) - with badge "3"
- Profile (person icon)

Style:
- White background
- Active: blue icon + text
- Inactive: gray icon only
- Safe area padding for iOS
- Subtle top border
```

### Cards

```
Design a product card component:

Structure:
- Product image (square, 1:1)
- Wishlist heart icon overlay (top right)
- Product name (max 2 lines)
- Price: current price bold, original price strikethrough
- Star rating (4.5) with review count
- "Add to Cart" button

Variants:
1. Default state
2. Hover state (subtle scale up)
3. Out of stock (grayed, "Notify Me" button)
4. Sale badge ("20% OFF" red tag)

Grid: 2 columns on mobile, 4 on desktop
```

### Modals/Dialogs

```
Create a confirmation dialog:

Structure:
- Warning icon (yellow)
- Title: "Delete Item?"
- Message: "This action cannot be undone. Are you sure you want to delete this item?"
- Checkbox: "Don't ask me again"
- Buttons: "Cancel" (secondary), "Delete" (destructive/red)

Style:
- Centered overlay
- White background, rounded corners (16px)
- Dark semi-transparent backdrop
- Max width: 400px
- 24px padding
```

### Empty States

```
Design an empty state for no search results:

Structure:
- Illustration: magnifying glass with question mark
- Title: "No results found"
- Description: "Try adjusting your search or filters to find what you're looking for."
- Action: "Clear filters" button (secondary)

Alternative suggestions:
- "Popular searches:" with tag links

Style:
- Centered vertically and horizontally
- Illustration: 200x200px
- Muted colors
- Generous whitespace
```

## Style Modifiers

### Tone/Mood

```
Style: Modern and minimal
- Clean lines, ample whitespace
- Monochromatic with one accent color
- Sans-serif typography

Style: Friendly and playful
- Rounded corners everywhere
- Vibrant, varied colors
- Illustrations and icons
- Casual language

Style: Professional and corporate
- Sharp corners, subtle shadows
- Navy, gray, white palette
- Structured grid layout
- Formal typography
```

### Platform-Specific

```
iOS Style:
- SF Pro font
- System blue (#007AFF)
- Large titles
- Edge-to-edge content
- Bottom sheets over modals

Android Material:
- Roboto font
- Purple (#6200EE) primary
- FAB for primary actions
- App bar with hamburger
- Snackbar for feedback

Web Desktop:
- Sidebar navigation
- Hover states important
- Keyboard shortcuts
- Multi-column layouts
```

## Iteration Prompts

### Refinement

```
Update the previous design:
- Make the header sticky on scroll
- Add loading skeleton for cards
- Increase button padding to 16px
- Change primary color to #10B981
```

### Variation

```
Create a dark mode variant:
- Background: #111827
- Cards: #1F2937
- Text: #F9FAFB
- Keep accent colors the same
- Adjust shadows for dark context
```

### Responsive

```
Adapt the dashboard for mobile:
- Stack stat cards vertically
- Make chart full width
- Add horizontal scroll for tables
- Move navigation to bottom bar
- Collapsible sidebar becomes hamburger menu
```

## Best Practices

### Do's

- Be specific with measurements and colors
- Reference design tokens when available
- Include all interactive states
- Describe content structure clearly
- Mention platform-specific patterns

### Don'ts

- Avoid vague terms like "nice" or "modern" without specifics
- Don't skip error and empty states
- Don't forget accessibility requirements
- Avoid conflicting style instructions
- Don't assume default behaviors

### Prompt Length

| Complexity | Prompt Length | Detail Level |
|------------|---------------|--------------|
| Simple component | 50-100 words | Basic structure |
| Standard screen | 150-250 words | Full sections |
| Complex flow | 300-500 words | All states, variations |
