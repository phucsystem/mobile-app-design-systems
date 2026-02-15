# Design System Showcase - HTML Prototypes

Production-ready HTML/CSS/JS prototypes generated from `docs/UI_SPEC.md`.

## Quick Start

Open any `.html` file in a browser. The prototype navigation bar at the top links all screens.

## Screen Index

| File | Screen | CJX Stage | Description |
|------|--------|-----------|-------------|
| `s01-showcase-home.html` | S-01 Showcase Home | Retention | Component catalog, token overview, template list |
| `s02-component-detail.html` | S-02 Component Detail | Usage | Live preview, variant/size selectors, props table |
| `s03-token-viewer.html` | S-03 Token Viewer | Usage | Color swatches, typography, spacing, radius, shadows |
| `s04-onboarding.html` | S-04 Onboarding | Onboarding | Swipeable pages, skip/next, Get Started CTA |
| `s05-feed.html` | S-05 Feed | Retention | Featured card, article list, filter chips, FAB, tab bar |
| `s06-detail.html` | S-06 Detail | Usage | Hero image, article body, action bar (like/save/share) |
| `s07-search.html` | S-07 Search | Discovery | Search input, recent/trending, suggested results |
| `s08-profile.html` | S-08 Profile | Retention | Avatar, stats, settings, theme toggle, sign out |
| `s09-settings.html` | S-09 Settings | Retention | Full settings: account, preferences, content, support, danger zone |
| `s10-camera.html` | S-10 Camera | Usage | Full-screen viewfinder, edge detection, capture button, flash toggle |
| `s11-document-edit.html` | S-11 Document Edit | Usage | Document preview, crop handles, editing toolbar |
| `s12-login.html` | S-12 Login | Onboarding | Email/password form, social auth (Google, Apple, GitHub) |
| `s13-register.html` | S-13 Register | Onboarding | Registration form, avatar upload, terms checkbox |
| `s14-image-gallery.html` | S-14 Image Gallery | Retention | 3-column grid, date groups, filters, video overlays |

## FR Mapping

| FR | Feature | Screens |
|----|---------|---------|
| FR-01 | Design Tokens | S-03 |
| FR-02 | Theme System | S-03, S-08 |
| FR-03 | Core Components | S-01, S-02, S-10, S-11, S-12, S-13, S-14 |
| FR-04 | Navigation Components | S-01, S-02, S-05, S-07, S-08, S-10 |
| FR-05 | Content Components | S-01, S-05, S-06, S-07, S-14 |
| FR-06 | Showcase App | S-01, S-02, S-03 |
| FR-07 | Screen Templates | S-04, S-05, S-06, S-07, S-08, S-09, S-11, S-14 |
| FR-11 | Form Components | S-05, S-07, S-12, S-13 |

## Shared Files

| File | Purpose |
|------|---------|
| `styles.css` | Design tokens (colors, typography, spacing, radius, shadows, layout) |
| `components.css` | Reusable component styles (buttons, cards, inputs, badges, etc.) |
| `interactions.js` | CJX animations, navigation bar, tab switching, toggles |

## Design Tokens Applied

- Colors: Full semantic + gray scale from UI_SPEC Section 1
- Typography: SF Pro / Roboto with h1-h4, body1-2, caption, button, overline
- Spacing: xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48)
- Radius: xs(4) sm(8) md(12) lg(16) xl(24) full(9999)
- Shadows: sm, md, lg, xl levels

## CJX Stage Mapping

| Stage | Screens | Animation |
|-------|---------|-----------|
| Onboarding (600ms) | S-04, S-12, S-13 | fadeInUp, 100ms stagger |
| Usage (300ms) | S-02, S-03, S-06, S-10, S-11 | fadeIn, 60ms stagger |
| Retention (400ms) | S-01, S-05, S-08, S-09, S-14 | fadeIn, 80ms stagger |
| Discovery (800ms) | S-07 | fadeInUp, 120ms stagger |
