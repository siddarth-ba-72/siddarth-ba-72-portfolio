---
name: Siddarth Ambannavar Portfolio
description: A calm, engineer-made workspace where every section is a working window.
colors:
  periwinkle-accent: "#9a9dff"
  periwinkle-accent-soft: "rgba(154, 157, 255, 0.1)"
  periwinkle-accent-line: "rgba(154, 157, 255, 0.32)"
  indigo-accent: "#4f46e5"
  indigo-accent-soft: "rgba(79, 70, 229, 0.08)"
  indigo-accent-line: "rgba(79, 70, 229, 0.28)"
  navy-ground: "#0a0f1d"
  navy-raised: "#0e1426"
  navy-card: "#10172b"
  navy-inset: "#151d35"
  navy-line: "#1e2843"
  navy-line-strong: "#2b3757"
  navy-fg: "#e7eaf4"
  navy-muted: "#a6aec6"
  navy-subtle: "#8b94b0"
  paper-ground: "#ffffff"
  paper-raised: "#f7f8fc"
  paper-card: "#ffffff"
  paper-inset: "#f3f4fa"
  paper-line: "#e4e7f0"
  paper-line-strong: "#d3d8e6"
  ink-fg: "#0f1222"
  ink-muted: "#4a5068"
  ink-subtle: "#646b85"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "5rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-sm:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  body-lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  label-mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
  label-mono-md:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "14px"
    fontWeight: 500
  role-rotator:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
  nav-mono:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 400
rounded:
  card: "6px"
  control: "6px"
  focus: "4px"
  media-inset: "4px"
  pill: "9999px"
spacing:
  tag-gap: "6px"
  tag-gap-md: "8px"
  control-gap: "12px"
  card-gap: "20px"
  card-pad: "24px"
  card-pad-lg: "32px"
  gutter: "20px"
  gutter-md: "32px"
  section-y: "96px"
  section-y-md: "112px"
  container: "1152px"
components:
  button-primary:
    backgroundColor: "{colors.periwinkle-accent}"
    textColor: "{colors.navy-ground}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.navy-card}"
    textColor: "{colors.navy-fg}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-card-live:
    backgroundColor: "{colors.periwinkle-accent}"
    textColor: "{colors.navy-ground}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-card-source:
    textColor: "{colors.navy-muted}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-icon:
    backgroundColor: "{colors.navy-card}"
    textColor: "{colors.navy-muted}"
    rounded: "{rounded.control}"
    size: "36px"
  window:
    backgroundColor: "{colors.navy-card}"
    rounded: "{rounded.card}"
    padding: "24px"
  photo-window:
    backgroundColor: "{colors.navy-card}"
    rounded: "{rounded.card}"
    padding: "12px"
    width: "25rem"
  window-bar:
    backgroundColor: "{colors.navy-raised}"
    textColor: "{colors.navy-subtle}"
    typography: "{typography.label-mono}"
    height: "40px"
    padding: "0 16px"
  tag:
    backgroundColor: "{colors.navy-inset}"
    textColor: "{colors.navy-muted}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.control}"
    padding: "4px 8px"
  tag-md:
    backgroundColor: "{colors.navy-inset}"
    textColor: "{colors.navy-fg}"
    typography: "{typography.label-mono-md}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  status-pill:
    backgroundColor: "{colors.periwinkle-accent-soft}"
    textColor: "{colors.periwinkle-accent}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  nav-link:
    textColor: "{colors.navy-muted}"
    typography: "{typography.nav-mono}"
    rounded: "{rounded.control}"
    padding: "6px 12px"
  nav-link-active:
    backgroundColor: "{colors.periwinkle-accent-soft}"
    textColor: "{colors.periwinkle-accent}"
---

# Design System: Siddarth Ambannavar Portfolio

## Overview

**Creative North Star: "The Engineer's Workspace"**

A calm workspace, built by an engineer, where every section is a working window. Content sits on flat cards one step off the ground, each topped by a window bar with three muted dots, a mono path such as `~/siddarth/profile.png`, and optional right-aligned meta (a year, a date range, `yaml`, or a live status). The reading voice is a heavy neo-grotesk sans. The machine voice is mono and only appears where a machine would print text: paths, tags, dates, config keys and values, nav labels.

Dark is the default theme: a polished deep-navy ground. Light is a white ground with the same structure. Both themes use one accent, indigo-violet. It means "live, current, actionable" and fills the primary button. Everything else is hairlines and three text tones. The system rejects the neon-gradient, glass-and-glow developer portfolio this site used to be. The surface stays flat and quiet, so the content carries the visual weight.

