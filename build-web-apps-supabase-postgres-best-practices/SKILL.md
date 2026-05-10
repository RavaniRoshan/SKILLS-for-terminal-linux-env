---
name: "Build Web Apps:supabase Postgres Best Practices"
description: "Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations."
---

# Supabase Postgres Best Practices Specialist

**Purpose**
Expert guidance for writing high-performance PostgreSQL queries and designing optimal schemas specifically for Supabase. Covers query optimization, indexing strategies, Row Level Security (RLS), real-time subscriptions, and advanced PostgreSQL features available in the Supabase platform.

**When to Activate This Skill**
- Writing or reviewing PostgreSQL queries for Supabase
- Designing database schemas for new applications
- Optimizing slow queries or performance bottlenecks
- Configuring Row Level Security (RLS) policies
- Setting up real-time subscriptions with Supabase Realtime
- Working with PostgreSQL functions and triggers
- Implementing full-text search with PostgreSQL
- Configuring database connections and pooling
- Migrating data to/from Supabase
- Using Supabase Auth with database integration
- Implementing vector similarity search with pgvector
- Optimizing storage with buckets and file organization
- Working with PostgreSQL extensions (PostGIS, pg_stat_statements)

**Core Guidelines and Best Practices**
- Use connection pooling via Supabase client; don't create new connections per request
- Enable RLS on all tables by default; create specific policies for access patterns
- Write RLS policies that use `auth.uid()` and `auth.role()` for security
- Use `select('*', { count: 'exact' })` for pagination with total counts
- Create indexes on frequently queried columns; use partial indexes for filtered queries
- Use `explain analyze` to understand query execution plans
- Prefer `ilike` with `pg_trgm` extension for flexible text search
- Use `jsonb` over `json` for flexible schema with indexing support
- Implement soft deletes with `deleted_at` timestamps instead of hard deletes
- Use database functions for complex operations to reduce round-trips
- Configure Realtime filters to minimize payload size
- Use `supabase-js` with proper TypeScript generics for type safety
- Implement optimistic UI updates for better perceived performance
- Use `rpc()` for calling PostgreSQL functions with parameters
- Configure proper connection limits based on your plan
- Use `onConflict` for upsert operations instead of select-then-insert
- Enable `pg_stat_statements` extension for query performance monitoring
- Use transactions for multi-step operations with `supabase.rpc()`
- Implement proper error handling for database constraint violations
- Use `storage` API for file uploads with proper bucket policies

**Response Approach**
- Check for existing database schema before suggesting changes
- Provide SQL DDL with `create table`, `create index`, `create policy` statements
- Show Supabase JavaScript/TypeScript client code examples
- Include RLS policy examples for common access patterns
- Reference Supabase documentation for platform-specific features
- Explain query execution plans when optimizing performance
- Suggest indexing strategies based on query patterns

**Practical Examples**
- Optimizing a slow user search query: Add GIN index on `email` with `pg_trgm` extension, rewrite query to use `ilike` with `%${search}%` pattern, use `explain analyze` to verify index usage, consider full-text search with `to_tsvector` for complex search requirements
- Setting up RLS for multi-tenant app: Enable RLS on `projects` table, create policy `((select auth.uid()) = user_id)` for select/update/delete, create policy for inserts with ownership validation, test policies with `supabase.auth.signIn()` before deploying

**Integration Notes**
- Pairs with Next.js/React for frontend integration via supabase-js
- Works with TypeScript for generated database types
- Connects to Supabase Auth for authentication flows
- Links to Prisma for ORM-based database access
- Compatible with PostgreSQL documentation for advanced features
- Integrates with Supabase CLI for local development
