# Frontend: Perceived Performance

## Purpose
Optimize the user's perception of speed and responsiveness through techniques that hide latency, provide instant feedback, and prioritize critical content.

## When to Use
- When building interactive UIs with data fetching.
- When optimizing slow-loading pages or transitions.
- When working with high-latency environments (e.g., mobile networks).

## When NOT to Use
- For backend optimization or database tuning (though they are related).

## Inputs
- UI designs or existing frontend code.
- User flow descriptions.
- Latency data or performance profiles.

## Outputs
- Implementation of performance patterns:
  - Optimistic updates (Apply UI changes before server confirmation).
  - Skeleton screens and meaningful loading states.
  - Critical CSS and image lazy-loading.
  - Micro-interactions for feedback.

## Rules
- **Feedback Loop**: Provide visual feedback within 100ms of a user action.
- **Predictive Loading**: Pre-fetch or pre-render the next likely user action.
- **Content Stability**: Avoid Layout Shift (CLS) during loading.

## Failure Modes
- "Optimistic lies" (Showing success when an operation actually failed).
- Excessive spinners (Over-communicating latency can make it feel slower).

## Checklist
- [ ] Identify high-latency interactions.
- [ ] Implement optimistic UI for core actions.
- [ ] Add skeleton states for data-heavy sections.
- [ ] Verify that all buttons/inputs have active/loading states.
- [ ] Check for and eliminate layout shifts.
