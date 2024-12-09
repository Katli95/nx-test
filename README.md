# enforce-module-boundaries non-exported import repro

This repo provides a reproduction of an error related to the `@nx/enforce-module-boundaries` lint rule.

## Description

The repo has:

- Two packages
  - packages/cart
  - packages/utilities
- One tag rule allowing `cart` to import from `utilities`

## The issue

`cart` can import from `utilities/src/private/private.ts` via `@here/utilities/src/private/private` even though it's not explicitly exported from `packages/utilities/src/index.ts`

### `@nx/enforce-module-boundaries` correctly handles:

- Relative imports
- Imports breaking tag rules
