# Web Design Super Powers & Design Principles

Always follow these web design and UI/UX engineering standards:

## 1. Visual Excellence & Aesthetics
- **Apple/Linear Grade Quality**: Avoid flat, basic, or generic templates. Every section must look state-of-the-art with refined depth hierarchies, glassmorphism, subtle hairlines, and glowing accents.
- **Curated Color Harmony**: Use tailored HSL color palettes with high-contrast text ratios (WCAG AA/AAA compliant). Avoid harsh uncurated primary colors.
- **Fluid Typography**: Use `clamp()` for responsive headings and body copy to ensure clean typographic scaling across mobile (360px) to ultra-wide (2560px) screens without awkward word wraps.

## 2. UI/UX & Ergonomics
- **44x44px Touch Targets**: Ensure all buttons, icons, pills, and touch targets have an interactive footprint of at least 44x44px on mobile viewports.
- **Intuitive Navigation**: Keep navigation menus responsive with smooth hover debounce timers, click-outside handling, and escape key listeners. Lock background scrolling when mobile drawers or modals are active.
- **Clean Forms & High Intent UX**: Provide clear placeholder examples, mobile keyboard input modes (`tel`, `email`, `numeric`), and direct WhatsApp/Phone one-click handoffs with formatted messages.

## 3. Motion & Micro-Interactions
- **Natural Spring Easing**: Use cubic bezier easing curves (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`) for all button hovers, card elevations, and modal entrances.
- **Performance First**: Only animate composite layers (`transform`, `opacity`). Never animate layout dimensions (`width`, `height`, `margin`, `top`, `left`) in high-frequency animations to maintain locked 60fps performance.
