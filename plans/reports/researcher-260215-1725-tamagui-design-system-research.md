# Tamagui Design System Research Report

**Date:** Feb 15, 2026
**Focus:** Latest Tamagui features, design token system, theme architecture, and multi-app design system patterns

---

## Executive Summary

Tamagui is a production-ready style library for React/React Native offering 100% cross-platform parity without sacrificing performance. It features an optimizing compiler that extracts styles to CSS on web and optimizes native views on mobile. Key strengths for building reusable design systems:

- **Token-based architecture** with automatic CSS variable compilation
- **Nested theme system** supporting light/dark modes and component-specific themes
- **Multi-app sharing** via npm packages with compiler-aware exports
- **Monorepo support** for shared design systems across multiple applications
- **Version 2 stability** with enhanced configuration and broader color palettes

---

## 1. Latest Version & Key Features (v2.x)

### Version Overview
- **Current:** Tamagui v2.x stable release (with ongoing enhancements in 2026)
- **Foundation:** ~24KB core with no outside dependencies
- **Compiler:** Partial analysis, CSS extraction, tree flattening, dead code elimination

### Version 2 Major Enhancements

**Configuration Improvements**
- Upgraded to v5 default configuration preset
- Expanded color palettes: Added gray, orange, pink, purple, teal, neutral (plus existing blue, red, yellow, green)
- Sensible defaults with Tailwind-aligned shorthands
- More complete design system out-of-the-box

**Performance & Native**
- Sheet component now integrates with react-native-gesture-handler for smoother native performance
- Compiler achieves parity with vanilla React Native
- Homepage gains ~15% Lighthouse score with compiler enabled

**Cross-Platform Features**
- Pointer events (onPointerDown, onPointerUp, onPointerMove, onPointerEnter, onPointerLeave, onPointerCancel) work cross-platform
- CLI enhancements with new build commands
- `tamagui build` for pre-compiling components for production

**Developer Experience**
- Better documentation and examples
- Improved CLI tooling
- Enhanced type inference with proper TypeScript module declarations

---

## 2. Design Token System Architecture

### What Are Tokens?

Tokens are **static, base-level values** that serve as the foundation of your design system. They sit below themes in the hierarchy and are created with `createTokens()` during configuration.

### Token Categories & Auto-Application

Tamagui automatically applies tokens to specific CSS properties based on their category:

| Category | CSS Properties | Example |
|----------|---|---|
| **Size** | width, height, min/max-width, min/max-height | `$size.md` |
| **Space** | padding, margin, gap | `$space.lg` |
| **Radius** | border-radius | `$radius.md` |
| **Color** | color, background-color, border colors | `$color.red` |
| **zIndex** | z-index | `$zIndex.modal` |

### Creating Custom Tokens

Beyond predefined categories, define any custom token values:

```typescript
// tamagui.config.ts
const tokens = createTokens({
  size: {
    small: 16,
    medium: 24,
    large: 32,
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  color: {
    primary: '#2563eb',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  // Custom tokens (any key)
  icon: {
    small: 16,
    medium: 24,
    large: 32,
  },
})
```

Access custom tokens using dot notation: `$icon.small`

### Token Inheritance & Access

- Use `getTokens()` to access tokens anywhere in your code
- Returns `Variable` objects containing:
  - `.val` - Raw value
  - `.variable` - CSS variable name
- Color tokens serve as **fallback values** when theme values aren't defined

### Token Hierarchy

```
Tokens (static base values)
    ↓
Themes (contextual color overrides)
    ↓
Component Styles (apply tokens/themes)
```

---

## 3. Theme System

### Core Concept

Themes are **contextual CSS variables** that you want to change at any point in your React tree. As stated in docs: "Themes map neatly to CSS variables: they are objects whose values you want to contextually change at any point in your React tree."

Key distinction: Tokens are static; themes are contextual.

### Basic Theme Definition

```typescript
const light = {
  background: '#ffffff',
  color: '#000000',
  borderColor: '#e5e7eb',
  // Define any key to any string or number value
}

const dark = {
  background: '#000000',
  color: '#ffffff',
  borderColor: '#374151',
}
```

### Creating Themes with Tokens

Themes typically reference token values to share constants:

```typescript
const themes = {
  light: {
    background: '$colorWhite',
    color: '$colorBlack',
    borderColor: '$colorGray200',
  },
  dark: {
    background: '$colorBlack',
    color: '$colorWhite',
    borderColor: '$colorGray800',
  },
}
```

### Theme Nesting & Hierarchy

