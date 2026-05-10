# Frontend Standards

## Technology Stack

**Primary:**
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP

**Supporting:**
- Motion One (lightweight animations)
- Lenis (smooth scrolling)
- Three.js (only for actual 3D needs)

## Performance Discipline

### Rendering Pipeline

Optimize for 60fps:

1. **Layout stability**
   - Reserve space for dynamic content
   - Use skeleton loaders
   - Avoid layout thrashing

2. **GPU acceleration**
   ```css
   .transform-element {
     transform: translateZ(0);
     will-change: transform, opacity;
   }
   ```

3. **Composited layers**
   - Animate `transform` and `opacity` only
   - Avoid `top`, `left`, `width`, `height` animations
   - Use `position: sticky` for scroll effects

4. **Code splitting**
   - Dynamic imports for heavy components
   - Route-based splitting automatic
   - Component-level lazy loading

### Bundle Size Targets

- Total JS: < 200KB gzipped for initial load
- Critical CSS inlined
- Non-critical CSS deferred
- Images: WebP/AVIF with fallbacks

## Accessibility Enforcement

### Semantic HTML

```jsx
// Use proper hierarchy
<main>
  <article>
    <h1>Title</h1>
    <section aria-labelledby="section-title">
      <h2 id="section-title">Section</h2>
      <!-- Content -->
    </section>
  </article>
</main>
```

### Keyboard Navigation

- All interactions keyboard-accessible
- Visible focus indicators (2px solid #000 or white)
- Logical tab order (DOM order)
- Skip links for long pages

### Reduced Motion

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

## Responsive Design

- Mobile-first breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

- Fluid typography: `clamp()` function
- Container queries when appropriate
- Touch targets: minimum 44×44px

## Code Quality

- ESLint + Prettier
- Component exports named, not default
- Props interfaces always defined
- No `any` types
- Error boundaries for client components
- Server components by default

## Testing Requirements

- Visual regression tests for critical paths
- Accessibility audit integration
- Performance budgets enforced
- Cross-browser testing (Safari, Chrome, Firefox)
- Lighthouse score > 90 all categories

## Development Workflow

1. Design review before implementation
2. Component isolation for complex interactions
3. Motion timing validated with design team
4. Accessibility audit pre-merge
5. Performance profiling on both mobile and desktop
6. Bundle analysis to detect bloat

## Image Strategy

- Next.js Image component always
- Responsive sizes attribute
- Proper priority loading for above-fold
- Blur-up placeholder for subjective quality
- WebP primary, JPEG fallback
- Icons as SVG sprites or inline