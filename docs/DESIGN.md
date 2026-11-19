---
name: Hindustan Care
description: A clear, trustworthy service system for same-day appliance repair in Ranchi.
colors:
  background: "#F9F9FA"
  foreground: "#121A26"
  primary: "#2259C6"
  primary-foreground: "#FFFFFF"
  secondary: "#E3E8EF"
  muted: "#D8DCE2"
  muted-foreground: "#667180"
  accent: "#F9FAFC"
  border: "#E3E6EA"
  input: "#F3F4F6"
  ring: "#3E6DB7"
  destructive: "#DC2626"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, Geist Fallback, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, Geist Fallback, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Geist, Geist Fallback, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Geist, Geist Fallback, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  section: "96px"
  section-large: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "36px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "36px"
  service-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Hindustan Care

## Overview

**Creative North Star: "The Assured Service Line"**

Hindustan Care should feel like a capable local service team that answers promptly and communicates without ambiguity. The interface is bright, blue-led, and composed around clear paths to a phone call; it earns premium credibility through tidy structure and useful proof, not through spectacle.

The system uses a practical web rhythm: wide service sections, concise text blocks, visible testimonials and ratings, and a persistent mobile action bar. It rejects the visual habits of cheap repair directories, generic WordPress templates, outdated government-style pages, and overly flashy startup landing pages.

**Key Characteristics:**

- Direct, reassuring calls to action
- Cool, service-led blue with clean neutral space
- Structural borders and tonal surfaces before shadow
- Rounded but compact everyday service components
- Responsive, readable information under household urgency

## Colors

The palette pairs a confident blue action color with neutral, cool-white surfaces so proof and service information stay legible and calm.

### Primary

- **Service Blue:** The single high-attention action color. Use it for call actions, key icons, brand marks, and decisive service moments.

### Neutral

- **Clear Background:** The default page canvas; keep it clean and unobstructed.
- **Ink:** Main headings, footer surfaces, and high-emphasis information.
- **Quiet Surface:** Secondary sections and service-card surfaces that organize information without competing with the primary action.
- **Muted Copy:** Supporting body copy only; never use it where a decision or service promise must be read quickly.
- **Structural Border:** Low-contrast boundaries for cards, inputs, and mobile navigation.

### Named Rules

**The Service Blue Rule.** Service Blue is reserved for actions, confirmations, and high-confidence signals. Do not spread it across entire screens or use it as decoration.

**The Clear-Surface Rule.** Neutral backgrounds do the organising. Use soft tonal shifts and borders to separate content; heavy shadows are not a substitute for hierarchy.

## Typography

**Display Font:** Geist (with Geist Fallback, sans-serif)

**Body Font:** Geist (with Geist Fallback, sans-serif)

**Character:** Compact, modern grotesque typography keeps urgent service information clear while the strong display weights give promises and next steps enough authority.

### Hierarchy

- **Display:** Use the display role for the hero promise and only the largest conversion messages. Keep display lines balanced and never allow heading text to overflow on mobile.
- **Headline:** Use the headline role for section-level decisions such as service categories, repair confidence, and proof.
- **Title:** Use the title role for service names, testimonial labels, and card headings.
- **Body:** Use the body role for explanations and supporting proof. Keep long copy within a readable 65–75ch measure.
- **Label:** Use the label role sparingly for short context, such as status or trust labels. It may be uppercase; body copy must not be uppercase.

### Named Rules

**The Fast Read Rule.** A visitor should understand the service, the local relevance, and how to call before they need to parse supporting detail.

## Elevation

Elevation is flat and structural. Cards and sections are primarily separated through quiet background shifts and fine borders; limited hover lift may signal that a service option is interactive. The system does not use soft, expansive shadows as decoration.

### Shadow Vocabulary

- **Interactive Lift:** A subtle, short hover shadow is permitted on service cards to confirm interactivity. It must remain tighter than an 8px blur and never be paired with a decorative border shadow.

### Named Rules

**The Proof-First Rule.** Ratings, service language, and clear pricing promises create trust; depth effects never do the job of evidence.

## Components

### Buttons

Buttons are direct and reassuring, with full-pill shapes for phone and WhatsApp actions.

- **Shape:** Full pill for actions; gently rounded corners for compact square controls.
- **Primary:** Service Blue background with white text. Use for the main call action and the highest-priority decisions.
- **Outline:** Clear background with a fine structural border. Use for WhatsApp or a secondary route when a phone call is primary.
- **Hover / Focus:** Primary buttons may darken slightly; every interactive button must show a visible focus ring. Avoid bouncing, pulsing, or oversized scale effects.

### Cards / Containers

Cards are compact service-information units, not decorative furniture.

- **Corner Style:** Gently rounded (10px) for services and testimonials; do not exceed this for cards.
- **Background:** White or Quiet Surface, selected by content density.
- **Border:** Fine Structural Border at rest. A light Service Blue border tint may indicate a hoverable service option.
- **Internal Padding:** Use 24px for standard cards; use 32px only when the card has substantial content.

### Navigation

Navigation is simple and conversion-led. The mobile header opens into a clear vertical list, while the mobile footer retains immediate Call and WhatsApp actions. The main call route must remain more prominent than the message alternative.

### Trust Pills and Ratings

Trust cues are compact, rounded, and factual. Use customer avatars, ratings, service guarantees, or clear status labels only when they are substantiated. Never manufacture review counts, certification, or urgency.

### Service Marquee

Brand logos sit on Quiet Surface tiles with restrained grayscale treatment. Color can return on hover, but the surrounding page must remain visually calmer than the conversion actions.

## Do's and Don'ts

### Do:

- **Do** make the phone action immediately visible and pair it with a clear WhatsApp fallback.
- **Do** use Service Blue for decisive actions, trusted local signals, and active states.
- **Do** rely on testimonials and ratings that the business can substantiate.
- **Do** preserve generous section spacing and readable body line length.
- **Do** use `prefers-reduced-motion` alternatives for all GSAP-driven motion.

### Don't:

- **Don't** make the site resemble a cheap local repair directory.
- **Don't** ship generic WordPress-template visuals or outdated government-style layouts.
- **Don't** use an overly flashy startup landing-page aesthetic, gradient text, decorative glass panels, or hero-metric templates.
- **Don't** use large soft shadows with bordered cards, side-stripe accents, or card radii above 16px.
- **Don't** hide key service information behind motion or depend on animation for content to become visible.
