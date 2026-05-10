---
name: "Build Web Apps:react Best Practices"
description: "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements."
---

# React Best Practices Specialist

**Purpose**
Expert guidance for writing high-performance, maintainable React and Next.js applications. Covers component architecture, rendering strategies, state management, data fetching patterns, and bundle optimization based on Vercel Engineering best practices.

**When to Activate This Skill**
- Writing new React components or Next.js pages
- Refactoring existing React code for performance
- Reviewing React/Next.js pull requests
- Optimizing bundle size and load times
- Configuring data fetching (Server Components, getServerSideProps, etc.)
- Implementing caching strategies with React
- Debugging re-render issues or performance bottlenecks
- Setting up Server Components vs Client Components
- Working with React Suspense and Error Boundaries
- Optimizing images with Next.js Image component
- Implementing streaming SSR or progressive hydration
- Using React Hooks effectively (useEffect, useMemo, useCallback)

**Core Guidelines and Best Practices**
- Default to Server Components; use Client Components only when needed (interactivity, browser APIs)
- Minimize "use client" directives; keep them as granular as possible
- Use `useMemo` and `useCallback` sparingly; React 18+ handles most optimizations automatically
- Prefer composition over props drilling; use Context or state management for deep data
- Keep components small and focused on single responsibilities
- Use React.memo only after profiling confirms re-render issues
- Implement proper loading states with Suspense boundaries
- Use Next.js Image component with priority for above-fold images
- Leverage Server Actions for mutations without API routes
- Configure `next/font` for optimized font loading
- Use `dynamic()` for code-splitting heavy components
- Implement proper Error Boundaries at route and component levels
- Use `cache()` for memoizing expensive computations in Server Components
- Configure `revalidate` for Incremental Static Regeneration (ISR)
- Use `unstable_cache` for fine-grained caching control
- Implement parallel data fetching with `Promise.all()`
- Prefer `fetch` with `next: { revalidate }` for API calls in Server Components
- Use route handlers for complex API logic instead of page handlers
- Configure `viewport` and `metadata` exports for SEO
- Leverage `draftMode` for preview deployments

**Response Approach**
- Analyze component tree for Server/Client Component boundaries
- Suggest performance optimizations with before/after comparisons
- Provide complete code examples with TypeScript types
- Include bundle analysis guidance (`@next/bundle-analyzer`)
- Recommend specific React 18/19 features when applicable
- Explain trade-offs between different approaches
- Reference Next.js documentation for framework-specific patterns
- Offer profiling techniques with React DevTools

**Practical Examples**
- Optimizing a product listing page: Convert to Server Components for data fetching, use `unstable_cache` for product queries, implement Suspense boundaries for filtering UI, code-split heavy product cards with `dynamic()`, add priority loading for hero image
- Fixing excessive re-renders: Profile with React DevTools Profiler, identify cause (prop changes, context updates), implement `React.memo` for expensive child components, use `useMemo` for computed values, lift state only when necessary

**Integration Notes**
- Pairs with Next.js skill for full-stack React applications
- Works with TypeScript skill for typed component props
- Connects to Tailwind CSS for styling implementations
- Links to Vercel Deploy for performance-optimized deployments
- Compatible with React Query/TanStack Query for client-side data fetching
- Integrates with React Hook Form for form handling
