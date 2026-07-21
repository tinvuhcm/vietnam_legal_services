---
name: Premium Legal Authority
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  hover-gold: '#F1C40F'
  surface-white: '#FFFFFF'
typography:
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  section-padding-desktop: 5rem
  section-padding-mobile: 2.5rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The brand personality for this design system is **authoritative, elite, and profoundly trustworthy**. It serves a dual audience: B2B corporate entities seeking rigorous compliance and B2C individuals navigating sensitive legal disputes. The visual language must balance the "Safe Harbor" reliability of a traditional law firm with the modern efficiency of a 2026 legal consultancy.

The chosen style is **Corporate / Modern with a Luxury finish**. It leverages high-end editorial cues (serif headings) and architectural precision (structured grids). 

**Key Style Directives:**
- **Glassmorphism:** Apply exclusively to the global navigation bar to create a sense of modern transparency and depth without cluttering the interface.
- **Micro-Interactions:** Use subtle "Fade In Up" transitions for content blocks to reinforce a sense of calm and composed arrival.
- **Tone:** Professionalism is paramount. Avoid trendy "playful" elements; instead, focus on crisp execution, ample whitespace, and high-contrast legibility.

## Colors

The palette is anchored in **Primary Navy**, a deep, institutional blue that evokes stability and experience. **Accent Gold** is used strategically to signal premium quality and high-value actions (CTAs). 

**Functional Application:**
- **Primary Navy:** Used for heavy text, hero backgrounds, and primary branding.
- **Secondary Navy:** Reserved for footers and secondary UI containers to provide depth differentiation from the primary backgrounds.
- **Accent Gold:** Reserved for interactive elements like buttons and icons. It must always meet accessibility contrast ratios against navy backgrounds.
- **Backgrounds:** Use the neutral `#F8FAFC` for section differentiation to prevent "wall-of-white" fatigue, maintaining a clean, airy aesthetic.

## Typography

This design system employs a classic **Serif/Sans-Serif pairing**. **Playfair Display** provides the editorial authority required for legal headlines, while **Inter** ensures maximum legibility for complex legal clauses and body text across all devices.

**Hierarchy Guidance:**
- **Headlines:** Use Playfair Display for all H1-H3 levels. For mobile, scale down H1 significantly to ensure titles remain within the viewport.
- **Body:** Use Inter for all functional text. Maintain a generous line-height (1.6) to improve readability for long-form legal advice.
- **Labels:** Use uppercase Inter with slight letter spacing for small metadata or section labels to provide a "premium-print" feel.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop, centering the content at a maximum width of 1280px. For mobile, it transitions to a single-column layout with a 20px (1.25rem) safety margin on both sides.

**Spacing Rhythm:**
- **Vertical Rhythm:** Sections are separated by large "breathing rooms" (80px on desktop) to maintain a premium, uncluttered experience.
- **Touch Targets:** In accordance with mobile-first requirements, all interactive elements must have a minimum height of 48px.
- **Padding:** Content cards and containers should use a base padding of 24px (1.5rem) to ensure text does not feel cramped against borders.

## Elevation & Depth

Visual hierarchy is established through a combination of **tonal layering** and **refined shadows**.

**Implementation Rules:**
- **Navigation:** The navbar uses a glassmorphism effect—`backdrop-filter: blur(12px)` with a semi-transparent white or navy background (depending on section contrast) and a 1px border.
- **Cards:** Use a "Low-contrast outline" mixed with an "Ambient shadow." The default state is a 1px border of `#E2E8F0` with a very soft, diffused shadow.
- **Interactive Depth:** On hover, cards should lift slightly using a more pronounced, medium-diffusion shadow (`shadow-lg`) and a subtle vertical translation (-4px).
- **Floating Elements:** The Zalo/Chat widget and other persistent UI elements use the highest elevation level to ensure they sit clearly above all scrollable content.

## Shapes

The shape language is **Soft (0.25rem)**, reflecting a professional and conservative character. While "rounded" or "pill" shapes can feel too casual for legal services, sharp corners can feel overly aggressive. 

**Application:**
- **Buttons & Inputs:** Use a standard `rounded-md` (0.375rem / 6px) to maintain a modern but structured look.
- **Cards:** Use a slightly larger radius for outer containers (0.5rem / 8px) to soften the large blocks of information.
- **Icons:** Should be encased in circular (pill) containers only when used as decorative accents or status indicators.

## Components

### Buttons
- **Primary:** Solid Accent Gold (`#D4AF37`) with Navy text. High contrast is required. Hover state transitions to Hover Gold (`#F1C40F`).
- **Secondary:** Transparent background with a 2px Primary Navy border.
- **Styling:** No sharp corners; use `rounded-md`. Text must be uppercase or semi-bold Inter.

### Cards
- **Structure:** Clean white background, 1px border in light gray, and soft shadow. 
- **Content:** Headline in Playfair Display (sm/md), body text in Inter.
- **Usage:** Used for "Pain Points" and "Blog Hub" items to create distinct modularity.

### Input Fields
- **Style:** Minimalist. 1px border that darkens on focus. Use Inter for placeholder and input text.
- **Mobile:** Labels must be placed above the field (not inline) to ensure visibility during keyboard entry.

### Accordions (FAQ)
- **Design:** Clean horizontal dividers. Use a gold plus/minus icon or chevron to indicate expansion. 
- **Typography:** Question in Inter (Semi-bold), Answer in Inter (Regular).

### Navigation Bar
- **Effect:** Glassmorphism (`rgba(255, 255, 255, 0.8)` or `rgba(15, 23, 42, 0.8)` with blur).
- **Logo:** "VLS" in Gold, "Vietnam Legal Services" in the contrasting primary/neutral color.

### Floating Widget (Zalo)
- **Position:** Bottom-right, 24px from edges.
- **Style:** Circular navy button with a gold border and the Zalo brand icon.