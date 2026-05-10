# Research Paper Distillation

## Purpose
Rapidly extract core insights, methodology, and results from academic or technical papers while maintaining high fidelity to the original context.

## When to Use
- When reviewing a new ArXiv paper or technical report.
- When performing a literature review for a project.
- When needing to explain a complex algorithm or system to others.

## When NOT to Use
- For reading creative literature or fiction.
- For high-level news summaries where technical detail doesn't matter.

## Inputs
- PDF or raw text of a technical paper.
- Specific questions or areas of interest (optional).

## Outputs
- Structured distillation including:
  - The "One Sentence Hook" (What problem is solved?).
  - Core Methodology (How is it solved?).
  - Key Results & Benchmarks.
  - Limitations & Future Work.
  - Critical Review (What did they miss?).

## Rules
- Never hallucinate results; if a number is not in the paper, do not invent it.
- Distinguish between "author claims" and "proven results".
- Keep technical terminology intact but explain it briefly for clarity.

## Failure Modes
- Getting bogged down in minor details instead of the core contribution.
- Misinterpreting statistical significance or benchmark setups.

## Checklist
- [ ] Identify the primary problem statement.
- [ ] Map the architecture/algorithm changes.
- [ ] Extract the primary evaluation metric.
- [ ] Note the hardware/dataset constraints.
- [ ] Synthesize the "So What?" (Why does this paper matter?).