Tamagui supports multi-level theme nesting using underscore-separated names:

```typescript
const themes = {
  light: { background: '#fff', color: '#000' },
  light_subtle: { background: '#f9f9f9', color: '#333' },
  light_subtle_muted: { background: '#f0f0f0', color: '#666' },

  dark: { background: '#000', color: '#fff' },
  dark_button: { background: '#1a1a1a', color: '#fff' },
  dark_button_hover: { background: '#2a2a2a', color: '#fff' },
}
```

**Hierarchy Resolution:**
- Missing keys fall back to parent themes upward
- Ultimately reach tokens as final fallback
- Enables contextual styling at any depth

### Standard UI Kit Theme Keys

Full Tamagui UI kit uses conventional theme keys:

```typescript
{
  background,
  color,
  borderColor,
  shadowColor,
  placeholderColor,
  // Pseudo-variants
  backgroundHover,
  backgroundPress,
  backgroundFocus,
  colorHover,
  colorPress,
  colorFocus,
  borderColorHover,
  borderColorPress,
}
```

### Using Themes in Components

```typescript
import { Theme, Stack, Text } from 'tamagui'

export function MyComponent() {
  return (
    <>
      {/* Light mode */}
      <Theme name="light">
        <Stack backgroundColor="$background">
          <Text color="$color">Light theme</Text>
        </Stack>
      </Theme>

      {/* Dark mode */}
      <Theme name="dark">
        <Stack backgroundColor="$background">
          <Text color="$color">Dark theme</Text>
        </Stack>
      </Theme>

      {/* Nested theme */}
      <Theme name="dark_button">
        <Button>Dark Button</Button>
      </Theme>
    </>
  )
}
```

### Runtime Theme Switching

Use `useTheme()` hook:

```typescript
import { useTheme } from 'tamagui'

const currentTheme = useTheme() // Returns current theme object
```

---

## 4. Built-in Components & Customization

### Component Categories

Tamagui UI provides a complete suite of copy-paste composable components:

| Category | Examples |
|----------|----------|
| **Layout** | Stack, XStack, YStack, ScrollView |
| **Typography** | Heading, Paragraph, Text, Label |
| **Forms** | Input, TextArea, Checkbox, Radio, Select, Slider |
| **Buttons** | Button, IconButton |
| **Navigation** | Tabs, Menu, Breadcrumbs |
| **Containers** | Card, Group, ListItem, Separator |
| **Overlays** | Dialog, Sheet, Popover, Tooltip |
| **Data Display** | Table, Progress, Badge, Avatar |
| **Visual Effects** | Image, Spinner, AlertDialog |

### Component Characteristics

- Render on both React Native and React web
- Available in styled and unstyled forms
- Copy-paste composable architecture
- Easily customizable via variants and theme integration

### Customization Patterns

**1. Component-Specific Themes**

```typescript
import { styled } from 'tamagui'

const Circle = styled(View, {
  name: 'Circle',
  backgroundColor: '$background',
})

// Create circle-specific theme
const themes = {
  dark_Circle: {
    background: '#333',
  },
  light_Circle: {
    background: '#f0f0f0',
  },
}
```

**2. Building Blocks Approach**

Components export sub-components for composition:

```typescript
import { ListItem, Card } from 'tamagui'

// Access building blocks
<ListItem.Frame>
  <ListItem.Icon>...</ListItem.Icon>
  <ListItem.Text>...</ListItem.Text>
  <ListItem.Title>...</ListItem.Title>
  <ListItem.Subtitle>...</ListItem.Subtitle>
</ListItem.Frame>

<Card>
  <Card.Header>...</Card.Header>
  <Card.Content>...</Card.Content>
  <Card.Footer>...</Card.Footer>
</Card>
```

**3. Variant-Based Customization**

```typescript
const Button = styled(TouchableOpacity, {
  backgroundColor: '$primary',
  padding: '$md',
  borderRadius: '$md',

  variants: {
    size: {
      small: { padding: '$sm' },
      large: { padding: '$lg' },
    },
    variant: {
      solid: { backgroundColor: '$primary' },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$primary',
      },
    },
  },
})
```

### Pre-built Themes

Tamagui includes several pre-built themes:
- B/W (Black & White)
- Ocean
- SUPER
- Cactus
- Neon

To customize starter themes, copy src from `@tamagui/themes` and modify as needed.

---

## 5. Configuration: tamagui.config.ts

### Complete Configuration Structure

