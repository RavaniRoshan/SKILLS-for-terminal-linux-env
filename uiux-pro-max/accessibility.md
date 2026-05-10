# Accessibility Standards

## Core Principles

Accessibility is mandatory, not optional. Every interface must be:

- **Perceivable**: Information presentable in multiple ways
- **Operable**: Usable via keyboard and assistive tech
- **Understandable**: Content readable and predictable
- **Robust**: Compatible with current and future tools

## Implementation Checklist

### Semantic HTML
- ✅ Proper heading hierarchy (h1 → h2 → h3, no skipping)
- ✅ Landmark elements (`<main>`, `<nav>`, `<header>`, `<footer>`)
- ✅ Lists for list items (`<ul>`, `<ol>`, `<dl>`)
- ✅ Buttons (`<button>`), not `<div>` with click handlers
- ✅ Links (`<a>`), not `<div>` with onclick

### Keyboard Navigation
- ✅ All interactive elements focusable
- ✅ Visible focus indicator (not `outline: none`)
- ✅ Logical tab order (DOM order)
- ✅ No keyboard traps
- ✅ Skip links for long pages

### Color & Contrast
- ✅ Text/background contrast ratio ≥ 4.5:1
- ✅ Large text (≥18pt or 14pt bold) ≥ 3:1
- ✅ Non-text elements (icons, borders) ≥ 3:1
- ✅ Don't rely on color alone for meaning

### Forms
- ✅ Every input has associated `<label>`
- ✅ Grouped inputs have `<fieldset>` + `<legend>`
- ✅ Error messages programmatically associated
- ✅ Required fields marked with `aria-required`
- ✅ Autocomplete attributes present

### Images & Media
- ✅ Decorative images: `alt=""`
- ✅ Meaningful images: descriptive `alt` text
- ✅ Complex images: long description or adjacent text
- ✅ Videos: captions, transcripts
- ✅ Audio: transcripts

### ARIA Usage

Only when semantic HTML insufficient:

```jsx
// ❌ Don't
<div role="button" tabIndex="0">Click me</div>

// ✅ Do
<button>Click me</button>

// ✅ When needed
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
>
  <h2 id="dialog-title">Confirm Action</h2>
</div>
```

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For JS animations:

```js
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Skip animations, use instant transitions
  motionConfig.transition = { duration: 0 };
}
```

## Screen Reader Testing

- NVDA (Windows)
- VoiceOver (macOS/iOS)
- JAWS (legacy Windows)
- Chrome DevTools Lighthouse
- axe DevTools browser extension

## Common Failures

```jsx
// ❌ Missing label
<input type="email" placeholder="Email" />

// ✅ With label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ❌ No focus management for modal
<div className="modal">...</div>

// ✅ Focus trap + return focus
useEffect(() => {
  const focusable = modalRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  focusable[0].focus();
  return () => previousFocus?.focus();
}, []);
```

## Testing Automation

- Jest-axe for unit tests
- Cypress-axe for E2E
- Lighthouse CI in pull requests
- Manual keyboard-only testing sprint

## Accessibility Score Targets

- WCAG 2.1 AA compliance
- axe-core violations: 0
- Lighthouse accessibility: 100
- Keyboard navigation: 100% coverage

## Resources

- WCAG 2.1 Guidelines
- ARIA Authoring Practices
- React Aria / Reach UI patterns
- NVDA/VoiceOver documentation