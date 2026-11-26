# typescript-foundations

Building solid TypeScript foundations: write typed code, read compiler errors, and ship a small project.

## Covered so far

- Project setup with TypeScript, `tsx` and `@types/node`
- `tsconfig.json` with strict mode
- `.gitignore` and GitHub repo setup
- Part 1 (Basics): `tsc` and strict mode, primitive types, arrays, tuples, `any` vs `unknown`

## Currently learning

- Part 2 (Functions and Objects): typed parameters, optional and default params, object types, `type` vs `interface`

## Key points (quick revision)

### Part 1: Basics

- **`tsc` vs `tsx`**: `tsc` type-checks, `tsx` only runs the file (it won't catch type errors).
- **Strict mode**: `"strict": true` turns on all the strict checks, including `noImplicitAny` and `strictNullChecks`.
- **Type annotation**: telling TypeScript a value's type, `const age: number = 25;` (pattern: `name: type = value`).
- **Type inference**: TypeScript works the type out itself, so `let count = 0;` is already a `number`.
- **Primitives**: `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`. Always lowercase.
- **Arrays**: `number[]` or `Array<number>`, every item must be the same type.
- **Tuples**: fixed length and a fixed type per position, `[string, number]`. React's `useState` returns one.
- **`any` vs `unknown`**: `any` switches type checking off, `unknown` forces you to check the type before using the value. Prefer `unknown`.
- **Narrowing**: checking a type with `typeof`/`in`/`instanceof`. Required for `unknown`, optional (and unsafe to skip) for `any`.
- **Objects**: `any` lets you read any property unchecked (typos and missing fields crash at runtime), `unknown` needs `typeof` + `!== null` + `in` checks first.

## Run a file

```bash
npx tsx src/<folder>/<file>.ts
npm run check
```

`tsx` runs the file, and `npm run check` type-checks the project.
