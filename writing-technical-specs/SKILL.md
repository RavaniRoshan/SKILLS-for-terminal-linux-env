# Writing: Technical Specifications

## Purpose
Draft clear, unambiguous, and comprehensive engineering requirements that bridge the gap between product intent and technical implementation.

## When to Use
- Before starting development on a significant feature or system.
- When proposing a new API or database schema.
- When collaborating with other engineers on a shared component.

## When NOT to Use
- For quick bug fixes or minor CSS tweaks.
- For high-level PRDs (use Product PRD Generation instead).

## Inputs
- Product requirements (PRD) or user stories.
- Architectural constraints.

## Outputs
- Technical Specification Document:
  - High-level design & Goals.
  - Detailed architecture/Schema.
  - API signatures (Endpoints, Request/Response).
  - Performance & Security considerations.
  - Implementation phases & Milestones.

## Rules
- **No Ambiguity**: Use "MUST", "SHOULD", and "MAY" (RFC 2119).
- **Include Edge Cases**: Explicitly define what happens in error states.
- **Diagrams**: Use Mermaid or ASCII diagrams for complex logic.

## Failure Modes
- "Hand-waving" over difficult technical details (e.g., "the sync will just work").
- Forgetting to define cross-service dependencies.

## Checklist
- [ ] Define the primary success metrics.
- [ ] List all required infrastructure changes.
- [ ] Map out the data model and migrations.
- [ ] Identify potential security risks (Auth/Privacy).
- [ ] Get "Buy-in" from stakeholders/peer engineers.