The density is moderate and easy to scan. Sections are tall bands split by full-bleed hairlines. Each band has a large heading, an optional one-line description, and windows on a 20px grid gap.

**Key Characteristics:**
- Every content block is a Window: hairline border, 6px corners, a mono-path bar.
- Deep navy (dark, default) or white (light) ground. Surfaces step up tonally, never with shadows.
- One indigo-violet accent for live, current and actionable things only.
- Heavy sans for reading. Mono strictly for machine text.
- Two sanctioned motions, both in the opening screen: a transform-only entrance rise and the rotating role line under the name. Reduced motion is respected.

## Colors

Each theme has a cool, low-chroma neutral ladder and one indigo-violet accent. The token roles are identical across themes, so components never branch on theme.

### Primary
- **Periwinkle Signal** (dark, `periwinkle-accent`) / **Indigo Signal** (light, `indigo-accent`): the only accent. Used for the primary button fill, live and current status dots and labels, the active nav link, the `$` prompt on card links, link hover color, the leading icons in Experience, Certifications and Education, the focus ring, and the `>` prompt and caret of the rotating role.
- **Signal Wash** (`*-accent-soft`): a translucent tint behind accented text: the availability pill, the active nav highlight, the GPA chip, and text selection.
- **Signal Hairline** (`*-accent-line`): the 1px border of accent-tinted pills and chips.

### Neutral
- **Ground** (`navy-ground` / `paper-ground`): the page background, plus the navbar and mobile menu, which share the ground color and are separated only by a hairline.
- **Raised** (`navy-raised` / `paper-raised`): the window bar, the monogram tile, and the icon wells in the contact list.
- **Card** (`navy-card` / `paper-card`): window bodies, secondary buttons, and icon buttons. In dark mode the card sits one step above the ground. In light mode the card and ground are both white, and the hairline does the separating.
- **Inset** (`navy-inset` / `paper-inset`): tag fill and list-row hover.
- **Hairline** (`navy-line` / `paper-line`): all structural borders, including section dividers, window borders, bar underlines and in-card dividers.
- **Strong Hairline** (`navy-line-strong` / `paper-line-strong`): tag borders, secondary-button borders, photo frames, window dots, card hover border, and the scrollbar thumb.
- **Foreground** (`navy-fg` / `ink-fg`): headings, values, primary text.
- **Muted** (`navy-muted` / `ink-muted`): body copy, descriptions, nav links at rest, config keys in Skills, the photo caption's second line.
- **Subtle** (`navy-subtle` / `ink-subtle`): meta, window-bar paths, dates, key colons in Skills. Still meets AA on card in both themes.

### Named Rules
**The One Signal Rule.** The accent is reserved for things that are live, current, or actionable. If something is not live, current, or actionable, it gets a neutral color.

**The Word-Beside-Dot Rule.** Status is never color alone. Every accent dot sits beside a word (`live`, `current`, `open to opportunities`).

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist (same family)
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo)

**Character:** A tight, heavy neo-grotesk for anything a person reads, set against a plain mono for anything a machine would print. The contrast between the two is the whole typographic idea.

### Hierarchy
- **Display**: the name in the opening screen only, on two lines. Weight 800, line-height 0.98, tracking -0.04em. It has three steps: `display-mobile` below sm, `display-sm` from sm, and `display` from lg.
- **Role line**: the rotating role under the name. Sans, weight 500, 1.25rem rising to 1.5rem at sm, behind a mono accent `>` prompt.
- **Headline**: section titles. Weight 700, tracking -0.025em. Steps from 1.875rem to the full size at md. Optional description below at 1rem muted, max ~42rem.
- **Title**: card and organization titles (1.25rem bold, tight). Certifications use 1.125rem semibold. The resume card title and the hero fact values use 1.5rem bold.
- **Body**: card prose at 15px with relaxed line-height (1.625) in muted. Hero summary at 1rem, rising to 17px at sm, max ~36rem.
- **Label (mono)**: window-bar paths and meta, tags, dates, status (12px). Nav links (13px). Skills tags at 14px medium in foreground, skills keys at 15px. Card links and contact handles (14–15px). Never uppercase, never letterspaced.

### Named Rules
**The Machine Voice Rule.** Use mono only for paths, tags, dates, config keys and values, handles, and nav labels. Never use mono for headings, paragraphs, or labels a person would write.

