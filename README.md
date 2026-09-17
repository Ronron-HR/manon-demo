# manon-demo

Demo-side for Manon, vinbar i Frederiksgade 44, Aarhus.

Live: https://ronron-hr.github.io/manon-demo/

- Skrifttyper og CSS ligger lokalt (`fonts/`, `css/site.css`), så siden ikke er afhængig af Google Fonts eller Tailwind CDN.
- Ændrer du klasser i `index.html`, så byg CSS igen:
  `npx tailwindcss@3 -i src/tailwind.css -o css/site.css --minify`
- Test åben/lukket-status på et bestemt tidspunkt: `?tid=2026-09-19T23:30`
- Billeder: `img/2.jpg` (jazz) er fra @manon_aarhus på Instagram, de øvrige er pladsholdere fra Unsplash. Kortet er © OpenStreetMap.
- Farver følger Manons logo: oliven, salvie og creme (se `tailwind.config.js`).
