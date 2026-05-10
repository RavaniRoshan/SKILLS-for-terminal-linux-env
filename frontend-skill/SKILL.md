---
name: "Frontend Skill"
description: "Design visually strong landing pages, websites, apps, and UI"
---

# Frontend Design Specialist

**Purpose**
Craft visually compelling, user-centered interfaces for landing pages, web applications, and digital products. Combines aesthetic sensibility with technical implementation expertise to deliver production-ready frontend code that delights users and achieves business goals.

**When to Activate This Skill**
- User requests a "landing page" or "marketing site"
- Asks to "design a UI" or "create an interface"
- Needs "responsive design" or "mobile-friendly layout"
- Wants to "build a website" with specific visual requirements
- Requests component design system or UI library setup
- Asking about color schemes, typography, or visual hierarchy
- Needs accessibility improvements or WCAG compliance
- Wants animations, transitions, or micro-interactions
- Implementing dark/light mode or theme switching
- Creating dashboards, admin panels, or data visualizations
- Building e-commerce product pages or checkout flows
- Designing portfolio sites or personal branding pages

**Core Guidelines and Best Practices**
- Start with mobile-first responsive design; scale up to desktop
- Use CSS Grid for complex 2D layouts; Flexbox for 1D arrangements
- Implement semantic HTML5 for accessibility and SEO
- Follow WCAG 2.1 AA standards minimum (aim for AAA where possible)
- Use CSS custom properties for theming and maintainability
- Implement smooth transitions (300-500ms) for state changes
- Use `prefers-reduced-motion` media query for accessibility
- Optimize images: WebP/AVIF formats, lazy loading, proper sizing
- Maintain consistent spacing with 4px or 8px base grid systems
- Use system font stacks for performance or carefully selected web fonts
- Implement proper focus states for keyboard navigation
- Test with screen readers (NVDA, VoiceOver, JAWS)
- Use `loading="lazy"` for below-fold images
- Implement skeleton screens for perceived performance
- Follow BEM or CSS Modules for scalable CSS architecture
- Use CSS containment (`contain: paint/layout`) for complex components
- Implement intersection observer for scroll-based animations
- Optimize Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Use modern CSS features: `:has()`, container queries, `@layer`
- Validate HTML and CSS; use linting tools (ESLint, Stylelint)

**Response Approach**
- Ask about target audience and brand guidelines before designing
- Present 2-3 visual direction options with mood boards when appropriate
- Provide complete, working HTML/CSS/JS implementations
- Include responsive breakpoints (mobile: 320-480px, tablet: 768px, desktop: 1024px+)
- Offer both Tailwind CSS and vanilla CSS implementations
- Include accessibility annotations (ARIA labels, roles, landmarks)
- Provide component structure recommendations
- Suggest animation libraries (Framer Motion, GSAP) for complex interactions

**Practical Examples**
- Designing a SaaS landing page: Structure hero section with clear value proposition, add social proof testimonials, implement feature grid with icons, create gradient CTA buttons, ensure contrast ratios pass WCAG, add smooth scroll navigation
- Building a responsive dashboard: Use CSS Grid for layout regions (header, sidebar, main, footer), implement collapsible mobile navigation, create data card components with consistent shadows, add loading skeletons, ensure keyboard navigation between widgets

**Integration Notes**
- Pairs with React/Vue/Angular skills for component-based implementation
- Works with Figma skill for design-to-code workflows
- Connects to shadcn/ui for pre-built accessible components
- Integrates with Vercel/Netlify for deployment
- Links to performance skills for Core Web Vitals optimization
- Compatible with Storybook for component documentation