**The Heavy Sans Rule.** Use weight 700–800 with negative tracking for display, headline and title. Body copy stays at 400.

## Layout

The page is a single column of full-bleed section bands, each separated by a 1px bottom hairline. Content sits in a centered container (`container`, 1152px) with horizontal gutters of 20px, or 32px from md up. Sections have 96px of vertical padding, or 112px from md up. The opening screen clears the fixed 64px navbar with extra top padding. Section headings sit 40–48px above their content.

Windows tile on a 20px gap: two columns from md up for projects and certifications, one column for experience and education. Window bodies are padded 24px, or 32px for the wider experience and education cards. Tags wrap with a 6px gap, or 8px for the larger Skills tags. Button groups use a 12px gap. In-card dividers are hairlines with 16–20px of padding above them.

The opening screen is a two-column grid at lg (text 1.15fr, profile window 1fr) and stacks below that. From lg up, the right column holds the photo window, aligned right with a maximum width of 25rem (`photo-window`). Below lg the same photo window leads the opening screen, above the availability pill and name, at a maximum width of 18rem (20rem from sm) so the photo stays clearly visible on phones. The fact row under the buttons holds two facts in a row with a 48px gap. A faint 56px measuring grid sits behind the opening screen only, fading out toward the bottom. Anchor scrolling is smooth and offset 5rem for the fixed nav.

## Elevation & Depth

The system has no shadows. Depth comes from tonal stepping (ground → raised → card → inset) and from 1px hairlines. In light mode the card and ground share white, so the hairline alone carries separation. Hover never lifts a card: it strengthens the border (hairline → strong hairline) or fills a row with the inset tone.

### Named Rules
**The Hairline Rule.** Every edge is a 1px border in `line` or `line-strong`. No box-shadow, glow, blur, or backdrop-filter anywhere, including the fixed navbar, which is an opaque ground color.

## Shapes

Corners are slightly softened. Windows, buttons, icon buttons, tags, chips, the monogram tile and the photo frame all use 6px (`card` / `control`). Full rounding is reserved for status pills, status dots and the window-bar dots. The global focus ring has its own slightly tighter 4px radius (`focus`). The recurring silhouette is the window: a rectangle with a 40px bar across the top.

## Components

### Window (signature)
The container for all content.
- **Anatomy:** 1px hairline border, 6px corners, card fill, clipped overflow. The bar is 40px tall, raised fill, with a hairline underline and 16px side padding. It holds three 10px dots in strong hairline color (6px apart), then the mono path 12px further right (subtle, truncates), then optional meta pushed to the right edge (mono, subtle; a date range, year, file type, or a Status).
- **Body:** 24px padding by default. Some cards widen it to 32px, and list-style bodies remove it.
- **Paths:** read like a filesystem and always start at `~/` (`~/siddarth/profile.png`, `~/siddarth/skills.yml`, `~/exp/wissen`, `~/certifications/…`, `~/education/…`, `~/contact`).
- **Hover (linked cards):** the border strengthens to strong hairline. No lift.

### Photo window
The opening screen's portrait. From lg it sits right of the text at up to 25rem; below lg it leads the hero at up to 18rem (20rem from sm).
- **Anatomy:** a Window with the path `~/siddarth/profile.png` and no meta, a 12px body padding, and a maximum width of 25rem (18rem below sm, 20rem from sm until lg). The photo is a square that fills the card width (cover crop, `media-inset` 4px corners nested inside the 6px card). Below it sits a two-line caption with 8px side padding, 16px above and 6px below: the role in semibold foreground, then company · city in 14px muted.
- **Rules:** the caption stays minimal (role, company, city). The photo cannot be dragged, and its right-click menu is disabled.

### Status
- **Style:** a 6px solid dot plus a lowercase word, with a 6px gap. The accent tone is for live or current states. The muted tone (subtle dot and text) is for things like `source` that aren't live.
- **Placement:** window-bar meta, role dates, and inside the availability pill. Still. It never pulses.

### Tags (chips)
- **Small (default):** inset fill, 1px strong-hairline border, 6px corners, mono 12px in muted, 4px × 8px padding. They wrap with a 6px gap. Used for project and experience stacks.
- **Medium:** the same fill, border and corners, but mono 14px medium in foreground, 6px × 12px padding, and an 8px wrap gap. Used in Skills, where the skills are the content rather than metadata.
- **State:** none. Tags are labels, not filters.