```typescript
import { createTamagui, createTokens, createThemes, createFont } from 'tamagui'
import { config } from '@tamagui/config/v5'

// Option 1: Start with v5 preset (recommended)
export const tamaguiConfig = createTamagui(config)

// Option 2: Build from scratch
export const tamaguiConfig = createTamagui({
  // 1. Define tokens
  tokens: createTokens({
    size: { /* ... */ },
    space: { /* ... */ },
    radius: { /* ... */ },
    color: { /* ... */ },
    zIndex: { /* ... */ },
  }),

  // 2. Define fonts
  fonts: {
    body: createFont({
      family: '"Inter", sans-serif',
      size: {
        1: 12,
        2: 14,
        3: 16,
        4: 18,
        5: 20,
      },
      lineHeight: {
        1: 16,
        2: 18,
        3: 24,
        4: 26,
        5: 28,
      },
      weight: {
        1: 400,
        5: 600,
        8: 700,
      },
      letterSpacing: {
        1: 0,
        2: -0.5,
      },
      face: {
        400: { normal: 'Inter', italic: 'Inter-Italic' },
        600: { normal: 'Inter-SemiBold' },
        700: { normal: 'Inter-Bold' },
      },
    }),
    heading: createFont({
      family: '"Poppins", sans-serif',
      size: { /* ... */ },
    }),
  },

  // 3. Define themes
  themes: createThemes({
    light: {
      background: '#ffffff',
      color: '#000000',
      borderColor: '#e5e7eb',
    },
    dark: {
      background: '#000000',
      color: '#ffffff',
      borderColor: '#374151',
    },
  }),

  // 4. Media queries (responsive)
  media: {
    xs: { maxWidth: 660 },
    sm: { minWidth: 660, maxWidth: 860 },
    md: { minWidth: 860, maxWidth: 1020 },
    lg: { minWidth: 1020, maxWidth: 1280 },
    xl: { minWidth: 1280 },
  },

  // 5. Shorthands (style property aliases)
  shorthands: {
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    mx: 'marginHorizontal',
    my: 'marginVertical',
  },

  // 6. Settings
  settings: {
    disableSSR: false,
    allowedStyleValues: 'somewhat-strict',
  },
})

// Export type for component props
export type AppConfig = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
```

### Using Configuration in App

```typescript
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* Your app */}
    </TamaguiProvider>
  )
}
```

### Development Access

In development mode, Tamagui sets `Tamagui` on `globalThis` containing:
- Entire parsed config from `tamagui.config.ts`
- Helpful internals for debugging
- Runtime access to tokens and themes

```typescript
// Development only
console.log(window.Tamagui.config)
```

---

## 6. Best Practices for Shared Design Systems

### Architecture: Design System as NPM Package

**Core Principle:** Your design system must live in its own npm module (can be private).

```
monorepo/
├── packages/
│   ├── design-system/        # @mycompany/design-system
│   │   ├── src/
│   │   │   ├── tamagui.config.ts
│   │   │   ├── tokens.ts
│   │   │   ├── themes.ts
│   │   │   ├── components/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   └── ...
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── ui/                   # Alternative: shared UI layer
│       └── ...
│
├── apps/
│   ├── mobile/               # Expo app
│   ├── web/                  # Next.js app
│   └── desktop/              # Electron app
│
└── root tamagui.config.ts    # Optional: if needed
```

### Package Configuration (package.json)

Critical export fields for compiler optimization:

```json
{
  "name": "@mycompany/design-system",
  "version": "1.0.0",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts",
      "module:jsx": "./dist/index.jsx"
    }
  },
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": ["dist", "package.json"],
  "devDependencies": {
    "tamagui": "^2.x.x",
    "@tamagui/core": "^2.x.x"
  }
}
```

**Critical:** Include `module:jsx` export for compiler to analyze component structure.

### Build Configuration (@tamagui/build)

Use `@tamagui/build` to generate JSX-preserved output:

```typescript
// build.config.ts
import { defineConfig } from '@tamagui/build'

export default defineConfig({
  input: ['src/index.ts'],
  output: 'dist',
  preserveJsx: true, // Critical for compiler
})
```

### Compiler Integration Points

**Next.js (Web)**
```typescript
// next.config.js
const { withTamagui } = require('@tamagui/next-plugin')

module.exports = withTamagui({
  config: './tamagui.config.ts',
  components: ['@mycompany/design-system'],
})
```

**React Native/Expo**
```javascript
// babel.config.js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['@tamagui/babel-plugin', {
      config: './tamagui.config.ts',
      components: ['@mycompany/design-system'],
    }],
  ],
}

// react-native.config.js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-gesture-handler': {},
  },
}
```

