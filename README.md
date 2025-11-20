# Tick-Tac-Toe-trivial-app

A small React + Vite tic-tac-toe starter project. This README explains how to set up and run the repository locally on your machine.

## Requirements

- Node.js (recommended v18 or newer)
- npm (comes with Node) or an alternative package manager (yarn, pnpm)

## Quick start (localhost)

1. Install dependencies

```bash
# using npm
npm install

# or using pnpm
pnpm install

# or using yarn
yarn install
```

2. Start the dev server

```bash
npm run dev
```

Vite will start and show a local dev server address, typically http://localhost:5173. Open that address in your browser to view the app.

## Available scripts

These scripts are defined in `package.json`:

- `npm run dev` — start the Vite development server (hot module replacement enabled).
- `npm run build` — build a production bundle into the `dist/` directory.
- `npm run preview` — preview the production build locally (after `npm run build`).
- `npm run lint` — run ESLint on the project files (`.js`, `.jsx`).

## Project structure (important files)

- `index.html` — Vite entry HTML.
- `src/index.jsx` — React entry file.
- `src/App.jsx` — main App component.
- `src/components/` — UI components (includes `player.jsx` and `player.md`).
- `index.css` — global styles.

## Notes and recommendations

- Node version: If you run into unexpected dependency issues, use Node.js 18+ and update package manager if necessary.
- React version: This project depends on React 19 (see `package.json`). Ensure you have compatible tooling/plugins.
- Console logging: Some components (for example `src/components/player.jsx`) may contain `console.log` statements used for development.

## Adding environment variables

Vite supports `.env` files. Create `.env` at the project root with variables prefixed by `VITE_` to expose them to client-side code.

Example:

```
VITE_API_BASE=https://example.com/api
```

Access in code: `import.meta.env.VITE_API_BASE`

## Troubleshooting

- If `npm run dev` fails with dependency errors:
  - Remove `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`.
  - Try using a different package manager (pnpm often avoids some dependency resolution issues): `pnpm install`.
- If the dev server starts but the page is blank:
  - Open browser console to check runtime errors.
  - Ensure `src/index.jsx` mounts the app to an element that exists in `index.html`.

## Linting

Run ESLint with:

```bash
npm run lint
```

Fix issues or follow the messages printed by ESLint.

## Building and previewing production

```bash
# build
npm run build

# preview the production build after building
npm run preview
```

## Contributions and notes

This is a small starter app. If you want to extend it:

- Add tests (Jest + React Testing Library).
- Wire up a parent-managed state for players instead of local state inside `Player`.
- Add CI checks for lint and build.

---

If you'd like, I can also:

- Add tests for `src/components/player.jsx` (React Testing Library).
- Add an `onNameSave` callback to the `Player` component and wire a parent example.
- Create a short CONTRIBUTING.md or PR checklist.
