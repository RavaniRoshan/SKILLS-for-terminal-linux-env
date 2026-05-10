---
name: "shadcn/ui"
description: "Manages shadcn/ui components — adding, searching, fixing, debugging, styling, and composing UI."
---

# shadcn/ui Specialist

**Purpose**
Expert management of shadcn/ui components — from initial setup and component installation to customization, debugging, and composition into cohesive user interfaces. Provides deep knowledge of the component architecture, theming system, and Tailwind CSS integration.

**When to Activate This Skill**
- User asks to "add shadcn/ui" or "set up shadcn"
- Installing new components with `npx shadcn add`
- Customizing component themes or styles
- Debugging component rendering or behavior issues
- Creating custom components following shadcn/ui patterns
- Implementing form handling with shadcn form components
- Setting up dark/light mode theming
- Composing multiple components into complex UIs
- Updating components after shadcn/ui registry changes
- Troubleshooting Tailwind CSS configuration for shadcn
- Working with component primitives (Radix UI) underneath
- Implementing accessibility features with shadcn components

**Core Guidelines and Best Practices**
- Initialize with `npx shadcn@latest init` and select appropriate base color
- Install components individually: `npx shadcn add button dialog dropdown-menu`
- Components are copied to your codebase — fully customizable
- Modify component source in `components/ui/` without fear
- Use `cn()` utility (from `clsx` + `tailwind-merge`) for conditional classes
- Extend components via composition, not prop explosion
- Use `asChild` pattern for polymorphic component behavior
- Implement proper focus management with Dialog and DropdownMenu
- Use Form components with React Hook Form for validation
- Configure CSS variables in `globals.css` for theming
- Add animations with `tailwindcss-animate` plugin
- Use `data-[state=open]` attributes for state-based styling
- Implement Skeleton components for loading states
- Use Toast/Sonner for notifications with proper accessibility
- Create compound component patterns (Tabs, Accordion) for complex UIs
- Theme customization: modify `tailwind.config.ts` and CSS variables
- Support for custom registries via `components.json`
- Use `Command` component for command palette interfaces
- Implement proper z-index layering with overlays and dialogs

**Response Approach**
- Verify shadcn/ui initialization before suggesting components
- Check `components.json` for configuration context
- Provide complete installation commands with dependencies
- Show composition examples combining multiple components
- Include TypeScript types for all component props
- Suggest accessibility improvements (ARIA labels, focus traps)
- Reference official shadcn/ui documentation for latest patterns
- Offer theming customization when relevant

**Practical Examples**
- Creating a user profile dialog: Install `dialog`, `avatar`, `button` components, compose Dialog with DialogTrigger, DialogContent containing Avatar and user info, add DialogClose button, style with Tailwind classes, ensure focus trap and escape key handling work correctly
- Building a data table with sorting: Use `table` component as base, wrap with `dropdown-menu` for column actions, add `input` for filtering, implement `select` for row selection, compose sorting UI with `button` and arrow icons, ensure proper ARIA labels for screen readers

**Integration Notes**
- Requires Tailwind CSS skill for styling customization
- Works with React/Next.js for component implementation
- Integrates with React Hook Form for form validation
- Pairs with Next.js themes for dark/light mode
- Compatible with Radix UI primitives documentation
- Links to Vercel Deploy for UI demo deployments
