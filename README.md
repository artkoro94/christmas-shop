# Christmas Shop

A responsive holiday gift storefront rebuilt with a lightweight modern frontend toolchain.

## Stack
- Vite 7
- TypeScript 5.9 (strict mode)
- Modern CSS with responsive layouts and reduced-motion support
- Native HTML dialog and browser APIs

## Features
- Refreshed home page with featured gifts and a New Year countdown
- Gift catalogue with functional category filters
- Accessible gift details dialog (Escape-to-close and focus management)
- Responsive navigation and layouts
- Native lazy loading for images below the fold
- GitHub Pages asset base path

## Development
Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run check
npm run lint
npm run build
npm run preview
```

Build output is generated in `dist/`. Configure GitHub Pages to deploy the `dist` directory.

## Performance
No runtime framework or component library is shipped. Vite bundles and minifies the TypeScript/CSS, images below the fold are lazy-loaded, and both pages share one app entry and stylesheet. Existing image assets are retained to preserve the visual identity; WebP/AVIF derivatives are the next step for further transfer-size reductions.