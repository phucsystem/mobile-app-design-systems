# Basic Design (UI Specification)

## 1. Design System

### Reference Source
- URL: https://tamagui.dev
- Template: ../mobile-scan-shot-prototypes (HTML/CSS prototype)
- Extracted: 2026-02-15

### Color Palette

#### Base Colors (Tokens)

| Token | Light Value | Dark Value | Usage |
|-------|------------|------------|-------|
| `$white` | `#FFFFFF` | `#FFFFFF` | Pure white |
| `$black` | `#000000` | `#000000` | Pure black |
| `$gray1` | `#FAFAFA` | `#111111` | Subtle background |
| `$gray2` | `#F5F5F5` | `#1A1A1A` | Card background alt |
| `$gray3` | `#EEEEEE` | `#252525` | Dividers |
| `$gray4` | `#E0E0E0` | `#333333` | Borders |
| `$gray5` | `#BDBDBD` | `#555555` | Disabled |
| `$gray6` | `#9E9E9E` | `#777777` | Placeholder |
| `$gray7` | `#757575` | `#999999` | Secondary text |
| `$gray8` | `#616161` | `#BBBBBB` | Body text |
| `$gray9` | `#424242` | `#DDDDDD` | Strong text |
| `$gray10` | `#212121` | `#F5F5F5` | Primary text |

#### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `$primary` | `#1976D2` | Main actions, active states, links |
| `$primaryLight` | `#42A5F5` | Hover/focus states |
| `$primaryDark` | `#1565C0` | Pressed states |
| `$primaryBg` | `#E3F2FD` | Primary tinted backgrounds |
| `$success` | `#388E3C` | Success states, confirmations |
| `$warning` | `#F9A825` | Warning states, cautions |
| `$error` | `#D32F2F` | Error states, destructive actions |
| `$info` | `#0288D1` | Informational states |

