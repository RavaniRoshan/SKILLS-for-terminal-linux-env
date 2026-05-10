# Motion System

## Motion Categories

### Environmental
Background elements that establish ambience.
- Subtle gradient shifts
- Noise grain texture
- Ambient lighting changes
- Particle systems (sparse)

### Structural
Layout transitions and hierarchical reveals.
- Section entrance/exit
- Accordion expansions
- Modal overlays
- Navigation state changes

### Interactive
Response to user actions.
- Button interactions
- Hover states
- Form field focus
- Drag feedback
- Loading states

### Narrative
Story-progressing animations.
- Timeline scrubbing
- Data visualization playback
- Step-by-step demo progression
- Scroll-triggered sequences

## Framer Motion Patterns

```jsx
// Motion variants for consistent timing
const motionConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
};

// Staggered reveals
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Layout animations
<motion.div layout layoutId="card" />
```

## GSAP Integration

```js
// Timeline orchestration
const tl = gsap.timeline({
  defaults: { ease: "power2.out", duration: 0.4 }
});

tl.from(".hero-title", { opacity: 0, y: 30 })
  .from(".hero-copy", { opacity: 0, y: 20 }, "-=0.2")
  .from(".hero-cta", { opacity: 0, scale: 0.95 }, "-=0.15");
```

## Lenis Scrolling

```js
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true
});

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
```

## Timing Standards

| Type | Duration | Ease |
|------|----------|------|
| Micro interaction | 120-180ms | spring(1, 200) |
| Standard element | 220-300ms | [0.16, 1, 0.3, 1] |
| Complex reveal | 400-600ms | [0.16, 1, 0.3, 1] |
| Narrative sequence | 700-1600ms | [0.16, 1, 0.3, 1] |

## Never Do

- Decorative flips
- Random bounces
- Infinite loops without purpose
- Animation for animation's sake
- Inconsistent timing scales