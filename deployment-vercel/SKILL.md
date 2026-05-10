---
name: "Build Web Apps:deploy to Vercel"
description: "Deploy applications and websites to Vercel. Use when the user requests deployment actions like 'deploy my app', 'deploy and give me the link', 'push this live', or 'create a preview deployment'."
---

# Deploy to Vercel Specialist

**Purpose**
Streamlined deployment of web applications, static sites, and full-stack frameworks to Vercel's edge network. Handles zero-configuration deployments, preview environments, custom domains, and production releases with automatic HTTPS, global CDN distribution, and instant rollbacks.

**When to Activate This Skill**
- User says "deploy my app" or "deploy this project"
- Requests to "push this live" or "create a preview deployment"
- Asks for "deployment link" or "preview URL"
- Wants to "deploy to production" or "go live"
- Needs environment variable configuration for deployment
- Wants to set up custom domains or subdomains
- Asking about Vercel deployment configuration
- Troubleshooting failed Vercel builds or deployments
- Setting up Git integration for automatic deployments
- Configuring build settings, framework presets, or output directories

**Core Guidelines and Best Practices**
- Always use `vercel` CLI for deployments: `vercel` (preview) or `vercel --prod` (production)
- Link projects first with `vercel link` to establish project association
- Use `vercel --yes` for non-interactive CI/CD environments
- Configure `vercel.json` for advanced routing, headers, redirects, and build settings
- Set environment variables with `vercel env add KEY` or via dashboard
- Use Preview Deployments for every Pull Request; they're free and instant
- Leverage Production Branch protection for critical deployments
- Configure `output: 'export'` for static sites; omit for SSR apps
- Use `vercel --target=production` explicitly for production pushes
- Set `NODE_VERSION` in env vars for specific Node.js versions
- Configure `installCommand`, `buildCommand`, `outputDirectory` in project settings if non-standard
- Use Vercel Functions for API routes; they auto-scale with zero config
- Enable Analytics and Speed Insights for production monitoring
- Configure Edge Middleware for request interception at the edge
- Use `vercel env pull .env.local` to sync env vars locally
- For monorepos, set Root Directory in project settings or use `vercel.json` configuration
- Always verify deployments with browser checks after deployment completes
- Rollback immediately with `vercel --rollback` if issues detected

**Response Approach**
- Check for existing `vercel.json` or `.vercel/` directory before deploying
- Verify git status and suggest committing uncommitted changes
- Guide through `vercel link` if project not yet associated
- Show deployment progress and final URL after completion
- Provide preview deployment URL for non-production pushes
- Include troubleshooting steps for common build failures
- Offer to set up custom domains if requested
- For CI/CD, provide GitHub Actions workflow examples

**Practical Examples**
- Deploying a Next.js app to preview: Run `vercel`, confirm build settings, share the generated `*.vercel.app` preview URL, and note that it updates with every git push to the branch
- Production deployment with custom domain: Use `vercel --prod`, configure domain in dashboard, add DNS records (A/AAAA for apex, CNAME for www), verify SSL auto-provisioning

**Integration Notes**
- Pairs with Git/GitHub skills for automatic deployments
- Works with Next.js, React, Vue, Svelte, Angular, and static site generators
- Integrates with Vercel Storage (Blob, KV, Postgres) for data persistence
- Connects to Vercel AI SDK for AI-powered applications
- Compatible with Turborepo for monorepo deployments
- Links to GitHub/GitLab/Bitbucket for Git-based workflows
