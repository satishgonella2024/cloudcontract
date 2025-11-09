# Repository Guidelines

## Project Structure & Module Organization
- `src/components` holds shadcn-inspired UI primitives and layouts; compose pages by importing from here instead of duplicating Tailwind utility stacks.
- `src/pages` defines router targets; each page wires data hooks from `src/lib` and `src/hooks`.
- `src/assets` stores reusable imagery and icons, while `public/` contains static files served verbatim (favicons, robots.txt).
- Styling comes from `src/index.css`, Tailwind tokens in `tailwind.config.ts`, and component-scoped tweaks in `App.css`.

## Build, Test, and Development Commands
- `npm run dev` launches Vite with React Fast Refresh on `http://localhost:5173`.
- `npm run build` emits the optimized production bundle into `dist/`.
- `npm run build:dev` is helpful for validating non-minified builds during staging reviews.
- `npm run preview` serves the latest build locally to verify deployment artifacts.
- `npm run lint` runs ESLint (typescript-eslint + React Hooks + Refresh) across the repo.

## Coding Style & Naming Conventions
- Use TypeScript everywhere; prefer functional React components with explicit prop types.
- Follow Tailwind utility ordering from largest layout classes to smallest cosmetic tweaks; extract repeated patterns into `cn()` helpers inside `src/lib`.
- Components, hooks, and util files use PascalCase (`CloudHero.tsx`), camelCase exports, and kebab-case asset names.
- Keep imports grouped: React/3rd party, local aliases, and relative assets.

## Testing Guidelines
- No automated tests exist yet; when adding them prefer Vitest + React Testing Library colocated next to the component (`FeatureCard.test.tsx`).
- Name describe blocks after user-facing behavior and keep assertions deterministic (mock timers/network via msw).
- Use `npm run test -- --runInBand` once test tooling is added to ensure CI parity.

## Commit & Pull Request Guidelines
- Follow the existing history: short (<60 char) imperative subjects such as `Update layout spacing` and optional body wrapping at 72 chars.
- Scope commits to a single concern (e.g., asset update, copy change) so reviewers can cherry-pick easily.
- PRs should include: summary, before/after screenshots for UI work, reproduction steps for bug fixes, and linked issue numbers using `Fixes #ID`.
- Ensure lint/build checks pass locally before requesting review; include `npm run lint && npm run build` output when posting PR updates.
