# Hero Sequence: Cinematic Entry

## Establishing Shot

Hero takes full viewport. Single focal point. Text minimal, impact maximal.

```jsx
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background: slow ambient motion */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: "power2.out" }}
        />
      </div>

      {/* Content: staged entrance */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <motion.div
          className="max-w-4xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Build cinematic interfaces
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-xl text-slate-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Elite UI/UX engineering standards. Motion architecture
            that tells stories. Product demos that feel alive.
          </motion.p>

          <motion.div
            className="mt-12 flex gap-4 justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Get Started
            </button>
            <button className="rounded-full border border-slate-400 px-8 py-4 font-semibold text-white hover:border-slate-300 transition-colors">
              View Examples
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional: scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <motion.path
            d="M12 5v14M19 12l-7 7-7-7"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}
```

## Timing Rationale

| Element | Delay | Duration | Purpose |
|---------|-------|----------|---------|
| Background scale | 0s | 2.4s | Establish depth, slow reveal |
| Title | 0.3s | 0.6s | First anchor point |
| Subtitle | 0.45s | 0.5s | Context building |
| Buttons | 0.6s | 0.4s | Action availability |
| Scroll indicator | 2.0s | 0.8s | Invite exploration |

## Accessibility Notes

- Hero heading is `<h1>` (page title)
- Buttons have clear text labels
- No auto-playing video or audio
- Reduced motion: skip staggered entrance, show all at once
- Ensure text contrast meets AA standards