# Lean MVP Analysis: Mobile App Design System (Tamagui)

## Problem Statement

Mobile teams building content/media apps (news readers, media browsers, article apps) repeat the same UI work across projects: defining tokens, building common components, implementing navigation patterns. Each new app starts from scratch or cobbles together mismatched libraries, resulting in inconsistent UX and wasted effort.

This design system provides a **Tamagui-based monorepo package** with foundational tokens, platform-adaptive components, and screen templates specifically optimized for content/media apps. Teams clone the monorepo, pick the packages they need, and ship consistent, polished UIs faster.

## Target Users (→ IPA User Roles)

| User Type | Description | Primary Need |
|-----------|-------------|--------------|
| Mobile Developer | Builds Expo/RN apps consuming the design system | Ready-to-use components with consistent API |
| Product Designer | Designs screens referencing the system | Visual reference of available components + tokens |
| Team Lead | Manages multiple app projects | Consistent UI/UX across apps, reduced dev time |

## MVP Features (→ IPA Feature List FR-xx)

| Priority | Feature | User Value | Screen | Assumption |
|----------|---------|------------|--------|------------|
| P1 | FR-01 Design Tokens Package | Consistent colors, typography, spacing across apps | All | Tamagui token system sufficient for cross-platform needs |
| P1 | FR-02 Theme System (Light/Dark) | Platform-adaptive themes out of the box | All | Users need both light and dark modes |
| P1 | FR-03 Core Components | Buttons, cards, inputs, modals - most used | All | 80% of UI covered by ~15 core components |
| P1 | FR-04 Navigation Components | Tab bar, header, back nav - platform adaptive | All | Navigation is the #1 reused pattern |
| P1 | FR-05 Content Components | Article card, media card, list items | S-02, S-03 | Content/media apps share common card patterns |
| P1 | FR-06 Showcase App | Browse all components + tokens visually | S-01 | Devs need visual reference to adopt system |
| P2 | FR-07 Screen Templates | Onboarding, Feed, Detail, Search, Profile | S-04-S-08 | Templates accelerate prototyping |
| P2 | FR-08 Typography System | Platform-adaptive fonts (SF Pro / Roboto) | All | Typography is the backbone of content apps |
| P2 | FR-09 Icon System | Consistent icon set with Tamagui integration | All | Icons needed but can use existing icon packs |
| P3 | FR-10 Animation Presets | Entrance, transition, feedback animations | All | Animations polish UX but not blocking |
| P3 | FR-11 Form Components | Search bar, filter chips, text areas | S-05 | Forms used less in content apps |

## Implementation Phases

| Phase | Focus | Key Features | Effort |
|-------|-------|--------------|--------|
| 1 - Foundation | Tokens + Themes + Project Setup | FR-01, FR-02, FR-08 | M |
| 2 - Components | Core + Content + Navigation | FR-03, FR-04, FR-05, FR-09 | L |
| 3 - Templates & Showcase | Screen templates + Demo app | FR-06, FR-07, FR-10, FR-11 | M |

## Plan Structure Preview

```
plans/{date}-tamagui-design-system/
├── plan.md
├── phase-01-foundation/
│   ├── core.md          # Monorepo setup, Tamagui config
│   └── data.md          # Token definitions, theme schemas
├── phase-02-components/
│   ├── core.md          # Component logic, platform detection
│   └── ui.md            # All UI components
└── phase-03-templates-showcase/
    ├── ui.md            # Screen templates
    └── tasks.md         # Showcase app, docs
```

## GATE 1: Scope Validation

Before proceeding to `/ipa:spec`, complete this checklist:

- [ ] Confirmed content/media apps as primary target
- [ ] Platform-adaptive design validated (iOS + Android)
- [ ] Monorepo distribution model confirmed
- [ ] MVP scope ≤ 3 phases ✅
- [ ] Assumptions documented for later validation

**⚠️ Scope is 3 phases - at the limit. Keep templates minimal in Phase 3.**

## MVP Screens (→ IPA Screen List S-xx)

| Screen | Purpose | Features |
|--------|---------|----------|
| S-01 Showcase Home | Browse design system catalog | Component list, token viewer, theme toggle |
| S-02 Component Detail | View component variants + usage | Props table, live preview, code snippet |
| S-03 Token Viewer | Browse all design tokens | Color swatches, typography scale, spacing |
| S-04 Onboarding Template | Welcome/intro flow | Swipeable pages, skip, CTA button |
| S-05 Feed Template | Article/media feed | Card grid, pull-to-refresh, filters |
| S-06 Detail Template | Article/content reader | Header image, typography, actions bar |
| S-07 Search Template | Search + discover | Search bar, filter chips, results grid |
| S-08 Profile Template | User profile/settings | Avatar, stats, settings list, theme toggle |

