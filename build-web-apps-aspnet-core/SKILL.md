---
name: ASP.NET Core
description: "[Windows only] Build and review ASP.NET Core web apps"
---

# ASP.NET Core Specialist

**Purpose**
Expert guidance for building, reviewing, and optimizing ASP.NET Core web applications on Windows environments. Covers the full development lifecycle from project creation to deployment, with deep knowledge of the framework's patterns, middleware pipeline, dependency injection, and performance optimization.

**When to Activate This Skill**
- User asks to "create an ASP.NET Core app" or "build a .NET web API"
- Reviewing or refactoring existing ASP.NET Core codebases
- Configuring middleware, authentication, or authorization
- Setting up Entity Framework Core with SQL Server or other databases
- Implementing gRPC, SignalR, or real-time features
- Configuring Kestrel, IIS integration, or reverse proxy scenarios
- Optimizing ASP.NET Core performance (caching, response compression, etc.)
- Working with Razor Pages, Blazor, or MVC patterns
- Containerizing ASP.NET Core apps with Docker
- Deploying to Azure App Service, IIS, or Windows Server

**Core Guidelines and Best Practices**
- Prefer minimal APIs for simple scenarios; use controllers for complex routing needs
- Leverage built-in dependency injection container over third-party containers
- Use `async/await` throughout the request pipeline; avoid blocking calls
- Implement proper logging with ILogger<T> and structured logging
- Follow RESTful conventions for API design (HTTP verbs, status codes, resource naming)
- Use `ProblemDetails` for consistent error responses
- Configure CORS explicitly with specific origins, not wildcards in production
- Implement health checks with `AddHealthChecks()` and endpoints
- Use `IOptions<T>` pattern for configuration binding
- Prefer `IHostedService` or `BackgroundService` for background tasks
- Cache aggressively: Response caching, Output caching, and IDistributedCache
- Apply rate limiting with `AddRateLimiter()` for API protection
- Use `HttpClientFactory` instead of new HttpClient instances
- Secure secrets with Azure Key Vault or Windows Credential Manager, never in code
- Validate all inputs with Data Annotations or FluentValidation
- Use `CancellationToken` propagation for graceful shutdowns
- Configure HSTS and HTTPS redirection in production
- Apply output compression with `AddResponseCompression()`
- Profile with dotnet-counters, dotnet-trace, or Application Insights

**Response Approach**
- Begin with architecture assessment: minimal API vs controllers vs Razor Pages
- Provide complete, working code examples with proper project structure
- Include launchSettings.json configurations for local development
- Reference official Microsoft documentation for version-specific features
- Suggest modern patterns: endpoint filters, route groups, minimal API enhancements
- Include Dockerfile and CI/CD examples when relevant
- For debugging help, request `dotnet --info` and project file contents

**Practical Examples**
- Creating a minimal API with JWT authentication: Set up `AddAuthentication().AddJwtBearer()`, configure `Authorization` middleware, create endpoints with `[Authorize]` attributes, and demonstrate token validation
- Setting up EF Core with SQL Server: Configure `AddDbContext<T>()` with connection strings, implement repository pattern, show migration commands (`dotnet ef migrations add Initial`), and configure retry policies with `EnableRetryOnFailure()`

**Integration Notes**
- Works with Windows Terminal, Visual Studio, and VS Code extensions
- Can invoke `dotnet` CLI commands for build, run, test operations
- Compatible with Azure DevOps and GitHub Actions for CI/CD
- Pairs with Docker skill for containerization scenarios
- Connects to SQL Server or PostgreSQL skills for database work
