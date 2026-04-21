# Stripe.dev Design System Reference
**Source:** https://stripe.dev  
**Purpose:** Design aesthetic reference for app development  
**Last Updated:** April 2026

---

## 🎨 Core Design Philosophy

The Stripe.dev design embodies:
- **Minimalist sophistication** - Clean, uncluttered interfaces with purposeful whitespace
- **Technical elegance** - Professional developer-focused aesthetic
- **Fluid responsiveness** - Seamless adaptation across all screen sizes
- **Subtle animations** - Smooth, purposeful micro-interactions
- **Dark/light adaptability** - Flexible color theming system

---

## 📐 Typography System

### Primary Font Stack
```css
font-family: 'sohne-var', 'Helvetica Neue', Arial, sans-serif;
```

### Monospace Font Stack
```css
font-family: 'sohne-mono', 'Courier New', Courier, monospace;
```

### Type Scale

#### Hero Text
- **Font Size:** Responsive from ~32px to 170px
- **Font Weight:** 300 (Light)
- **Line Height:** 80-84%
- **Letter Spacing:** -0.06em to -0.08em (tight)
- **Usage:** Landing page headlines, major section titles

```css
.text-hero {
  font-size: calc(12.2807vw + 32.1053px);
  font-weight: 300;
  line-height: 80%;
  letter-spacing: -0.08em;
}
@media (min-width: 1728px) {
  .text-hero { font-size: 170px; }
}
```

#### Large Text
- **Font Size:** Responsive ~13px to 43px
- **Font Weight:** 300 (Light)
- **Line Height:** 95%
- **Letter Spacing:** -0.06em

```css
.text-lg {
  font-size: calc(1.71898vw + 13.296px);
  font-weight: 300;
  line-height: 95%;
  letter-spacing: -0.06em;
}
@media (min-width: 1728px) {
  .text-lg { font-size: 43px; }
}
```

#### Medium Text
- **Font Size:** Responsive ~12px to 28px
- **Font Weight:** 300 (Light)
- **Line Height:** 100%
- **Letter Spacing:** -0.04em

```css
.text-md {
  font-size: calc(1.89189vw + 12.6216px);
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -0.04em;
}
@media (min-width: 1728px) {
  .text-md { font-size: 28px; }
}
```

#### Small/Body Text
- **Font Size:** Responsive ~12px to 21px
- **Font Weight:** 300 (Light)
- **Line Height:** 100%
- **Letter Spacing:** -0.03em

```css
.text-sm {
  font-size: calc(0.523169vw + 11.9596px);
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -0.03em;
}
@media (min-width: 1728px) {
  .text-sm { font-size: 21px; }
}
```

#### Extra Small Text
- **Font Size:** 14px (fixed)
- **Font Weight:** 300 (Light)
- **Line Height:** 100%
- **Letter Spacing:** -0.03em
- **Usage:** Captions, metadata

```css
.text-xs {
  font-size: 14px;
  font-weight: 300;
  line-height: 100%;
  letter-spacing: -0.03em;
  leading-trim: both;
  text-edge: cap;
}
```

#### Small Caps / Labels
- **Font Size:** 12px
- **Font Weight:** 300
- **Letter Spacing:** -0.012em
- **Text Transform:** UPPERCASE
- **Font Family:** sohne-mono

```css
.text-smallcaps {
  font-family: 'sohne-mono';
  font-size: 12px;
  font-weight: 300;
  letter-spacing: -0.012em;
  text-transform: uppercase;
}
```

### Typography Guidelines
- **Weight hierarchy:** Use font-weight 300 (light) for body, 500 (medium) for emphasis
- **Negative letter-spacing:** Tighter tracking creates a modern, technical feel
- **Tight line-height:** Creates compact, dense text blocks (80-100%)
- **Fluid scaling:** All text sizes use `calc()` for smooth viewport adaptation

---

## 🎨 Color System