## Data Entities (→ IPA Entity List E-xx)

| Entity | Description | Key Fields |
|--------|-------------|------------|
| E-01 Token | Design token value | name, category, value, platform |
| E-02 Theme | Theme configuration | name, mode (light/dark), tokens map |
| E-03 Component | UI component metadata | name, category, props, variants |
| E-04 Screen Template | Reusable screen layout | name, components used, layout type |

## User Flow (→ IPA Screen Flow)

```
Showcase App Flow:
S-01 (Home) → S-02 (Component Detail)
S-01 (Home) → S-03 (Token Viewer)

Template Preview Flow:
S-01 (Home) → S-04 (Onboarding) / S-05 (Feed) / S-06 (Detail) / S-07 (Search) / S-08 (Profile)
```

## Tech Decisions (→ IPA Key Decisions D-xx)

| Decision | Context | Chosen | Rationale |
|----------|---------|--------|-----------|
| D-01 UI Framework | Need cross-platform with perf | Tamagui v2 | Optimizing compiler, token-first, RN native |
| D-02 Project Structure | Multi-app consumption | Monorepo (Turborepo) | Shared packages, independent versioning |
| D-03 Platform Adaptation | iOS vs Android look | Tamagui platform tokens + conditional styles | Tamagui has built-in platform detection |
| D-04 Typography | Platform-native fonts | SF Pro (iOS) / Roboto (Android) | Content apps need excellent readability |
| D-05 Icons | Consistent icon set | @tamagui/lucide-icons | Already integrates with Tamagui, 1000+ icons |
| D-06 Navigation | Tab + stack navigation | expo-router | File-based routing, deep linking built-in |
| D-07 Package Manager | Monorepo tooling | pnpm + Turborepo | Fast installs, workspace support |

## Monorepo Package Structure

```
packages/
├── tokens/              # @design-system/tokens
│   ├── colors.ts
│   ├── typography.ts
│   ├── spacing.ts
│   └── index.ts
├── themes/              # @design-system/themes
│   ├── light.ts
│   ├── dark.ts
│   └── index.ts
├── components/          # @design-system/components
│   ├── button/
│   ├── card/
│   ├── input/
│   └── ...
├── templates/           # @design-system/templates
│   ├── onboarding/
│   ├── feed/
│   └── ...
└── tamagui-config/      # @design-system/config
    └── tamagui.config.ts

apps/
└── showcase/            # Expo app to browse the design system
    ├── app/
    └── package.json
```

## Nice-to-Have (Post-MVP)

- Storybook integration for web-based component browsing
- Figma token sync (via Style Dictionary)
- Accessibility audit tooling (a11y)
- RTL (right-to-left) layout support
- Automated visual regression testing
- CLI tool to scaffold new apps from templates

## Key Assumptions to Validate

| # | Assumption | Validation Method |
|---|-----------|-------------------|
| 1 | Tamagui v2 platform tokens handle iOS/Android differences | Build POC with platform-specific button |
| 2 | Monorepo packages work smoothly with Expo | Test import in fresh Expo app |
| 3 | ~15 core components cover 80% of content app needs | Audit 3 existing content apps |
| 4 | Tamagui compiler optimizes shared package imports | Benchmark build with/without compiler |
| 5 | Platform-adaptive navigation feels native on both OS | User test on real devices |

## Out of Scope

- Web support (React Native Web) - focus mobile first
- Backend/API implementation
- State management library choice
- Push notifications or device APIs
- App store deployment
- CMS or content management
- Analytics/tracking integration

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Tamagui v2 breaking changes | Components need rewrite | Pin version, follow changelog |
| Platform-adaptive complexity | Double the styling work | Use Tamagui's built-in platform utils |
| Monorepo build complexity | Slow CI, dependency issues | Turborepo caching, strict versioning |
| Over-engineering tokens | Delayed delivery | Start minimal, expand per app needs |
| Component API surface too large | Hard to maintain | Limit props, use composition |

## Next Step

After GATE 1 validation:
```
→ Run `/ipa:spec @https://tamagui.dev` to generate SRD.md + UI_SPEC.md
```
