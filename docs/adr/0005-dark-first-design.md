# ADR 0005: White background with black and gold palette

**Date:** 2026-06-03  
**Status:** Accepted

## Context

The target audience ($1M+ earners) expects a premium, exclusive feel. A white background with high-contrast black text and warm gold accents signals confidence and clarity in the wealth/finance space.

## Decision

White (`#ffffff`) is the primary background, black (`#111111`) is the foreground, and gold (`#B08628`) is the accent. Card/alternate sections use light gray (`#f5f5f5`). The final CTA section uses a black (`#111111`) background for visual contrast. Reference: `claude-design-export/prime-path-gold.pdf`.

## Consequences

- The logo (black arrow + gold arrow) reads correctly on white backgrounds
- The black CTA section at the bottom of each page provides a strong visual close
- Light sections create visual rhythm without a dark-first inversion