### Dark Theme Foundation
```css
/* Primary backgrounds */
--background-primary: #000000;
--background-secondary: #111111;
--background-tertiary: #2b2b2b;
--background-elevated: #3a3a3a;

/* Text colors */
--text-primary: #ffffff;
--text-secondary: #d0d0d0;
--text-muted: #a0a0a0;

/* Borders */
--border-default: #111111;
--border-subtle: #2b2b2b;
```

### Light Theme Variants
```css
/* Light mode would invert the relationship */
--background-primary: #ffffff;
--text-primary: #000000;
```

### Semantic Colors
- **Accent/Interactive:** Stripe purple/blue tones (inferred from brand)
- **Success:** Green variants
- **Warning:** Amber/yellow variants
- **Error:** Red variants
- **Info:** Blue variants

### Color Usage Principles
- **High contrast:** White text on black backgrounds or vice versa
- **Subtle differentiation:** Use slight gray variations (#111, #2b2b2b, #3a3a3a)
- **Transparency:** Avoid alpha channels where possible for performance
- **CSS Variables:** Use custom properties for theme switching

---

## 📏 Spacing & Layout

### Spacing Scale
```css
/* Suggested spacing scale based on observed patterns */
--space-xs: 4px;
--space-sm: 6px;
--space-md: 8px;
--space-lg: 10px;
--space-xl: 12px;
--space-2xl: 16px;
--space-3xl: 20px;
--space-4xl: 32px;
--space-5xl: 48px;
--space-6xl: 64px;
```

### Common Spacing Patterns
- **Component padding:** 6px 12px, 8px 16px, 10px 12px
- **Margin between elements:** 6px, 8px, 10px
- **Section spacing:** 16px, 32px, 48px
- **Page margins:** 16px (mobile), 24px+ (desktop)

### Responsive Breakpoints
```css
/* Mobile first approach */
@media (min-width: 600px)  { /* Tablet */ }
@media (min-width: 760px)  { /* Small desktop */ }
@media (min-width: 960px)  { /* Medium desktop */ }
@media (min-width: 1728px) { /* Large desktop - max scale */ }
```

### Layout Patterns
- **Flexbox-first:** Primary layout tool
- **Grid for cards:** Blog post grids, feature sections
- **Sticky positioning:** Navigation, sidebar elements
- **Full-bleed sections:** Edge-to-edge content blocks
- **Contained content:** Max-width constraints for readability

---

## 🎭 Component Patterns

### Buttons

#### Primary Button
```css
.button-primary {
  background: #2b2b2b;
  border: 1px solid #2b2b2b;
  border-radius: 10px; /* or 12px for larger buttons */
  color: #ffffff;
  padding: 6px 12px 8px;
  font-size: 12px;
  font-family: 'sohne-var', sans-serif;
  text-transform: none;
  letter-spacing: -0.2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-width: 200px;
}

.button-primary:hover {
  background: #3a3a3a;
}
```

#### Secondary Button
```css
.button-secondary {
  background: #3a3a3a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 4px 6px;
  font-size: 11px;
}
```

### Cards

```css
.card {
  background: var(--background-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 2px 2px var(--border-default);
  /* Offset shadow creates depth */
}
```

### Panels/Overlays

```css
.panel {
  background: #2b2b2b;
  border: 1px solid #111111;
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: 2px 2px #111111;
  min-width: 200px;
  margin-top: 8px;
}
```

### Form Elements

```css
input, textarea {
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: 'sohne-var', sans-serif;
  font-size: 14px;
  padding: 8px 12px;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--border-default);
}
```

---

## 🔲 Border Radius System

```css
--radius-sm: 8px;   /* Small elements, inputs */
--radius-md: 10px;  /* Buttons, small cards */
--radius-lg: 12px;  /* Cards, panels, overlays */
--radius-xl: 16px;  /* Large feature cards */
--radius-2xl: 20px; /* Hero sections */
```

**Pattern:** Consistent, moderate rounding (8-16px range) creates modern, friendly feel

---

## 🌊 Shadows & Depth

### Box Shadows
```css
/* Subtle offset shadow (signature Stripe style) */
box-shadow: 2px 2px #111111;
box-shadow: 2px 2px var(--border-default);

/* No blur, just offset - creates geometric depth */
```

### Elevation Layers
```css
--z-base: 1;
--z-dropdown: 5;
--z-sticky: 6;
--z-overlay: 8;
--z-modal: 10;
--z-toast: 10000;
```

---

## ⚡ Animations & Interactions

### Cursor States
```css
cursor: pointer;   /* Interactive elements */
cursor: default;   /* Viewport, containers */
cursor: text;      /* Text input areas */
cursor: crosshair; /* Selection modes */
```

### Transitions
```css
/* Smooth, fast transitions */
transition: all 0.2s ease;
transition: background-color 0.15s ease-in-out;
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Hover States
- **Buttons:** Background lightens (#2b2b2b → #3a3a3a)
- **Links:** Subtle underline appears or text color shifts
- **Cards:** Slight elevation or border color change
- **Images:** Subtle scale or opacity shift

### Micro-interactions
- Arrow rotations (180deg) for expand/collapse
- Smooth color transitions on state changes
- Transform-based animations over position
- Minimal, purposeful motion

---

## 🖼️ Image & Media

### Image Treatment
- **Full-width backgrounds:** Edge-to-edge hero images
- **Aspect ratios:** Maintain consistent ratios (16:9, 4:3, 1:1)
- **Lazy loading:** Progressive image loading
- **Responsive images:** srcset for multiple resolutions
- **Art direction:** Different crops for different viewports

### Video/Terminal
- **Terminal styling:** Black background, monospace font
- **Code blocks:** Syntax highlighting with subtle colors
- **Embedded media:** 16:9 responsive containers

---

## 📱 Responsive Design Principles

### Mobile-First Approach
1. Design for smallest screens first
2. Enhance for larger viewports
3. Fluid typography using `calc()`
4. Flexible grid systems (1→2→3→4 columns)

### Touch Targets
- **Minimum:** 44px × 44px for tap targets
- **Spacing:** Adequate gap between interactive elements
- **Hover:** Gracefully degrade on touch devices

### Viewport Adaptations
- **< 600px:** Single column, stacked layout
- **600-960px:** Two-column grids, larger text
- **960-1728px:** Multi-column, optimized desktop
- **> 1728px:** Fixed maximum sizes, centered content

---

## 🎯 Design Tokens Summary

```javascript
const designTokens = {
  fonts: {
    primary: "'sohne-var', 'Helvetica Neue', Arial, sans-serif",
    mono: "'sohne-mono', 'Courier New', Courier, monospace"
  },
  fontSizes: {
    xs: '14px',
    sm: '21px',
    md: '28px',
    lg: '43px',
    hero: '170px'
  },
  fontWeights: {
    light: 300,
    medium: 500,
    semibold: 600
  },
  colors: {
    dark: {
      bg: {
        primary: '#000000',
        secondary: '#111111',
        tertiary: '#2b2b2b',
        elevated: '#3a3a3a'
      },
      text: {
        primary: '#ffffff',
        secondary: '#d0d0d0',
        muted: '#a0a0a0'
      },
      border: {
        default: '#111111',
        subtle: '#2b2b2b'
      }
    }
  },
  spacing: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '20px',
    '4xl': '32px'
  },
  borderRadius: {
    sm: '8px',
    md: '10px',
    lg: '12px',
    xl: '16px'
  },
  shadows: {
    default: '2px 2px #111111'
  },
  breakpoints: {
    sm: '600px',
    md: '760px',
    lg: '960px',
    xl: '1728px'
  }
};
```

---

## 🎨 Implementation Guidelines for Your App

### 1. Typography Implementation
```css
/* Base styles */
body {
  font-family: 'sohne-var', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  color: var(--text-primary);
  background: var(--bg-primary);
  line-height: 1.4;
  letter-spacing: -0.02em;
}

