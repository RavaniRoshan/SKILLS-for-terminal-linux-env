# Performance Discipline

## Rendering Cost Model

Every visual effect has a cost. Prioritize:

### Tier 1 (Free)
- `transform: translate()` (GPU accelerated)
- `opacity` changes (composited)
- `filter: blur()` (GPU if small radius)

### Tier 2 (Moderate)
- `filter: drop-shadow()` (GPU but expensive)
- `transform: scale()` (GPU, affects layout size)
- `border-radius` changes (layout)

### Tier 3 (Expensive)
- `box-shadow` (CPU, affects layer creation)
- `backdrop-filter` (GPU but heavy)
- `clip-path` (may create new layer)
- Anything triggering `layout`/`reflow`

## Performance Checklist

### CSS
- ✅ Use `transform` and `opacity` for animations
- ✅ `will-change` sparingly (2-3 properties max)
- ✅ Avoid `box-shadow` on animated elements
- ✅ Use `contain: layout` for isolated components
- ✅ Minimize `filter` usage on scroll

### JavaScript
- ✅ Debounce/throttle scroll listeners
- ✅ `requestAnimationFrame` for visual updates
- ✅ Virtualize long lists (>50 items)
- ✅ Cancel unused promises/observers
- ✅ Memory leak detection in devtools

### Images
- ✅ `loading="lazy"` for below-fold
- ✅ Proper `sizes` attribute
- ✅ Responsive image sets (`srcset`)
- ✅ AVIF primary, WebP fallback
- ✅ Max width = display size

### Network
- ✅ HTTP/2 or HTTP/3
- ✅ Resource hints (`preload`, `prefetch`)
- ✅ Critical CSS inlined
- ✅ Non-critical CSS deferred

## Measurement Tools

- Chrome DevTools Performance panel
- WebPageTest for field metrics
- Lighthouse CI in CI/CD
- Core Web Vitals monitoring:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Common Anti-Patterns

```css
/* ❌ BAD: animates layout */
.element {
  transition: margin 0.3s ease;
}
.element.expanded {
  margin-left: 200px; /* triggers reflow */
}

/* ✅ GOOD: GPU accelerated */
.element {
  transition: transform 0.3s ease;
  will-change: transform;
}
.element.expanded {
  transform: translateX(200px); /* composited */
}
```

```js
// ❌ BAD: layout thrashing in loop
elements.forEach(el => {
  const height = el.offsetHeight; // forces reflow
  el.style.height = height + 10 + 'px';
});

// ✅ GOOD: batch reads then writes
const heights = elements.map(el => el.offsetHeight);
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px';
});
```

## FPS Budget

- 16.67ms budget per frame at 60fps
- Main thread work: < 8ms
- Compositor thread work: < 8ms

If you exceed budget → frame drop.

## Animation Best Practices

- Keep animated elements in their own layer
- Limit simultaneous animations to < 10
- Use `IntersectionObserver` to pause offscreen
- Stop animations when tab inactive
- Respect `prefers-reduced-motion`

## Three.js Policy

Only use when truly necessary:

- ✅ Product configurators (rotate, zoom)
- ✅ Data visualizations requiring 3D
- ✅ Interactive architectural/geographic views
- ❌ Not for background decoration
- ❌ Not for simple geometric shapes (use CSS)

Always lazy-load Three.js components.