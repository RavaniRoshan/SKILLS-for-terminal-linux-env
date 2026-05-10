# Interaction Patterns

## Interaction Philosophy

Interactions should feel:

- **Immediate**: Response within 50ms
- **Precise**: What user intended, exactly
- **Physically coherent**: Forces feel natural
- **Intentional**: Every motion has purpose

## Spring Systems

Use spring animations for organic feel:

```jsx
import { spring } from 'motion'

// Custom spring configuration
const crispSpring = {
  stiffness: 500,
  damping: 35,
  mass: 1
};

const smoothSpring = {
  stiffness: 200,
  damping: 25,
  mass: 1
};

<motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", ...crispSpring }}
/>
```

## Hover Anticipation

Elements should indicate interactivity before activation:

- Subtle scale: `1.02` (not 1.1)
- Opacity shift: `0.95` → `1`
- Shadow depth change
- Cursor: pointer (not hand emoji)

Timing:
- Hover enter: 180ms
- Hover leave: 200ms
- No delay on touch devices

## Shared Transitions

Route transitions maintain UI state:

```jsx
// Layout component
export default function RootLayout({ children }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Page component
export default function Page() {
  const { isLoaded } = useViewportAnimation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Content */}
      </motion.div>
    </AnimatePresence>
  );
}
```

## Form Interactions

- Input focus: border color shift + subtle scale
- Character counting: appears after 80% of max
- Validation: real-time but gentle (no errors on first keystroke)
- Submit: loading state with skeleton inside button

## Loading States

- Skeleton screens, not spinners
- Progressive content reveal
- Predictive fetching based on user path
- Skeleton matches actual content structure
- Shimmer effect, not flashing

## Temporal Consistency

Same interaction uses same timing everywhere:

- Button click → same animation duration
- Menu open → same ease curve
- Modal transition → consistent overlay timing

Create a motion token system:

```js
// motion-tokens.js
export const motion = {
  micro: { duration: 0.14, ease: "ease-out" },
  standard: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  slow: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  cinematic: { duration: 1.2, ease: "power2.inOut" }
};
```

## What to Avoid

- Random or unpredictable timing
- Bouncy springs for non-tactile objects
- Hover effects on mobile (touch doesn't hover)
- Animations longer than 1.6s unless narrative
- Disabling user preferences (prefers-reduced-motion)
- Flickering, flashing, or seizure-inducing effects