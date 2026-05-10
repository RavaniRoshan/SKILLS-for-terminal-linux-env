# PDF Knowledge Packaging

## Purpose
Generate professional, self-contained, and visually structured PDF documents that package complex research, reports, or documentation for offline reading or distribution.

## When to Use
- When delivering a final research report to a client.
- When creating "Cheat Sheets" or reference guides.
- When archiving a project's technical specifications.

## When NOT to Use
- For dynamic, frequently-changing documentation (use a web view).
- For simple text-only notes.

## Inputs
- Raw content (Markdown, images, data).
- Brand guidelines or layout preferences.

## Outputs
- Polished PDF document with:
  - Cover page & Table of Contents.
  - Structured sections & Typography.
  - Embedded charts, tables, and images.
  - Metadata and page numbering.

## Rules
- **Layout Fidelity**: Ensure the output looks consistent across different PDF readers.
- **Portability**: All assets (images, fonts) must be embedded or properly rendered.
- **Accessibility**: Include a proper heading hierarchy for screen readers.

## Failure Modes
- Broken layouts on multi-page tables.
- Low-resolution images that look blurry when printed.

## Checklist
- [ ] Verify the table of contents links correctly.
- [ ] Check page breaks for "widows and orphans" (dangling lines).
- [ ] Ensure all images have descriptive alt-text.
- [ ] Confirm typography is legible and consistently applied.
- [ ] Validate final file size is optimized for distribution.
