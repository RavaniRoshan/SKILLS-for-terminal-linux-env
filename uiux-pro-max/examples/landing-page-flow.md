# Landing Page Flow: Cinematic to Conversion

## Complete Flow Structure

### Section 1: Hook (Hero)

**Goal**: Immediate value proposition + visual differentiation

- Full viewport hero
- Single headline (max 5 words after verb)
- Supporting subhead (1 sentence)
- Primary CTA
- Secondary link
- Background: abstract motion or product demo

### Section 2: Tension (Problem)

**Goal**: Validate user frustration, establish stakes

- "You're not alone" social proof stat
- Enumerate pain points (3-5 items)
- Current solutions highlighted as inadequate
- Emotional resonance (image or quote)

### Section 3: Mechanism (How It Works)

**Goal**: "Aha!" moment → "That's how"

- Annotated product screenshot or demo video
- 3-step visual process
- Differentiation from competition (comparison table)
- Technical breakthrough explanation

### Section 4: Proof (Social Validation)

**Goal**: Reduce risk, increase trust

- Customer logos (well-known companies)
- Testimonial carousel with photos
- Quantitative results prominently displayed
- Awards/certifications
- Press mentions

### Section 5: Workflow (Product Demo)

**Goal**: Mental model construction

- Interactive tour (not video)
- Guided walkthrough with annotations
- Progressive reveal of features
- Simulated data entry/operation

### Section 6: Trust (Risk Reversal)

**Goal**: Remove final objections

- Security badges (SOC2, GDPR)
- Money-back guarantee
- Free trial emphasis
- Support quality indicators
- Team expertise highlights

### Section 7: Conversion (CTA)

**Goal**: Single, clear next step

- Prominent signup form or button
- Limited-time offer (if applicable)
- Trial length/price transparency
- What happens next explanation
- Final trust reinforcement

## Motion Flow

```jsx
// gsap timeline for entire page
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

// Hook section: slow zoom out
tl.from(".hero-bg", { scale: 1.2, duration: 2 }, 0)
  .from(".hero-title", { y: 100, opacity: 0, duration: 1.2 }, 0.2)
  .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 0.8 }, 0.6)

// Tension section: reveal from left
tl.from(".problem-section", { x: -100, opacity: 0, duration: 1.2 }, 1)
  .from(".pain-point", { x: -30, opacity: 0, stagger: 0.15, duration: 0.6 }, 1.2)

// Mechanism section: split reveal
tl.from(".mechanism-visual", { x: 100, opacity: 0, duration: 1.2 }, 2.4)
  .from(".mechanism-text", { x: -50, opacity: 0, duration: 1 }, 2.6)

// Continue pattern...

// Conversion section: scale emphasis
tl.from(".cta-card", { scale: 0.95, opacity: 0, duration: 0.8 }, 6)
  .from(".cta-card > *", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, 6.2)
```

## Content Density Guidelines

| Section | Word Count | Visual Density | Cognitive Load |
|---------|------------|----------------|----------------|
| Hook | 10-15 words | Low | Minimal |
| Tension | 100-150 words | Medium | Moderate |
| Mechanism | 150-200 words | High | Focused |
| Proof | 50-75 words | Low (logos) | Minimal |
| Workflow | 100-150 words | Interactive | Moderate |
| Trust | 75-100 words | Low | Minimal |
| Conversion | 30-50 words | Very Low | Minimal |

## Transition Patterns

**Narrative flow**: Scroll-triggered reveal, characters appear in reading order
**Scene duration**: Each section holds 2-3 screens of scroll
**Pacing acceleration**: Earlier sections slower, later sections faster
**Color evolution**: Dark → Light → Accent → Brand throughout page

## What Makes This "Cinematic"

- Hero establishes visual motif that recurs
- Each section has clear emotional purpose
- Motion reinforces narrative progression
- Information reveals in intended order
- Conversion feels earned, not asked

## Common Mistakes

- Feature lists instead of story
- Multiple CTAs competing
- Repetitive section layouts
- Generic stock photography
- Random motion without purpose
- Information dumps in later sections