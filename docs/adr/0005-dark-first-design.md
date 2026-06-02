# ADR 0005: Dark-first design (inverts the reference mockup)

**Date:** 2026-06-03  
**Status:** Accepted

## Context

The reference mockup (`claude-design-export/index.html`) was generated as a light-first layout. The target audience ($1M+ earners) expects a premium, exclusive feel. Dark-background sites signal luxury and modernity in the wealth/finance space.

## Decision

The build inverts the mockup: near-black (`#0a0a0a`) is the dominant background, green (`#0d7c54`) is the primary accent, and light sections are used sparingly for contrast. The mockup remains the source of truth for layout, typography, and component structure — only the colour scheme is inverted.

## Consequences

- A developer reading the mockup and the built site will see opposite background colours — this is intentional, not a bug
- Light sections (used sparingly) create visual contrast and break up long dark pages
- The logo (cream/dark arrow + green arrow) reads correctly on dark backgrounds
- If the mockup is regenerated or updated, the dark-first decision must be manually re-applied