### Version Management

**Critical:** Ensure exact version matching across all packages:

```json
// apps/mobile/package.json & apps/web/package.json
{
  "dependencies": {
    "tamagui": "^2.x.x",        // MUST match
    "@tamagui/core": "^2.x.x",  // MUST match
    "@mycompany/design-system": "^1.0.0"
  }
}
```

Version mismatches cause subtle, difficult-to-debug issues.

---

## 7. Multi-App Consumption Patterns

### Monorepo Setup (Recommended)

**Structure:**
```
monorepo/
├── packages/
│   └── design-system/        # Shared design system
├── apps/
│   ├── mobile/               # Expo
│   ├── web/                  # Next.js
│   └── tablet/               # Another Expo app (optional)
└── package.json              # Root workspaces config
```

**Benefits:**
- Single source of truth for design tokens/themes
- Shared component library across multiple apps
- Synchronized versioning
- Easy to refactor components across all apps

**Workspace Configuration (yarn/npm):**

```json
// Root package.json
{
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*"
  ]
}
```

### Cross-App Theme Consistency

**Pattern 1: Single Tamagui Config (shared)**

```typescript
// packages/design-system/tamagui.config.ts
export { tamaguiConfig } from './config'

// apps/mobile/tamagui.config.ts
export { tamaguiConfig } from '@mycompany/design-system'

// apps/web/tamagui.config.ts
export { tamaguiConfig } from '@mycompany/design-system'
```

**Pattern 2: Config Extension**

```typescript
// packages/design-system/tamagui.config.ts
export const baseConfig = createTamagui({
  tokens: { /* ... */ },
  themes: { /* ... */ },
})

// apps/mobile/tamagui.config.ts
import { baseConfig } from '@mycompany/design-system'
export const tamaguiConfig = createTamagui({
  ...baseConfig,
  // Mobile-specific overrides
  themes: {
    ...baseConfig.themes,
    mobile_specific: { /* ... */ },
  },
})
```

### Multiple App Integration (Solito Pattern)

Common setup for Expo + Next.js sharing design system:

```typescript
// packages/design-system/components/Button.tsx
import { Button as TamaguiButton } from 'tamagui'

export interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps) {
  return (
    <TamaguiButton
      theme={variant}
      {...sizeVariants[size]}
      {...props}
    />
  )
}

// apps/mobile/screens/Home.tsx
import { Button } from '@mycompany/design-system'

export function HomeScreen() {
  return <Button variant="primary">Mobile Button</Button>
}

// apps/web/pages/index.tsx
import { Button } from '@mycompany/design-system'

export default function HomePage() {
  return <Button variant="primary">Web Button</Button>
}
```

### Design System Versioning Strategy

```
@mycompany/design-system
├── v1.0.0 - Initial release (Tamagui v1)
├── v1.1.0 - New components (backward compatible)
├── v2.0.0 - Tamagui v2 upgrade (breaking, requires app updates)
└── v2.1.0 - Enhancements
```

**Deprecation Pattern:**
```typescript
// components/OldButton.tsx
import { Text, View } from 'tamagui'

/**
 * @deprecated Use NewButton instead
 */
export function OldButton(props) {
  return <NewButton {...props} />
}
```

---

## 8. Configuration Best Practices

### File Organization

```
packages/design-system/src/
├── tamagui.config.ts      # Main export
├── config/
│   ├── tokens.ts          # All token definitions
│   ├── themes.ts          # All theme definitions
│   ├── fonts.ts           # Font configurations
│   ├── media.ts           # Media query breakpoints
│   └── shorthands.ts      # Style property aliases
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── variants.ts
│   │   └── index.ts
│   └── ...
└── index.ts               # Public API
```

### Token Organization Pattern

```typescript
// config/tokens.ts
export const sizeTokens = {
  0: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
}

export const spaceTokens = {
  0: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
}

export const colorTokens = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    // ...
    950: '#030712',
  },
  primary: '#2563eb',
  // ...
}
```

### Theme Organization Pattern

```typescript
// config/themes.ts
export const lightTheme = {
  background: '$white',
  color: '$black',
  borderColor: '$gray100',
  // ...
}

export const darkTheme = {
  background: '$black',
  color: '$white',
  borderColor: '$gray900',
  // ...
}

export const themesConfig = createThemes({
  light: lightTheme,
  dark: darkTheme,
  light_subtle: { ...lightTheme, background: '$gray50' },
  // ...
})
```

### Compiler Debugging

Enable debug output during development:

