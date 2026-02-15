# System Requirement Definition (SRD)

## 1. System Overview

**Project:** Mobile App Design System
**Framework:** Tamagui v2 + Expo + React Native + TypeScript
**Distribution:** Monorepo (Turborepo + pnpm)
**Target:** Content/media mobile apps (news, articles, media browsers)
**Style:** Platform-adaptive (iOS native / Material Android)

Reusable design system providing foundational tokens, platform-adaptive components, and screen templates. Teams consume packages from the monorepo to build consistent, polished content/media apps faster.

### Package Structure

| Package | Name | Purpose |
|---------|------|---------|
| `packages/tokens` | `@ds/tokens` | Colors, typography, spacing, radius, shadows |
| `packages/themes` | `@ds/themes` | Light/dark themes, platform-adaptive overrides |
| `packages/components` | `@ds/components` | Core + content + navigation components |
| `packages/templates` | `@ds/templates` | Reusable screen layouts |
| `packages/config` | `@ds/config` | Shared tamagui.config.ts |
| `apps/showcase` | showcase | Expo demo app to browse the design system |

## 2. Actors (User Roles)

| ID | Role | Description |
|----|------|-------------|
| A-01 | Mobile Developer | Consumes packages, builds apps using design system |
| A-02 | Product Designer | References showcase app for available components/tokens |
| A-03 | Team Lead | Ensures UI consistency across multiple app projects |

## 3. Functional Requirements (FR-xx)

### Phase 1: Foundation (P1)

| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| FR-01 | Design Tokens | P1 | Define color, typography, spacing, radius, shadow, size tokens using `createTokens()` |
| FR-02 | Theme System | P1 | Light/dark themes with `createThemes()`, nested sub-themes for components |
| FR-08 | Typography System | P1 | Platform-adaptive fonts: SF Pro (iOS) / Roboto (Android) via `createFont()` with face mapping |
| FR-12 | Tamagui Config | P1 | Shared `tamagui.config.ts` exporting tokens, themes, fonts, media queries, shorthands |
| FR-13 | Monorepo Setup | P1 | Turborepo + pnpm workspaces, package build pipeline with `@tamagui/build` |

### Phase 2: Components (P1)

| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| FR-03 | Core Components | P1 | Button, Card, Input, Modal, Sheet, Badge, Avatar, Separator, Toast |
| FR-04 | Navigation Components | P1 | TabBar, Header, BackButton - platform-adaptive appearance |
| FR-05 | Content Components | P1 | ArticleCard, MediaCard, FeaturedCard, ListItem, HorizontalScroll |
| FR-09 | Icon System | P2 | Integration with `@tamagui/lucide-icons`, icon button wrapper |
| FR-11 | Form Components | P2 | SearchBar, FilterChips, TextArea, Select |

### Phase 3: Templates & Showcase (P2)

| ID | Feature | Priority | Description |
|----|---------|----------|-------------|
| FR-06 | Showcase App | P1 | Expo app: component catalog, token viewer, theme toggle, live preview |
| FR-07 | Screen Templates | P2 | Onboarding, Feed, Detail, Search, Profile reusable layouts |
| FR-10 | Animation Presets | P3 | Entrance, transition, feedback animation helpers |

## 4. Screen List (S-xx)

### Showcase App Screens

| ID | Screen Name | CJX Stage | Description |
|----|-------------|-----------|-------------|
| S-01 | Showcase Home | Retention | Component catalog with categories, token overview, theme toggle |
| S-02 | Component Detail | Usage | Component variants, props table, live preview, usage code |
| S-03 | Token Viewer | Usage | Color swatches, typography scale, spacing/radius visual |

### Template Screens (Reusable Layouts)

| ID | Screen Name | CJX Stage | Description |
|----|-------------|-----------|-------------|
| S-04 | Onboarding | Onboarding | Swipeable pages, illustration area, skip/next, CTA |
| S-05 | Feed | Retention | Card grid/list, pull-to-refresh, filter chips, FAB |
| S-06 | Detail | Usage | Hero image, article typography, action bar (like/share/save) |
| S-07 | Search | Discovery | Search input, filter chips, results grid, recent/trending |
| S-08 | Profile | Retention | Avatar, stats row, settings list, theme toggle |

## 5. Entity List (E-xx)

| ID | Entity | Description | Key Fields |
|----|--------|-------------|------------|
| E-01 | Token | Design token definition | name, category (color/space/size/radius), value, platform? |
| E-02 | Theme | Theme configuration | name, mode (light/dark), tokenOverrides, parentTheme? |
| E-03 | Component | UI component metadata | name, category, variants[], props[], dependencies[] |
| E-04 | ScreenTemplate | Reusable screen layout | name, components[], layoutType, cjxStage |
| E-05 | Font | Typography definition | family, sizes{}, weights{}, lineHeights{}, face{} |

## 6. Non-Functional Requirements

### NFR-01: Performance
- Tamagui compiler enabled for all packages
- Component flattening optimization on native
- Tree-shaking for unused components
- Package size < 50KB per package (excluding Tamagui core)

### NFR-02: Platform Compatibility
- iOS 15+ / Android API 24+
- Expo SDK 52+
- React Native 0.76+
- Tamagui v2.x

### NFR-03: Developer Experience
- Full TypeScript strict mode with config type inference
- Autocomplete for all tokens (`$color.primary`, `$space.md`)
- Hot reload works across monorepo packages
- Showcase app serves as living documentation

### NFR-04: Accessibility
- Touch targets minimum 44x44dp
- Color contrast WCAG AA compliant
- Screen reader labels on all interactive components
- Reduced motion support via `prefers-reduced-motion`

### NFR-05: Maintainability
- Each component in its own directory with index.ts barrel
- Variant definitions separated from component logic
- Semantic versioning for all packages
- Strict version alignment across monorepo

## 7. Key Decisions (D-xx)

| ID | Decision | Context | Chosen | Rationale |
|----|----------|---------|--------|-----------|
| D-01 | UI Framework | Cross-platform with perf | Tamagui v2 | Optimizing compiler, token-first, native parity |
| D-02 | Project Structure | Multi-app consumption | Monorepo (Turborepo + pnpm) | Shared packages, independent versioning |
| D-03 | Platform Adaptation | iOS vs Android styling | Tamagui platform tokens + conditional | Built-in platform detection |
| D-04 | Typography | Platform-native fonts | SF Pro (iOS) / Roboto (Android) | Content apps need excellent readability |
| D-05 | Icons | Consistent icon set | @tamagui/lucide-icons | Native Tamagui integration, 1000+ icons |
| D-06 | Navigation | Routing solution | expo-router | File-based routing, deep linking |
| D-07 | Config Preset | Starting point | @tamagui/config/v5 extended | Sensible defaults, expanded color palettes |

## 8. Out of Scope

- React Native Web / Next.js web target
- Backend API / data fetching logic
- State management (Redux, Zustand, etc.)
- Push notifications / device APIs
- App store deployment / CI/CD
- CMS / content management
- Analytics / tracking
- i18n / localization
- RTL layout support (post-MVP)
