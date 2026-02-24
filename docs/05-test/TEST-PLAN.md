---
project: AncestorTree
path: docs/05-test/TEST-PLAN.md
type: test
version: 1.0.0
updated: 2026-02-24
owner: "@tester"
status: draft
---

# Test Plan

## Overview

This document outlines the testing strategy for AncestorTree.

## Test Categories

### 1. Unit Tests
- Component rendering
- Utility functions
- Form validation

### 2. Integration Tests  
- API integration with Supabase
- Authentication flow
- Data fetching

### 3. E2E Tests
- User registration/login
- Tree navigation
- Member CRUD operations

## Test Checklist

### Frontend
- [ ] Build passes (`pnpm build`)
- [ ] Dev server runs (`pnpm dev`)
- [ ] All pages render (/, /login, /register, /tree, /people)
- [ ] Sidebar navigation works
- [ ] Mobile responsive
- [ ] Form validation

### Authentication
- [ ] Registration form
- [ ] Login form
- [ ] Session persistence
- [ ] Protected routes

### Tree View (Sprint 2)
- [ ] Tree rendering
- [ ] Node interaction
- [ ] Zoom/pan controls

## Tools

- **Framework:** Vitest
- **E2E:** Playwright
- **Coverage:** V8

## Running Tests

```bash
cd frontend
pnpm test          # Unit tests
pnpm test:e2e      # E2E tests
pnpm test:coverage # With coverage
```