#### Theme Tokens (Contextual)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `$background` | `#FFFFFF` | `#000000` | Screen background |
| `$backgroundSoft` | `#F5F5F5` | `#111111` | Secondary background |
| `$color` | `#212121` | `#F5F5F5` | Primary text |
| `$colorSoft` | `#757575` | `#999999` | Secondary text |
| `$borderColor` | `#E0E0E0` | `#333333` | Default border |
| `$shadowColor` | `rgba(0,0,0,0.12)` | `rgba(0,0,0,0.4)` | Default shadow |
| `$cardBackground` | `#FFFFFF` | `#1A1A1A` | Card surfaces |
| `$overlayColor` | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.7)` | Modal overlays |

### Typography

#### Font Families

| Token | iOS | Android | Usage |
|-------|-----|---------|-------|
| `$heading` | SF Pro Display | Roboto | Headlines h1-h4 |
| `$body` | SF Pro Text | Roboto | Body, captions |
| `$mono` | SF Mono | Roboto Mono | Code snippets |

#### Type Scale

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `$h1` | 28px | 34px | 700 (Bold) | Page titles |
| `$h2` | 24px | 30px | 600 (SemiBold) | Section headers |
| `$h3` | 20px | 26px | 600 (SemiBold) | Card titles |
| `$h4` | 18px | 24px | 500 (Medium) | Subsection headers |
| `$body1` | 16px | 24px | 400 (Regular) | Body text |
| `$body2` | 14px | 20px | 400 (Regular) | Secondary body |
| `$caption` | 12px | 16px | 400 (Regular) | Captions, metadata |
| `$button` | 16px | 20px | 500 (Medium) | Button labels |
| `$overline` | 11px | 16px | 600 (SemiBold) | Overline, labels |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `$0` | 0px | Reset |
| `$xs` | 4px | Tight spacing (icon gaps) |
| `$sm` | 8px | Compact spacing (chip padding) |
| `$md` | 16px | Default spacing (card padding) |
| `$lg` | 24px | Generous spacing (section gaps) |
| `$xl` | 32px | Large spacing (page margins) |
| `$2xl` | 48px | Extra large (hero sections) |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `$xs` | 4px | Badges, tags |
| `$sm` | 8px | Buttons, inputs |
| `$md` | 12px | Cards, modals |
| `$lg` | 16px | Bottom sheets, dialogs |
| `$xl` | 24px | Images, avatars |
| `$full` | 9999px | Pills, circles |

### Shadow System

| Token | Value | Usage |
|-------|-------|-------|
| `$sm` | 0 1px 3px $shadowColor | Cards default |
| `$md` | 0 4px 12px $shadowColor | Elevated cards |
| `$lg` | 0 8px 24px $shadowColor | Modals, sheets |
| `$xl` | 0 16px 48px $shadowColor | Popovers |

### Size Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `$icon.sm` | 16px | Small inline icons |
| `$icon.md` | 24px | Default icons |
| `$icon.lg` | 32px | Large icons |
| `$touchTarget` | 44px | Min interactive area |
| `$avatar.sm` | 32px | Small avatar |
| `$avatar.md` | 48px | Default avatar |
| `$avatar.lg` | 80px | Profile avatar |
| `$header` | 56px | Navigation header height |
| `$tabBar` | 64px | Tab bar height |

### CJX Stage Animation Variables

| Stage | Duration | Easing | Stagger | Context |
|-------|----------|--------|---------|---------|
| Onboarding | 600ms | ease-out | 100ms | First-time flows, splash |
| Usage | 300ms | ease | 60ms | Core task screens |
| Retention | 400ms | ease | 80ms | Returning user screens |
| Discovery | 800ms | ease-out | 120ms | Explore, upsell flows |

## 2. Component Specifications

### Core Components (FR-03)

#### Button
- **Variants:** solid, outline, ghost, link
- **Sizes:** sm (32px), md (44px), lg (52px)
- **States:** default, hover, pressed, disabled, loading
- **Platform:** iOS rounded corners, Android ripple effect
- **Props:** variant, size, icon?, iconPosition?, loading?, disabled?

#### Card
- **Variants:** elevated, outlined, filled
- **Sizes:** compact, default, large
- **Slots:** Card.Header, Card.Content, Card.Footer, Card.Image
- **Platform:** iOS subtle shadow, Android elevation

#### Input
- **Variants:** outlined, filled, underlined
- **States:** default, focused, error, disabled
- **Slots:** Input.Icon (left), Input.Action (right)
- **Props:** label?, placeholder, error?, helper?

#### Modal / Dialog
- **Types:** alert, confirm, custom
- **Animation:** scale(0.92)→1, fade, 200ms
- **Slots:** Dialog.Title, Dialog.Description, Dialog.Actions

#### Sheet (Bottom Sheet)
- **Snap points:** 25%, 50%, 90%
- **Animation:** slideUp, 300ms
- **Props:** snapPoints[], dismissOnOverlayPress?, handle?

#### Badge
- **Variants:** solid, outline, subtle
- **Sizes:** sm, md
- **Props:** variant, color?, label

#### Avatar
- **Sizes:** sm (32), md (48), lg (80)
- **Fallback:** initials, placeholder icon
- **Props:** src?, fallback?, size

#### Toast
- **Position:** bottom (100px from edge)
- **Animation:** fade + translateY, 2.5s auto-dismiss
- **Variants:** info, success, warning, error

### Content Components (FR-05)

#### ArticleCard
- **Layout:** image top, title, subtitle, metadata row
- **Variants:** vertical (default), horizontal (compact)
- **Slots:** ArticleCard.Image, .Title, .Subtitle, .Meta, .Actions
- **Props:** onPress, onBookmark?, imageAspectRatio?

#### MediaCard
- **Layout:** full-bleed image, overlay gradient, title
- **Variants:** default, featured (larger), mini (thumbnail)
- **Props:** onPress, mediaDuration?, mediaType?

#### FeaturedCard
- **Layout:** large hero image, overlay text, CTA
- **Size:** full-width, 200px height
- **Props:** onPress, ctaLabel?

#### ContentListItem
- **Layout:** thumbnail (left), title + subtitle + meta (right)
- **Variants:** default, compact
- **Props:** onPress, thumbnail?, rightAction?

#### HorizontalScroll
- **Behavior:** snap to item, peek next item
- **Props:** items[], renderItem, gap?, showIndicator?

### Navigation Components (FR-04)

#### Header
- **Layout:** back (left), title (center), actions (right)
- **Variants:** default, large (collapsible), transparent
- **Height:** 56px default
- **Platform:** iOS centered title, Android left-aligned
- **Props:** title, leftAction?, rightActions[], variant?

#### TabBar
- **Position:** bottom fixed
- **Height:** 64px + safe area
- **Items:** icon + label, max 5 tabs
- **Platform:** iOS pill indicator, Android bottom nav style
- **Props:** items[], activeIndex, onTabPress

#### BackButton
- **Platform:** iOS chevron-left, Android arrow-left
- **Size:** 44x44 touch target
- **Props:** onPress, label?

### Form Components (FR-11)

#### SearchBar
- **Layout:** icon + input, expandable
- **States:** collapsed (icon only), expanded (full input)
- **Props:** value, onChangeText, placeholder?, onExpand?

#### FilterChips
- **Behavior:** horizontal scroll, single or multi select
- **Variants:** outlined, filled when active
- **Props:** items[], selected[], onSelect, multiSelect?

## 3. Screen Specifications

### S-01: Showcase Home
- **CJX Stage:** Retention
- **Layout:** ScrollView with sections
- **Elements:**
  - Header: "Design System" title, theme toggle (sun/moon icon)
  - Section: "Tokens" → color swatches grid, tap to S-03
  - Section: "Components" → category list (Core, Content, Navigation, Form)
  - Each category: horizontal scroll of component preview cards → tap to S-02
  - Section: "Templates" → vertical list of template previews → tap to S-04-S-08
- **Transitions:**
  - Tap component card → S-02 (push)
  - Tap "Tokens" → S-03 (push)
  - Tap template → S-04/S-05/S-06/S-07/S-08 (push)

### S-02: Component Detail
- **CJX Stage:** Usage
- **Layout:** ScrollView with sticky header
- **Elements:**
  - Header: component name, back button
  - Live preview area (centered, themed background)
  - Variant selector (chips: solid, outline, ghost)
  - Size selector (chips: sm, md, lg)
  - Theme toggle (light/dark preview)
  - Props table (name, type, default, description)
- **Transitions:**
  - Back → S-01 (pop)

### S-03: Token Viewer
- **CJX Stage:** Usage
- **Layout:** ScrollView with tab segments
- **Elements:**
  - Tabs: Colors | Typography | Spacing | Radius | Shadows
  - Colors tab: grid of color swatches with name + hex value
  - Typography tab: each scale level rendered with sample text
  - Spacing tab: visual bars showing relative sizes
  - Radius tab: boxes with different corner radii
  - Shadows tab: cards with different elevation levels
- **Transitions:**
  - Back → S-01 (pop)

### S-04: Onboarding Template
- **CJX Stage:** Onboarding (600ms animations)
- **Layout:** Full screen, swipeable pages
- **Elements:**
  - Illustration area (top 60%)
  - Title ($h1) + description ($body1)
  - Page indicator dots
  - "Skip" text button (top-right)
  - "Next" / "Get Started" primary button (bottom)
- **Transitions:**
  - Swipe left → next page
  - "Get Started" → S-05 Feed (replace)

### S-05: Feed Template
- **CJX Stage:** Retention (400ms animations)
- **Layout:** Header + ScrollView + TabBar
- **Elements:**
  - Header: app title, search icon → expands SearchBar
  - FilterChips: horizontal scroll (All, Tech, Design, News...)
  - FeaturedCard: top hero card (if featured content)
  - ArticleCard grid: 1-column list of article cards
  - Pull-to-refresh indicator
  - FAB: compose/add button (bottom-right, above tab bar)
- **Transitions:**
  - Tap article → S-06 Detail (push)
  - Tap search → expand SearchBar / navigate S-07
  - Tab navigation → S-05/S-07/S-08

### S-06: Detail Template
- **CJX Stage:** Usage (300ms animations)
- **Layout:** ScrollView with collapsible header
- **Elements:**
  - Hero image (full-width, 240px, parallax on scroll)
  - Back button (overlay, top-left)
  - Share button (overlay, top-right)
  - Title ($h1) + author avatar + name + date
  - Body content: $body1 text, inline images, blockquotes
  - Action bar (fixed bottom): like, comment, bookmark, share
- **Transitions:**
  - Back → S-05 (pop)
  - Share → native share sheet

### S-07: Search Template
- **CJX Stage:** Discovery (800ms animations)
- **Layout:** Header (SearchBar) + ScrollView
- **Elements:**
  - SearchBar: auto-focused, full-width input
  - Recent searches: list with clock icon, "Clear all" action
  - Trending topics: horizontal chip scroll
  - Search results: ArticleCard list (appears on query)
  - Empty state: illustration + "No results" message
- **Transitions:**
  - Tap result → S-06 Detail (push)
  - Cancel → S-05 (pop)

### S-08: Profile Template
- **CJX Stage:** Retention (400ms animations)
- **Layout:** ScrollView
- **Elements:**
  - Avatar (lg, centered) + display name ($h2) + bio ($body2)
  - Stats row: 3 columns (Articles, Followers, Following)
  - Settings list:
    - Appearance: theme toggle (light/dark/system)
    - Notifications toggle
    - About / Help / Terms
  - "Sign Out" button (destructive, outline variant)
- **Transitions:**
  - Tap setting item → detail screen (push)

## 4. Screen Flow

```
┌─────────────────────────────────────────────┐
│              SHOWCASE APP                    │
│                                             │
│  S-01 Home ─── S-02 Component Detail        │
│      │                                      │
│      ├─────── S-03 Token Viewer             │
│      │                                      │
│      └─────── Template Previews:            │
│               S-04 Onboarding               │
│                  │                          │
│               S-05 Feed ◄── TabBar ──┐      │
│                  │                   │      │
│               S-06 Detail            │      │
│                  │                   │      │
│               S-07 Search ◄──────────┤      │
│                  │                   │      │
│               S-08 Profile ◄─────────┘      │
└─────────────────────────────────────────────┘
```

### Tab Bar Navigation (Templates)

| Tab | Icon | Screen | Badge? |
|-----|------|--------|--------|
| Home | house | S-05 Feed | No |
| Search | search | S-07 Search | No |
| Profile | user | S-08 Profile | No |

## 5. Design Rationale

### Platform-Adaptive Strategy
iOS and Android users expect different visual patterns. Using Tamagui's platform detection, components render with iOS conventions (centered nav titles, rounded cards, SF Pro) on Apple devices and Material patterns (left-aligned titles, elevation shadows, Roboto) on Android. This reduces cognitive friction for users on each platform.

### Content-First Typography
Content/media apps are typography-heavy. The type scale prioritizes readability: 16px body with 1.5 line height, generous heading hierarchy (28/24/20/18), and platform-native fonts that users are already comfortable reading.

### Token-First Architecture
All visual values flow through Tamagui tokens, ensuring any consuming app inherits the full design language by importing `@ds/config`. Changes to a token propagate across all components and apps automatically.

### Component Composition
Following Tamagui's compound component pattern (Card.Header, Card.Content), components are flexible via slot composition rather than prop explosion. This keeps APIs clean while supporting diverse layouts.

## 6. GATE 2: Requirements Validation

Before proceeding to `/ipa:design`:

- [ ] Stakeholders reviewed SRD.md
- [ ] Feature priorities (P1/P2/P3) confirmed
- [ ] Scope still matches /lean output
- [ ] Color palette approved for content/media apps
- [ ] Platform-adaptive approach confirmed (iOS + Android)
- [ ] No scope creep detected

**Next:** `/ipa:design` → Generate HTML prototypes
