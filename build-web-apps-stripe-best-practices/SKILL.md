---
name: "Build Web Apps:stripe Best Practices"
description: "Guides Stripe integration decisions — API selection (Checkout Sessions vs PaymentIntents), Connect platform setup (Accounts v2, controller properties), billing/subscriptions, Treasury financial accounts, integration surfaces (Checkout, Payment Element), and migrating from deprecated Stripe APIs. Use when building, modifying, or reviewing any Stripe integration — including accepting payments, building marketplaces, integrating Stripe, processing payments, setting up subscriptions, or creating connected accounts."
---

# Stripe Best Practices Specialist

**Purpose**
Expert guidance for implementing Stripe payment processing, from simple one-time payments to complex marketplace platforms with Connect, subscriptions, and Treasury. Ensures secure, compliant, and optimized payment flows with proper API selection and modern integration patterns.

**When to Activate This Skill**
- User wants to "accept payments" or "integrate Stripe"
- Building subscription billing with Stripe Billing
- Setting up Stripe Connect for marketplace platforms
- Choosing between Checkout Sessions vs PaymentIntents
- Working with Stripe Treasury for financial accounts
- Migrating from deprecated Stripe APIs (legacy charges, sources)
- Implementing the Payment Element vs Embedded Checkout
- Creating connected accounts with controller properties
- Setting up webhook handlers for Stripe events
- Configuring Stripe Tax for automatic tax calculation
- Implementing Stripe Identity for verification
- Working with Stripe Issuing for card programs
- Reviewing existing Stripe integration for best practices

**Core Guidelines and Best Practices**
- Prefer Checkout Sessions for most use cases; simpler and PCI-compliant
- Use PaymentIntents only when you need full control over the payment UI
- Always verify webhooks with signature validation using `stripe.webhooks.constructEvent()`
- Store `stripeCustomerId` in your database; never store full card details
- Use idempotency keys for mutation requests to prevent duplicates
- Implement webhook event handlers idempotently (check event ID)
- Use Stripe Tax for automatic tax calculation (compliance critical)
- Configure Connect webhook endpoints separately from account webhooks
- Use `controller: {losses: {payments: 'application'}, stripe_dashboard: 'full'}` for platforms
- Implement proper error handling with try/catch and Stripe error types
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/webhook`
- Use test clocks for subscription testing to manipulate time
- Implement customer portal for self-service subscription management
- Use Payment Links for no-code payment collection
- Configure 3D Secure and SCA exemptions properly for EU compliance
- Use Stripe Elements for PCI-compliant custom forms
- Implement Radar for fraud detection and prevention
- Cache product/price objects locally; don't fetch on every request
- Use Stripe.js loaded from CDN with proper CSP configuration
- Implement proper logging for debugging webhook issues

**Response Approach**
- Ask about business model before recommending APIs (one-time vs subscription vs marketplace)
- Provide complete server-side and client-side code examples
- Include webhook verification code in all examples
- Reference latest Stripe API version (check compatibility)
- Suggest testing with Stripe CLI before production
- Include error handling patterns for all Stripe operations
- Mention PCI compliance requirements when relevant

**Practical Examples**
- Implementing subscription checkout: Create Stripe Customer, set up Price object with recurring billing, create Checkout Session with `mode: 'subscription'`, redirect customer to Stripe, handle `checkout.session.completed` webhook to provision access, implement customer portal for management
- Building a marketplace with Connect: Create connected account with `type: 'express'` or `'custom'`, configure controller properties for platform control, implement `onboarding` links, create transfers with `transfer_data[destination]`, handle `account.updated` webhooks for verification status

**Integration Notes**
- Pairs with Next.js/Vercel for server-side API routes
- Works with React for Stripe Elements integration
- Connects to database skills for customer/subscription persistence
- Links to Vercel for webhook endpoint deployment
- Compatible with Supabase/Prisma for data layer
- Requires secure environment variable management
