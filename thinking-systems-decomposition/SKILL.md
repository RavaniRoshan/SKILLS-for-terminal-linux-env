# Thinking: Systems Decomposition

## Purpose
Break down complex systems, architectures, or problems into their fundamental components, interactions, and feedback loops.

## When to Use
- When analyzing a new software architecture.
- When debugging a multi-service system failure.
- When planning a large-scale refactor or feature.

## When NOT to Use
- For trivial, linear tasks.
- For isolated UI-only changes with no backend impact.

## Inputs
- System description, codebase, or architectural diagram.
- A specific area of concern (e.g., "why is the buffer overflowing?").

## Outputs
- Component map showing inputs, outputs, and state.
- Interaction flow (sequence diagram or text-based flow).
- Potential failure points and bottlenecks.

## Rules
- Start with the "black box" (input -> output) before opening it.
- Identify "Single Points of Failure" (SPOFs).
- Distinguish between "Synchronous" and "Asynchronous" boundaries.

## Failure Modes
- Getting lost in the implementation details before understanding the system flow.
- Ignoring secondary side effects or feedback loops.

## Checklist
- [ ] Define the system boundary.
- [ ] List all actors and external dependencies.
- [ ] Trace the path of a single request/data point.
- [ ] Identify where state is stored and mutated.
- [ ] Flag potential race conditions or synchronization issues.
