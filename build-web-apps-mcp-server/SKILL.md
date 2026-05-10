---
name: "Cloudflare:building MCP Server On Cloudflare"
description: "Builds remote MCP (Model Context Protocol) servers on Cloudflare Workers with tools, OAuth authentication, and production deployment. Generates server code, configures auth providers, and deploys to Workers. Use when: user wants to 'build MCP server', 'create MCP tools', 'remote MCP', 'deploy MCP', add 'OAuth to MCP', or mentions Model Context Protocol on Cloudflare. Also triggers on 'MCP authentication' or 'MCP deployment'. Biases towards retrieval from Cloudflare docs over pre-trained knowledge."
---

# Building MCP Server On Cloudflare Specialist

**Purpose**
Production-ready Model Context Protocol (MCP) server development on Cloudflare Workers. Enables building remote MCP servers with tool definitions, OAuth 2.0 authentication, and global edge deployment—allowing AI assistants to securely access external APIs and services through standardized protocols.

**When to Activate This Skill**
- User wants to "build MCP server" or "create MCP server"
- Requests for "MCP tools" or "create MCP tools"
- Building "remote MCP" (as opposed to local/stdio MCP)
- Asking about "deploy MCP" on Cloudflare
- Need to add "OAuth to MCP" or "MCP authentication"
- Mention of "Model Context Protocol" with Cloudflare context
- Questions about "MCP deployment" on edge infrastructure
- Creating MCP servers for external API integration
- Building authenticated MCP tool servers
- Setting up MCP OAuth providers

**Core Guidelines and Best Practices**
- **Knowledge Bias**: Always prefer retrieval from official Cloudflare MCP documentation over pre-trained knowledge
- Implement MCP server using `@cloudflare/mcp` or official MCP SDK
- Use `McpAgent` class from Cloudflare's implementation
- Define tools with JSON Schema for type safety and validation
- Implement OAuth 2.0 for authentication: authorization code flow, PKCE
- Configure OAuth providers (GitHub, Google, etc.) via Cloudflare dashboard
- Store OAuth tokens securely; never expose in client-side code
- Use `wrangler.toml` with proper bindings for KV or D1 for token storage
- Implement proper CORS headers for MCP server endpoints
- Validate all tool inputs against JSON Schema definitions
- Return structured responses with proper MCP content types
- Handle errors with MCP-compliant error formats
- Use `ctx.waitUntil()` for async operations
- Implement rate limiting on tool endpoints
- Log authentication and tool invocation events
- Test with MCP Inspector or Claude Desktop before deployment
- Deploy with `wrangler deploy` for global edge distribution
- Configure custom domain for production MCP servers
- Monitor with Cloudflare Analytics and Workers Logs

**Response Approach**
- Always reference current Cloudflare MCP documentation first
- Provide complete MCP server implementation with TypeScript
- Include OAuth provider configuration steps
- Show tool definition patterns with JSON Schema
- Include authentication flow implementation
- Provide `wrangler.toml` with all necessary bindings
- Show testing procedures with MCP Inspector
- Include deployment and verification steps

**Practical Examples**
- Building a GitHub MCP server: Create McpAgent with OAuth to GitHub, define tools: `list_repos`, `get_issues`, `create_issue`, `get_pull_requests`, implement handlers using GitHub API with user token, validate inputs with JSON Schema, return formatted MCP responses, deploy to Workers with custom domain
- Creating a database query MCP server: Implement OAuth for admin approval, define `execute_query` tool with SQL validation, use D1 binding for safe parameterized queries, implement row limits and forbidden operations, log all queries for audit, return results as MCP text content

**Integration Notes**
- **Knowledge Bias**: Prioritize Cloudflare docs retrieval for MCP specifics
- Works with Cloudflare Workers for serverless deployment
- Integrates with Cloudflare KV for OAuth token storage
- Connects to Cloudflare Access for additional authentication layers
- Compatible with any MCP client (Claude Desktop, Claude Code, etc.)
- Links to OAuth providers (GitHub, Google, custom) for authentication
- Works with D1 for structured data if needed by tools
