# Christmas Shop

A festive, responsive gift storefront built with Vite and TypeScript. The project includes a home page, a filterable gift catalogue, bilingual content, and light/dark themes.

## Features

- **Home page** with a seasonal hero, decorative snowfall, an about section, featured gifts, and a New Year countdown.
- **Gift catalogue** with category filters and a gift-details dialog.
- **Responsive layouts** for desktop, tablet, and mobile screens.
- **Mobile navigation** with an animated menu toggle and an accessible expanded state.
- **Two languages:** Russian and English.
- **Light and dark themes** with persistent user preferences.
- **Accessible interactions**, including keyboard-friendly controls, dialog dismissal, and reduced-motion support.
- **Image loading optimizations**, including native lazy loading for below-the-fold images.

## Tech stack

- [Vite 7](https://vite.dev/) — development server and production bundler.
- [TypeScript 5.9](https://www.typescriptlang.org/) — strict type checking.
- Modern CSS — responsive layouts, theme variables, and motion preferences.
- Native browser APIs — HTML dialog, local storage, and DOM events.

The app does not use a runtime UI framework or component library.

## Requirements

- Node.js **20.19+** or **22.12+**
- npm

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/artkoro94/christmas-shop.git
cd christmas-shop
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal (usually http://localhost:5173/).

The main pages are:

- Home: `/`
- Gift catalogue: `/gifts/`

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run check` | Run TypeScript type checking without emitting files. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create an optimized production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run format` | Format project files with Prettier. |

Run the quality checks and build before submitting changes:

```bash
npm run check
npm run lint
npm run build
```

The production build is generated in `dist/`.

## Project structure

```text
.
├── gifts/
│   └── index.html       # Catalogue page entry
├── src/
│   ├── main.ts          # App rendering, content, and interactions
│   └── styles.css       # Shared styles, themes, and responsive layouts
├── index.html           # Home page entry
├── vite.config.ts       # Vite and deployment base configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.js     # ESLint configuration
└── package.json
```

## Deployment

The Vite configuration uses `/christmas-shop/` as the base path for GitHub Pages.

To deploy with GitHub Pages:

1. Run `npm run build`.
2. Configure the Pages deployment to publish the generated `dist/` directory.
3. Make sure the deployment URL uses the `/christmas-shop/` repository path.

For a different hosting path or a custom domain, update the `base` option in `vite.config.ts` to match the target URL.

## Performance notes

- Vite bundles and minifies the app for production.
- The project ships without a runtime framework.
- Images below the fold use native lazy loading.
- Both pages share a single TypeScript entry point and stylesheet.
- Responsive image sizing uses intrinsic dimensions and `object-fit` to reduce layout inconsistencies.

The original visual assets are retained. Converting suitable images to modern formats such as WebP or AVIF and reviewing their file sizes are possible follow-up optimizations.
