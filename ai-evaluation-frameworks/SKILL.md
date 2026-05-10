# AI Evaluation Frameworks

## Purpose
Establish objective, reproducible metrics and test suites to measure the performance, safety, and reliability of AI agents and prompts.

## When to Use
- Before deploying a new prompt or model to production.
- When comparing the performance of different LLMs for a specific task.
- When regression testing an AI system after updates.

## When NOT to Use
- For subjective "vibe checks" during early exploration.

## Inputs
- The AI system/prompt under test.
- A dataset of inputs and "Gold Standard" (Expected) outputs.

## Outputs
- Evaluation report:
  - Accuracy/F1 scores.
  - Safety/Bias violations.
  - Latency and cost analysis.
  - Specific failure case analysis.

## Rules
- **Automate the Eval**: Use an "LLM-as-a-judge" or deterministic checks where possible.
- **Diverse Dataset**: Include edge cases, adversarial inputs, and varied lengths.
- **Version Everything**: Track evals against specific model versions and prompt IDs.

## Failure Modes
- "Overfitting" the prompt to a small evaluation set.
- Using a judge model that is less capable than the model being tested.

## Checklist
- [ ] Define success/failure criteria for the task.
- [ ] Assemble a representative test set.
- [ ] Run the eval across multiple temperatures/seeds.
- [ ] Analyze the "False Positives" and "False Negatives".
- [ ] Document the baseline performance for future comparison.
