---
project: AncestorTree
path: CLAUDE.md
type: agent-guidelines
version: 1.0.0
updated: 2024-02-24
---

# CLAUDE.md

This file provides guidance to AI assistants (Claude, GPT, etc.) when working with code in this repository.

## Project Overview

**AncestorTree** (Gia Phả Điện Tử) is a digital family tree management system for Chi tộc Đặng Đình, Thạch Lâm, Hà Tĩnh.

- **Repository:** https://github.com/Minh-Tam-Solution/AncestorTree
- **SDLC Tier:** LITE (5 stages)
- **Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Supabase

## SDLC Framework v6.1.0 - LITE Tier

This project follows MTS SDLC Framework with 5 stages:

```
docs/
├── 00-foundation/     # Vision, scope, requirements
├── 01-planning/       # Roadmap, sprints, milestones
├── 02-design/         # Architecture, UI/UX, data models
├── 04-build/          # Implementation guidelines
└── 05-test/           # Test plans, QA
```

**DO NOT** use generic 6-stage or 11-stage SDLC structure.
**ALWAYS** use the structure defined in `.sdlc-config.json`.

## File Header Standard

All documentation files MUST include YAML front matter:

```yaml
---
project: AncestorTree
path: docs/XX-stage/filename.md
type: document-type
version: X.X.X
updated: YYYY-MM-DD
owner: team/person
status: draft|review|approved
---
```

All code files MUST include header comment:

```typescript
/**
 * @project AncestorTree
 * @file src/path/to/file.ts
 * @description Brief description
 * @version 1.0.0
 * @updated 2024-02-24
 */
```

## Project Structure

```
AncestorTree/
├── docs/                    # SDLC Documentation
│   ├── 00-foundation/       # Vision, requirements
│   ├── 01-planning/         # Sprints, roadmap
│   ├── 02-design/           # Architecture, UI/UX
│   ├── 04-build/            # Implementation
│   └── 05-test/             # Testing
├── frontend/                # Next.js application
│   ├── src/app/             # App router (route groups)
│   │   ├── (auth)/          # Auth pages (login, register)
│   │   └── (main)/          # Main app with sidebar
│   ├── src/components/      # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── layout/          # Layout components
│   │   └── [feature]/       # Feature components
│   ├── src/lib/             # Utilities, Supabase client
│   ├── src/hooks/           # Custom React hooks
│   ├── src/types/           # TypeScript types
│   └── supabase/            # Database migrations
├── .sdlc-config.json        # SDLC configuration
├── CLAUDE.md                # AI assistant guidelines
└── README.md                # Project overview
```

## Development Commands

```bash
cd frontend

# Install dependencies
pnpm install

# Development
pnpm dev              # Start dev server (localhost:3000)

# Build & Test
pnpm build            # Production build
pnpm lint             # ESLint check
pnpm test             # Run tests (when configured)

# Type checking
pnpm tsc --noEmit     # TypeScript check
```

## Coding Conventions

### TypeScript
- Strict mode enabled
- Use explicit types (avoid `any`)
- Prefer interfaces over types for objects

### React/Next.js
- Use functional components with hooks
- Server Components by default, `'use client'` only when needed
- Use route groups: `(auth)` for public, `(main)` for authenticated

### Styling
- Tailwind CSS 4 with WindCSS
- shadcn/ui component library
- Mobile-first responsive design

### Naming
- **Files:** kebab-case (`user-profile.tsx`)
- **Components:** PascalCase (`UserProfile`)
- **Functions/vars:** camelCase (`getUserData`)
- **Constants:** SCREAMING_SNAKE (`MAX_RETRY_COUNT`)

## Git Workflow

### Commit Messages
Follow Conventional Commits:
```
feat: add family tree visualization
fix: resolve date picker timezone issue
docs: update API documentation
chore: upgrade dependencies
```

### Branch Naming
```
feature/tree-visualization
fix/auth-session-bug
docs/api-reference
chore/upgrade-deps
```

## Key Files Reference

| Purpose | Location |
|---------|----------|
| SDLC Config | `.sdlc-config.json` |
| Vision & Scope | `docs/00-foundation/VISION.md` |
| Business Requirements | `docs/01-planning/BRD.md` |
| Technical Design | `docs/02-design/technical-design.md` |
| Database Schema | `frontend/supabase/database-setup.sql` |
| Sprint Plan | `docs/04-build/SPRINT-PLAN.md` |
| Test Plan | `docs/05-test/TEST-PLAN.md` |

## Common Tasks

### Adding a New Page
1. Create page in appropriate route group (`(auth)` or `(main)`)
2. Add navigation link in `app-sidebar.tsx` if needed
3. Update `docs/02-design/ui-ux-design.md`

### Adding a Database Table
1. Add SQL to `frontend/supabase/database-setup.sql`
2. Update types in `src/types/index.ts`
3. Update `docs/02-design/technical-design.md`

### Adding a Component
1. Create in appropriate folder under `src/components/`
2. Use shadcn/ui primitives when possible
3. Add Storybook story (when configured)

## Notes for AI Assistants

- Always check `.sdlc-config.json` for project tier and stages
- Include proper file headers when creating/modifying files
- Follow existing code patterns in the codebase
- Run `pnpm build` to verify changes compile
- Update relevant documentation when making changes
- Use Vietnamese for user-facing content, English for code/comments
