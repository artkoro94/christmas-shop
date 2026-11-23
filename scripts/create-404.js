import { copyFileSync, mkdirSync } from 'node:fs';

copyFileSync('dist/index.html', 'dist/404.html');

mkdirSync('dist/gifts', { recursive: true });
copyFileSync('dist/index.html', 'dist/gifts/index.html');

console.log('GitHub Pages routes generated: /404.html and /gifts/index.html');
