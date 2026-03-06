# Screenshot Comparison Workflow

This skill documents the iterative design workflow for recreating website designs.

## Process

1. **Generate** the initial HTML using Tailwind CSS
2. **Screenshot** using `/screenshot` command
3. **Compare** using `/compare` command against reference image
4. **Analyze** specific differences:
   - Measure spacing/padding discrepancies in pixels
   - Check font sizes, weights, line heights
   - Verify exact hex color values
   - Assess alignment and positioning
   - Review border radii, shadows, effects
   - Test responsive behavior
5. **Fix** identified issues in the HTML
6. **Repeat** steps 2-5 until pixel-perfect (within 2-3px)

## Quick Commands

- `/screenshot` - Take new screenshot
- `/compare` - Compare with reference
- `/preview` - Open in browser

## Success Criteria

- All spacing matches within 2-3px
- Colors match exactly (hex values)
- Typography matches (size, weight, line-height)
- Visual effects match (shadows, borders, etc.)
- At least 2 comparison rounds completed
