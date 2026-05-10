# Thinking: Constraint Analysis

## Purpose
Identify the hard limits—physical, technical, or resource-based—that govern a system or project's success.

## When to Use
- During the design phase of a new system.
- When optimizing for performance or scale.
- When debugging "bottleneck" issues.

## When NOT to Use
- For exploratory brainstorming where "anything is possible".
- For simple documentation tasks.

## Inputs
- System specs, performance logs, or project requirements.
- Target goals (e.g., "must handle 10k RPS").

## Outputs
- Constraint report identifying:
  - Hard constraints (Physical/Logical limits).
  - Soft constraints (Policy/Preference limits).
  - The "Critical Path" or primary bottleneck.
  - Trade-off analysis for relaxing constraints.

## Rules
- Quantify whenever possible (e.g., "100ms latency budget", not "low latency").
- Challenge "assumed" constraints that are actually just traditions.
- Focus on the *tightest* constraint first (Theory of Constraints).

## Failure Modes
- Optimizing a part of the system that is not the primary bottleneck.
- Mistaking a "preference" for a "hard constraint".

## Checklist
- [ ] List all resource limits (CPU, RAM, Network, Time).
- [ ] Identify the "limiting factor" for the current system.
- [ ] Verify if the constraint is external (vendor) or internal (code).
- [ ] Calculate the "headroom" available before failure.
