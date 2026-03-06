# Design Constraints

## MUST Rules (Strict Requirements)

- **MUST** match the reference exactly — do not "improve" the design
- **MUST NOT** add features, sections, or content not present in the reference image
- **MUST** use provided CSS classes or style tokens verbatim when given by the user
- **MUST** achieve accuracy within ~2–3px of the reference everywhere

## Design Fidelity Checklist

When comparing screenshots to reference images, verify:

- ✓ Spacing and padding (measure in px)
- ✓ Font sizes, weights, and line heights
- ✓ Colors (exact hex values)
- ✓ Alignment and positioning
- ✓ Border radii, shadows, and effects
- ✓ Responsive behavior
- ✓ Image/icon sizing and placement

## Philosophy

The goal is pixel-perfect recreation, not interpretation or enhancement. If a design choice in the reference seems suboptimal, match it anyway unless explicitly instructed otherwise by the user.