```typescript
// Component file
// debug
import { styled } from 'tamagui'

export const Button = styled(Pressable, {
  // Component definition
})
```

View generated CSS and optimization metrics in console.

---

## 9. Advanced Patterns

### Responsive Design with Tokens

```typescript
// tamagui.config.ts
media: {
  xs: { maxWidth: 660 },
  sm: { minWidth: 660, maxWidth: 860 },
  md: { minWidth: 860, maxWidth: 1020 },
  lg: { minWidth: 1020 },
}

// Component usage
export function ResponsiveStack() {
  return (
    <Stack
      padding="$md"
      $xs={{ padding: '$sm' }}
      $sm={{ padding: '$md' }}
      $lg={{ padding: '$xl' }}
    >
      Responsive padding
    </Stack>
  )
}
```

### Dynamic Theme Switching

```typescript
import { useTheme, Theme } from 'tamagui'
import { useColorScheme } from 'react-native'

export function ThemeProvider({ children }) {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? 'dark' : 'light'

  return (
    <Theme name={theme}>
      {children}
    </Theme>
  )
}
```

### Component Variant Factory

```typescript
export function createButtonVariants(themes: Record<string, any>) {
  return Object.entries(themes).reduce((acc, [themeName, themeValue]) => {
    acc[themeName] = {
      backgroundColor: themeValue.primary,
      color: themeValue.buttonText,
    }
    return acc
  }, {})
}
```

---

## Key Insights & Recommendations

### ✅ Strengths for Multi-App Design Systems

1. **True Cross-Platform:** Write once, deploy to web and native without sacrificing performance
2. **Design Tokens First:** Token-based architecture forces consistency across all apps
3. **Compiler Optimization:** Automatic optimization means no performance penalties
4. **Theme System:** Nested themes enable fine-grained customization while maintaining consistency
5. **NPM Package Distribution:** Easy to version and consume across multiple apps
6. **Type Safety:** Full TypeScript support with automatic config type inference
7. **Monorepo Ready:** Built-in patterns for managing multiple packages and apps

### ⚠️ Considerations

1. **Version Alignment:** Requires disciplined version management across monorepo
2. **JSX Preservation:** Design system package must preserve JSX in exports for compiler
3. **Learning Curve:** Compiler behavior requires understanding styled component flattening
4. **Platform Differences:** Some platform-specific behaviors still require conditional code
5. **Build Configuration:** Each platform needs specific Tamagui plugin configuration

### 🎯 Recommended Approach

For a **shared design system serving multiple mobile apps:**

1. **Create monorepo structure** with design-system package and separate app packages
2. **Start with v5 preset** configuration for sensible defaults
3. **Define comprehensive tokens** (colors, spacing, typography, sizes) in design-system
4. **Build component library** in design-system, exporting as npm package
5. **Use nested themes** for light/dark modes and component-specific customization
6. **Configure compiler** for each platform (Next.js, Expo/RN, etc.)
7. **Maintain strict version alignment** across all packages
8. **Version design system separately** from apps (semantic versioning)

---

## Unresolved Questions

1. What's the best pattern for A/B testing different theme variants across multiple apps?
2. How to handle platform-specific component extensions in shared design system?
3. What's the recommended approach for design system migrations across major versions?
4. How to manage component deprecations when multiple apps depend on design system?
5. What's the optimal compiler cache strategy for monorepos with many apps?

---

## Sources

- [Tamagui - Official Site](https://tamagui.dev/)
- [GitHub - tamagui/tamagui](https://github.com/tamagui/tamagui)
- [Configuration | Tamagui](https://tamagui.dev/docs/core/configuration)
- [Tokens | Tamagui](https://tamagui.dev/docs/core/tokens)
- [Themes — Tamagui](https://tamagui.dev/docs/intro/themes)
- [Design Systems | Tamagui](https://tamagui.dev/docs/guides/design-systems)
- [Tamagui UI Components](https://tamagui.dev/ui/intro)
- [Tamagui for React Native: Create faster design systems - LogRocket Blog](https://blog.logrocket.com/tamagui-react-native-create-faster-design-systems/)
- [Tamagui: Building Cross-Platform Apps Made Simple](https://codeparrot.ai/blogs/tamagui-building-cross-platform-apps-made-simple/)
- [What is Tamagui? - Scalable Path](https://www.scalablepath.com/mobile/tamagui)
- [Monorepo Patterns & Discussions](https://github.com/tamagui/tamagui/discussions/120)
- [Starter Templates](https://github.com/tamagui/starter-free)
