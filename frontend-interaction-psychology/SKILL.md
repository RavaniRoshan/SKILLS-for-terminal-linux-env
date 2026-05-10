# Frontend: Interaction Psychology

## Purpose
Design and implement user interfaces that align with human cognitive patterns, reducing mental effort and increasing intuitiveness.

## When to Use
- When designing complex forms or dashboards.
- When creating onboarding flows.
- When deciding on layout, hierarchy, and affordances.

## When NOT to Use
- For purely aesthetic visual design (though they overlap).
- For accessibility-only tasks (use Frontend Accessibility instead).

## Inputs
- User personas and goals.
- Wireframes or functional requirements.

## Outputs
- UI refinements including:
  - Clear visual hierarchy (Size, Color, Contrast).
  - Progressive disclosure (Hiding complexity until needed).
  - Proper affordances (Buttons look clickable, links look linkable).
  - Error prevention and clear recovery paths.

## Rules
- **Hick’s Law**: Reduce the number of choices to speed up decision-making.
- **Fitts’s Law**: Make important targets large and close to the user's cursor.
- **Recognition over Recall**: Minimize the information the user must keep in their head.

## Failure Modes
- Overwhelming the user with too much information at once (Cognitive Load).
- Breaking standard platform conventions (e.g., non-standard scrolling).

## Checklist
- [ ] Group related elements (Gestalt Principles).
- [ ] Use consistent icons and labels.
- [ ] Implement clear "Back" and "Cancel" options.
- [ ] Verify that the most important action is the most visually prominent.
- [ ] Ensure feedback is provided for every meaningful user interaction.
