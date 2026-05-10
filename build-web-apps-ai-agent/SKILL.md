---
name: "Cloudflare:building Ai Agent On Cloudflare"
description: "Builds AI agents on Cloudflare using the Agents SDK with state management, real-time WebSockets, scheduled tasks, tool integration, and chat capabilities. Generates production-ready agent code deployed to Workers. Use when: user wants to 'build an agent', 'AI agent', 'chat agent', 'stateful agent', mentions 'Agents SDK', needs 'real-time AI', 'WebSocket AI', or asks about agent 'state management', 'scheduled tasks', or 'tool calling'. Biases towards retrieval from Cloudflare docs over pre-trained knowledge."
---

# Building AI Agent On Cloudflare Specialist

**Purpose**
Production-ready AI agent development on Cloudflare's edge infrastructure using the Agents SDK. Enables building stateful, real-time agents with persistent memory, scheduled task execution, WebSocket communication, and tool integration—all deployed globally on Workers.

**When to Activate This Skill**
- User wants to "build an agent" or "create an AI agent"
- Requests for "chat agent" or "conversational AI"
- Building "stateful agent" with memory/persistence
- Mention of "Agents SDK" or Cloudflare agents
- Need for "real-time AI" or "WebSocket AI"
- Questions about agent "state management"
- Implementing "scheduled tasks" in agents
- Setting up "tool calling" or function calling in agents
- Creating multi-turn conversation systems
- Building autonomous AI systems on edge infrastructure
- Implementing agent scheduling or cron-like functionality
- Need for persistent agent memory across sessions

**Core Guidelines and Best Practices**
- **Knowledge Bias**: Always prefer retrieval from official Cloudflare Agents SDK documentation over pre-trained knowledge
- Use `Agent` class from `@cloudflare/agents` as base for all agents
- Implement state persistence with `this.setState()` and `this.getState()`
- Use SQLite via `this.sql()` for structured data storage within agents
- Implement WebSocket support with `onConnect()` and `onMessage()` handlers
- Schedule deferred tasks with `this.schedule(timestamp, callback)`
- Add tool capabilities with `this.addTool(name, schema, handler)`
- Use `this.ai()` for direct AI model access with streaming support
- Configure `wrangler.toml` with D1 database binding: `[[durable_objects.bindings]]` + `[[migrations]]`
- Set `compatibility_date` to ensure latest runtime features
- Use TypeScript with `@cloudflare/workers-types` for full type safety
- Implement proper error boundaries in agent methods
- Use `ctx.waitUntil()` for async operations after response
- Validate all user inputs before processing
- Implement rate limiting to control API costs
- Log agent activities with structured logging
- Handle WebSocket cleanup in `onClose()` method
- Use agent IDs (`this.id`) for unique identification
- Test thoroughly with `wrangler dev` before deployment

**Response Approach**
- Always reference current Cloudflare Agents SDK documentation first
- Provide complete, working agent class implementations
- Include full `wrangler.toml` with Durable Objects and D1 configuration
- Show state management patterns with practical examples
- Include WebSocket setup for real-time communication
- Demonstrate tool integration with proper schema definitions
- Show scheduled task implementation with error handling
- Include deployment commands and verification steps

**Practical Examples**
- Building a customer support agent: Create Agent subclass with conversation history state, implement `onMessage()` to receive queries, use `this.getState()` to load context, call `this.ai()` with system prompt + history, add tools for order lookup and FAQ retrieval, store updated history with `this.setState()`, return streaming response with citations
- Creating a data analysis agent with scheduling: Implement agent with `this.schedule('0 9 * * *', 'dailyReport')`, use `this.sql()` to query analytics database, process results with `this.ai()` for insights, generate summary, use tool to send email notification, handle errors with retry logic and alerting

**Integration Notes**
- **Knowledge Bias**: Prioritize Cloudflare docs retrieval for implementation details
- Works with Cloudflare Durable Objects for state management
- Integrates with D1 for SQLite database persistence
- Connects to Cloudflare AI Gateway for model routing
- Compatible with WebSocket APIs for real-time features
- Links to Cloudflare Workers for deployment and scaling
- Works with scheduled Workers for cron functionality