/* Headings */
h1 { 
  font-size: clamp(32px, 8vw, 170px);
  line-height: 0.84;
  letter-spacing: -0.06em;
  font-weight: 300;
}

h2 {
  font-size: clamp(24px, 4vw, 43px);
  line-height: 0.95;
  letter-spacing: -0.06em;
  font-weight: 300;
}

h3 {
  font-size: clamp(18px, 2.5vw, 28px);
  line-height: 1;
  letter-spacing: -0.04em;
  font-weight: 300;
}

p {
  font-size: clamp(14px, 1.5vw, 21px);
  line-height: 1.5;
  letter-spacing: -0.03em;
}
```

### 2. Color System Implementation
```css
:root {
  /* Dark theme (default) */
  --bg-primary: #000000;
  --bg-secondary: #111111;
  --bg-tertiary: #2b2b2b;
  --bg-elevated: #3a3a3a;
  
  --text-primary: #ffffff;
  --text-secondary: #d0d0d0;
  --text-muted: #a0a0a0;
  
  --border-default: #111111;
  --border-subtle: #2b2b2b;
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #e0e0e0;
  --bg-elevated: #ffffff;
  
  --text-primary: #000000;
  --text-secondary: #333333;
  --text-muted: #666666;
  
  --border-default: #e0e0e0;
  --border-subtle: #f0f0f0;
}
```

### 3. Component System
```css
/* Buttons */
.btn {
  font-family: inherit;
  font-size: 14px;
  font-weight: 300;
  padding: 8px 16px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}

