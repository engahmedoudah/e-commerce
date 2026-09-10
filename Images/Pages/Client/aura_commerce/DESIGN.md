---
name: Aura Commerce
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cc'
  surface-tint: '#585e6f'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#151b29'
  on-primary-container: '#7e8395'
  inverse-primary: '#c1c6d9'
  secondary: '#6d5b48'
  on-secondary: '#ffffff'
  secondary-container: '#f7dec5'
  on-secondary-container: '#73614d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde2f6'
  primary-fixed-dim: '#c1c6d9'
  on-primary-fixed: '#151b29'
  on-primary-fixed-variant: '#414756'
  secondary-fixed: '#f7dec5'
  secondary-fixed-dim: '#dac3aa'
  on-secondary-fixed: '#26190a'
  on-secondary-fixed-variant: '#544432'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  price-display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 12px
---

## Brand & Style

The design system is rooted in **Minimalism** and **High-End Modernism**, specifically tailored for a premium mobile e-commerce experience on Android. The aesthetic prioritizes breathability, utilizing expansive whitespace (or "darkspace") to elevate products as hero elements. 

The emotional goal is to evoke a sense of "quiet luxury"—fast, dependable, and uncluttered. It follows Material Design 3 (M3) logic but strips away the "playful" defaults in favor of a more structured, editorial feel. 

Key stylistic pillars:
- **Optical Precision:** Every element is aligned to a strict 8pt grid to ensure a sense of architectural stability.
- **Micro-Contrast:** High contrast in typography (large prices vs. subtle labels) creates a hierarchy that feels expensive and decisive.
- **Tactile Softness:** While the layout is structured, the corners are softened to feel comfortable and ergonomic for mobile interaction.

## Colors

The palette is anchored by **Midnight Charcoal** (Primary) to provide a heavy, premium weight to key interactions. **Soft Gold** (Secondary) is used sparingly for high-value accents, such as "Buy Now" triggers or loyalty status indicators.

**Neutral Logic:**
- **Surface:** Pure White (#FFFFFF) in light mode to maximize product color accuracy.
- **On-Surface:** High-contrast Charcoal (#121826) for maximum legibility.
- **Muted:** Slate tones (#64748B) are reserved for secondary metadata to prevent visual noise.

**Status Tones:**
Colors for Success, Error, and Warning use "Jewel" variants—highly saturated but slightly darkened to maintain the premium feel without appearing neon or low-cost.

## Typography

The design system utilizes **Inter** for its neutral, systematic clarity and excellent legibility at small sizes. 

**Hierarchical Rules:**
- **Prices:** Use `price-display` with a heavier weight and slight tracking to ensure the cost is the most prominent piece of data on product cards.
- **Uppercase Labels:** Small metadata and category tags use `label-md` in uppercase with increased letter spacing (5%) to evoke a fashion-editorial look.
- **Contrast:** Headlines should strictly use the Primary Charcoal color, while body text should use a slightly softened Slate to reduce eye strain.

## Layout & Spacing

This design system employs an **8pt Grid System** for consistent vertical rhythm and a **4-Column Fluid Grid** for mobile layouts.

**Mobile Configuration:**
- **Margins:** 20px horizontal margins to provide more "breathing room" than standard apps.
- **Gutters:** 12px between grid items (e.g., product tiles in a search result).
- **Safe Areas:** Adhere strictly to Android’s system bars. Bottom sheets should have a minimum of 24px padding from the bottom indicator.

**Logic:**
Use `lg` (24px) spacing between distinct sections (e.g., between an Image Gallery and Product Info) and `sm` (12px) for internal element grouping (e.g., Title and Price).

## Elevation & Depth

To maintain a "Premium" feel, the design system avoids heavy shadows, instead using **Tonal Layering** and **Ambient Diffusion**.

- **Level 0 (Base):** Pure white background.
- **Level 1 (Cards):** Low-contrast outlines (1px #E2E8F0) with a very soft ambient shadow (0px 4px 20px rgba(0,0,0,0.04)).
- **Level 2 (Bottom Sheets/Modals):** High-diffusion shadow (0px 10px 40px rgba(0,0,0,0.08)) to indicate floating priority.
- **Scrim:** A 40% opacity Charcoal overlay is used when modals are active to focus attention.

**Depth Hinting:** Navigation bars and sticky headers should use a subtle backdrop blur (12px) with 90% opacity white rather than a solid color to maintain spatial awareness.

## Shapes

The shape language is **Softly Rounded**, moving away from sharp industrial edges to a more approachable, lifestyle-oriented feel.

- **Buttons:** 8px radius. This keeps them looking functional and "clickable" without being too playful.
- **Product Cards & Bottom Sheets:** 16px radius (`rounded-xl`). The larger radius on containers creates a "cradle" effect for content.
- **Input Fields:** 8px radius to match buttons, creating a unified form language.
- **Images:** Always clipped to the container's radius for a clean, integrated look.

## Components

### Buttons
- **Primary:** Solid Midnight Charcoal, White text. High-pressure haptic on tap.
- **Secondary:** Soft Gold background, Charcoal text. Used for "Add to Cart."
- **Outlined:** 1px Slate border, Charcoal text. Used for "Wishlist" or "Compare."
- **Loading State:** Button text fades to 0% opacity; a subtle, thin-stroke circular spinner (White or Charcoal) appears. Width remains fixed to prevent layout shift.

### Text Fields
- **Default:** Light grey fill (#F1F5F9) with no border to minimize visual noise.
- **Focused:** 1.5px Charcoal border with a subtle 4px outer glow.
- **Error:** 1.5px Crimson border with helper text below.
- **Search:** Includes a leading 20px icon and a "clear" trailing icon.

### Shared E-commerce Components
- **Chips:** Used for sizing/filtering. Selected state uses Primary Charcoal; unselected uses a 1px border.
- **Steppers:** Minimalist horizontal line with "Dot" indicators for checkout stages.
- **Carousel:** Full-width image gallery with "Floating Pill" pagination (index count like "1 / 5") rather than dots.
- **Badges:** Small, floating "New" or "Sale" tags with 0px radius or extremely tight 2px radius for a "tag" look.

### Animations & States
- **Transitions:** Use "Standard Easing" (400ms) for page pushes. Bottom sheets slide in with a "Decelerate" curve (300ms).
- **Skeleton Screens:** Shimmer effect moving from left-to-right using a #F1F5F9 to #E2E8F0 gradient.
- **Empty States:** Centered 120px illustrative icon in light grey, followed by a bold Title and a "Return to Shop" Primary button.
- **Haptics:** Light "tick" on scroll wheel interactions; Medium "thump" on successful "Add to Cart" or "Purchase."