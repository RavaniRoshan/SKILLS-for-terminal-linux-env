---
name: "Build Web Apps:web Design Guidelines"
description: "Review UI code for Web Interface Guidelines compliance. Use when asked to 'review my UI', 'check accessibility', 'audit design', 'review UX', or 'check my site against best practices'."
---

# Web Design Guidelines Specialist

**Purpose**
Comprehensive UI/UX auditing against modern web interface guidelines including WCAG accessibility standards, Apple's Human Interface Guidelines, Google's Material Design, and industry best practices. Ensures interfaces are usable, accessible, and visually polished.

**When to Activate This Skill**
- User asks to "review my UI" or "check my design"
- Requesting accessibility audits or WCAG compliance checks
- Asking to "audit UX" or review user experience
- Checking a site "against best practices"
- Reviewing color contrast and readability
- Validating form design and error handling
- Checking responsive design implementation
- Reviewing typography and visual hierarchy
- Auditing navigation patterns and information architecture
- Validating touch targets and mobile usability
- Checking loading states and error boundaries
- Reviewing micro-interactions and animations

**Core Guidelines and Best Practices**
- **Accessibility (WCAG 2.1 AA)**: Contrast ratios 4.5:1 normal text, 3:1 large text/UI components
- **Color**: Use semantic color (success, error, warning, info) consistently; don't rely on color alone
- **Typography**: Minimum 16px body text; maintain 1.5 line-height for readability
- **Touch Targets**: Minimum 44×44px for interactive elements (48×48px preferred)
- **Focus States**: Visible focus indicators with 2px+ outline or clear visual change
- **Forms**: Labels associated with inputs, inline validation, clear error messages
- **Navigation**: Consistent placement, visible current state, breadcrumb for deep pages
- **Loading**: Skeleton screens preferred over spinners; progress indicators for long operations
- **Errors**: Clear, actionable error messages; avoid technical jargon
- **Responsiveness**: Fluid layouts with breakpoints at 320px, 768px, 1024px, 1440px
- **Whitespace**: Generous padding (16px minimum) and consistent spacing (8px grid)
- **Consistency**: Reuse patterns; maintain design system across all screens
- **Performance**: Fast perceived load times; optimize for Core Web Vitals
- **Mobile-First**: Design for touch; consider thumb zones and reachability
- **Dark Mode**: Respect `prefers-color-scheme`; test both modes
- **Motion**: Respect `prefers-reduced-motion`; keep animations purposeful
- **Z-Index**: Managed layer system (modal: 1000, overlay: 900, dropdown: 800, etc.)
- **Iconography**: Consistent style; provide text labels where meaning isn't obvious
- **Empty States**: Helpful messaging and clear next steps
- **Feedback**: Immediate visual feedback for all interactions

**Response Approach**
- Review code systematically: structure → styling → interaction → accessibility
- Categorize findings as Critical/Warning/Note by impact
- Provide specific line references and suggested fixes
- Include before/after code examples for major issues
- Reference specific WCAG success criteria when relevant
- Offer prioritized action plan (quick wins vs major changes)
- Check in multiple contexts: desktop, mobile, keyboard, screen reader

**Practical Examples**
- Auditing a form page: Check label associations (WCAG 1.3.1), validate focus order is logical (WCAG 2.4.3), verify error messages are specific and actionable (WCAG 3.3.1), confirm submit button has clear visual state changes, check sufficient color contrast on placeholder text
- Reviewing a navigation component: Verify all items are keyboard accessible (Tab/Shift+Tab), check that dropdowns work with Enter and Escape keys, ensure current page is visually indicated and announced to screen readers, validate that mobile hamburger menu is large enough touch target

**Integration Notes**
- Pairs with Frontend skill for implementation fixes
- Works with React/Next.js for component-specific audits
- Connects to Lighthouse/axe-core for automated testing
- Links to Figma skill for design system alignment
- Compatible with shadcn/ui for accessible component patterns
- Integrates with Playwright for automated accessibility tests