.btn-primary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-color: var(--bg-tertiary);
}

.btn-primary:hover {
  background: var(--bg-elevated);
}

/* Cards */
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-default);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 2px 2px var(--border-default);
}

/* Inputs */
.input {
  background: transparent;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 14px;
  padding: 10px 12px;
  width: 100%;
}

.input:focus {
  outline: none;
  border-color: var(--text-primary);
}
```

### 4. Layout Patterns
```css
/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 960px) {
  .container {
    padding: 0 32px;
  }
}

/* Grid */
.grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

/* Flex utilities */
.flex {
  display: flex;
  gap: 8px;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

---

## ✨ Key Aesthetic Principles

1. **Minimalism:** Remove everything non-essential
2. **Breathing room:** Generous whitespace, don't cram content
3. **Typography-first:** Let type hierarchy guide the design
4. **Subtle contrast:** Use shades of gray, not stark divisions
5. **Geometric precision:** Consistent spacing/sizing multiples
6. **Fast & fluid:** Responsive without janky breakpoints
7. **Professional restraint:** Avoid unnecessary decoration
8. **Dark elegance:** Embrace dark UI patterns
9. **Developer focus:** Technical aesthetic, not consumer
10. **Performance-minded:** Fast loads, minimal assets

---

## 🚀 Quick Start Checklist

- [ ] Install/load Sohne font family (or use system fallbacks)
- [ ] Set up CSS custom properties for colors
- [ ] Implement responsive typography with `clamp()` or `calc()`
- [ ] Create base component styles (buttons, cards, inputs)
- [ ] Define spacing scale and apply consistently
- [ ] Set up mobile-first media queries
- [ ] Implement dark theme (light theme optional)
- [ ] Add subtle hover/focus states
- [ ] Test on multiple screen sizes
- [ ] Optimize for performance and accessibility

---

## 📚 Font Alternatives

If Sohne is unavailable, use these similar alternatives:
- **Sohne → Inter** (open-source, similar geometric properties)
- **Sohne → Work Sans** (clean, modern sans-serif)
- **Sohne → Helvetica Neue** (already in fallback stack)
- **Sohne Mono → JetBrains Mono** (modern monospace)
- **Sohne Mono → Fira Code** (code-optimized)

---

## 🎯 Design Decision Framework

When making design choices, ask:
1. **Is it minimal?** Can I remove this without losing function?
2. **Is it consistent?** Does it follow established patterns?
3. **Is it responsive?** Does it work at all viewport sizes?
4. **Is it accessible?** Can all users interact with it?
5. **Is it performant?** Does it load fast?
6. **Is it Stripe-like?** Does it match the reference aesthetic?

---

**End of Design Reference Document**

Use this document as the single source of truth for all aesthetic decisions in your application. Copy-paste code snippets directly, adapt design tokens to your stack, and reference the principles when making design choices.
