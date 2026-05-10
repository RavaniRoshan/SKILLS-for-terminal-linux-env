---
name: "Agents SDK"
description: "Build stateful agents on Cloudflare Workers"
---

# Agents SDK Specialist

**Purpose**
Expert guidance for building AI-powered stateful agents on Cloudflare Workers using the Agents SDK. Covers agent lifecycle management, state persistence, scheduled tasks, WebSocket communication, and tool integration for production-ready autonomous systems.

**When to Activate This Skill**
- User wants to "build an agent" or "create an AI agent"
- Building stateful chatbots or conversational agents
- Implementing scheduled tasks with AI processing
- Creating real-time AI agents with WebSocket support
- Building tool-using agents with function calling
- Setting up agent state management and persistence
- Implementing multi-turn conversations with context
- Creating agents with database integration
- Building scheduled cron jobs with AI capabilities
- Implementing agent-to-agent communication

**Core Guidelines and Best Practices**
- Extend `Agent` class from `agents-sdk` for custom agent implementations
- Use `this.setState()` and `this.getState()` for persistent state management
- Implement `onRequest()` for HTTP API interactions
- Use `onConnect()` and `onMessage()` for WebSocket handling
- Schedule tasks with `this.schedule()` for deferred execution
- Use `this.sql()` for database queries within agents (SQLite via D1)
- Implement tools with `this.addTool()` for function calling
- Use `this.ai()` for direct AI model access with streaming support
- Keep agent state serializable (JSON-compatible)
- Handle errors gracefully with try/catch in agent methods
- Use TypeScript with `@cloudflare/workers-types` and `@cloudflare/agents`
- Configure `wrangler.toml` with D1 database binding for persistence
- Implement rate limiting to prevent excessive AI API calls
- Use `ctx.waitUntil()` for async operations after response
- Log agent activities for debugging and monitoring
- Implement proper cleanup in `onClose()` for WebSocket connections
- Use `this.id` for unique agent identification
- Schedule recurring tasks with cron expressions
- Validate all inputs before processing in agent methods
- Test agents locally with `wrangler dev` before deployment

**Response Approach**
- Start with agent architecture: state requirements, communication patterns, tools needed
- Provide complete agent class implementation with TypeScript
- Include `wrangler.toml` configuration with D1 binding
- Show both HTTP and WebSocket interaction patterns
- Include scheduled task examples with `this.schedule()`
- Demonstrate tool integration with `addTool()`
- Reference Cloudflare Agents SDK documentation

**Practical Examples**
- Building a chat agent with memory: Extend Agent class, implement `onMessage()` to handle user inputs, use `this.getState()` to retrieve conversation history, append new messages, call `this.ai()` with full context, store updated state with `this.setState()`, return streaming response
- Creating a scheduled data processing agent: Use `this.schedule('*/5 * * * *', 'processQueue')`, implement `processQueue()` method to fetch pending items from database, process with AI analysis, update records with results, handle errors and retry logic, log completion status

**Integration Notes**
- Pairs with Cloudflare Workers for deployment
- Works with D1 for SQLite persistence
- Connects to AI SDK for model integration
- Links to WebSocket APIs for real-time features
- Compatible with scheduled Workers for cron functionality
- Integrates with Cloudflare's edge network for global distribution
