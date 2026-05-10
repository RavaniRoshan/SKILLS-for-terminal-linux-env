---
name: "Cloudflare Deploy"
description: "Deploy Workers, Pages, and platform services on Cloudflare"
---

# Cloudflare Deploy Specialist

**Purpose**
Streamlined deployment of applications to Cloudflare's edge network, including Workers (serverless functions), Pages (JAMstack hosting), and platform services like KV, Durable Objects, R2, and D1. Enables zero-configuration global deployments with automatic HTTPS and edge caching.

**When to Activate This Skill**
- User asks to "deploy to Cloudflare" or "deploy Workers"
- Setting up Cloudflare Pages for static/JAMstack sites
- Deploying Workers for API endpoints or edge functions
- Configuring wrangler for local development and deployment
- Setting up custom domains with Cloudflare DNS
- Deploying Durable Objects for stateful applications
- Configuring R2 for object storage
- Setting up KV for key-value storage
- Deploying D1 for edge SQLite databases
- Configuring Cloudflare Images or Stream
- Setting up Cron Triggers for scheduled Workers
- Deploying with Git integration for automatic deployments

**Core Guidelines and Best Practices**
- Use Wrangler CLI (`wrangler dev`, `wrangler deploy`) for all operations
- Configure `wrangler.toml` or `wrangler.jsonc` for project settings
- Use TypeScript with `@cloudflare/workers-types` for type safety
- Deploy Preview environments for every branch with `wrangler deploy --env staging`
- Use `wrangler secret put` for sensitive configuration; never commit secrets
- Configure `workers_dev = false` for custom domain deployments
- Use `routes` in wrangler config for custom routing patterns
- Enable `compatibility_date` to pin runtime behavior
- Use `main = "src/index.ts"` to specify entry point
- Configure `build` settings for framework projects (Next.js, React, Vue)
- Use `wrangler d1 migrations apply` for database schema changes
- Implement proper error handling with `addEventListener('fetch')`
- Use `ctx.waitUntil()` for async work after response
- Configure CORS headers explicitly for cross-origin requests
- Use `crypto.subtle` for cryptographic operations (Web Crypto API)
- Implement rate limiting at the edge with Workers
- Use Cache API for fine-grained caching control
- Configure Tail Workers for logging and observability
- Test locally with `wrangler dev` before deploying
- Use `wrangler tail` for real-time logs in development

**Response Approach**
- Check for existing `wrangler.toml` before creating new configurations
- Verify Cloudflare account authentication with `wrangler login`
- Provide complete wrangler configuration with all necessary bindings
- Include deployment commands and expected outputs
- Show how to set up custom domains with Cloudflare DNS
- Include environment variable setup with `wrangler secret`
- Reference Cloudflare documentation for latest features

**Practical Examples**
- Deploying a Next.js app to Pages: Run `wrangler pages project create`, configure `next.config.js` with `output: 'export'`, deploy with `wrangler pages deploy .output/static`, set custom domain in Cloudflare dashboard, configure build settings in Pages dashboard
- Deploying a Worker with Durable Object: Create `wrangler.toml` with `[[durable_objects.bindings]]` and `[[migrations]]`, implement DurableObject class with RPC methods, deploy with `wrangler deploy`, access via `env.MY_OBJECT.idFromName()` and `get()`

**Integration Notes**
- Pairs with TypeScript/JavaScript skills for Worker development
- Works with React/Next.js/Vue for framework deployments
- Connects to Cloudflare Durable Objects for stateful apps
- Links to R2/KV/D1 for data persistence
- Compatible with GitHub Actions for CI/CD
- Integrates with Cloudflare Images/Stream for media