### Buttons
- **Shape:** 6px corners. 44px tall in content, 36px in the navbar. Sans 14px semibold. A 16px leading or trailing icon is optional.
- **Primary:** solid accent fill with ground-colored text (`solid` / `solid-fg`). Hover drops opacity to 90%, and a trailing arrow nudges 2px right.
- **Secondary:** card fill, strong-hairline border, foreground text. Hover darkens the border toward foreground at 40%.
- **Project card actions:** 40px tall, 16px side padding, 14px. **Live demo** is filled with the solid accent and semibold. It has a still dot in the button text color with a faint ring around it, and an up-right arrow that nudges 2px on hover. **Source** is an outline button: no fill, strong hairline, muted medium text with the GitHub mark. Its hover darkens the border toward foreground at 40% and turns the text to foreground. A live project leads with the filled button. A source-only project shows the outline button alone.
- **Icon button:** 36px square, card fill, hairline border, muted icon. Hover brings in the strong hairline and foreground color.
- **Focus:** 2px accent outline at 2px offset with a 4px radius, applied globally.

### Pills and chips
- **Availability pill:** full radius, accent wash with accent hairline, mono 12px accent text wrapping a Status.
- **Value chip (e.g. GPA):** the same wash and hairline at 6px corners, mono 14px.

### Card links
- **Use:** credential links in Certifications. Project cards use buttons instead.
- **Style:** mono 14px in foreground, prefixed by an accent `$` and followed by a small up-right arrow in subtle. Hover turns the text accent, and the arrow shifts 2px up and right.

### Navigation
- **Bar:** fixed, 64px, opaque ground with a bottom hairline. On the left, a 32px monogram tile (raised, strong hairline, mono accent initials) and the name in 15px semibold.
- **Links:** mono 13px, muted. Hover goes to foreground. The active section gets accent text over an accent-wash block (6px corners) that slides between links (tween 0.35s, `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Mobile:** below lg, a hamburger icon button opens a full-width list of mono links divided by hairlines, followed by socials and the Resume button.

### Rotating role
User-pinned. It sits directly under the name in the opening screen.
- **Anatomy:** a mono accent `>` prompt, then a role in the role-line style, then a 2px × 24px accent caret, inside a fixed 36px-tall row that clips overflow.
- **Behavior:** every 2.8s the role slides up and out while the next one slides up and in from below (0.35s, `cubic-bezier(0.16, 1, 0.3, 1)`, fading as it moves). The caret blinks on a 1s hard on/off step.
- **Accessibility:** the full list of roles is in screen-reader-only text, and the animated parts are hidden from assistive tech. Reduced motion stops the slide (framer-motion MotionConfig set to `user`) and the blink (the global reduced-motion rule).

### Timeline (experience roles)
A 1px hairline rule on the left with 8px nodes. The current role's node is solid accent. Past roles get a hollow node (card fill with strong hairline). Dates are in mono subtle.

## Do's and Don'ts

### Do:
- **Do** put every content block in a Window with a filesystem-style mono path and, where useful, right-aligned meta.
- **Do** keep the accent for live, current, and actionable things: primary buttons, status, the active nav link, link hover, focus.
- **Do** pair every status dot with a word.
- **Do** separate surfaces with 1px hairlines and tonal steps. Strengthen the border on hover.
- **Do** use 6px corners for cards and controls, and full rounding only for pills and dots.
- **Do** keep sanctioned motion to the two pieces in the opening screen: the transform-only rise (16px, 0.8s, `cubic-bezier(0.16, 1, 0.3, 1)`, 70ms stagger), and the rotating role with its blinking caret. Content must stay visible if the rise never runs, and `prefers-reduced-motion` must collapse both.
- **Do** make a live project's demo the filled accent button on its card. Source stays an outline button beside it.
- **Do** keep both themes on the same token roles: deep navy ground in dark (default), white ground in light.

### Don't:
- **Don't** use gradient fills, glows, blur, glass, or box-shadows. The only gradients in the build draw the 1px measuring-grid lines and their fade-out mask behind the opening screen.
- **Don't** add a second accent hue, or bring back green as the theme color.
- **Don't** set headings, paragraphs, or eyebrow/kicker labels in mono, uppercase, or wide tracking.
- **Don't** put kicker or eyebrow labels above section headings. A section is a heading plus an optional one-line description.
- **Don't** animate on scroll, or add looping, pulsing, or decorative motion beyond the rotating role and its caret. All other motion is for state changes and small hover nudges.
- **Don't** lift cards on hover or give them elevation.
