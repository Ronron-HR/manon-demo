/** Byg CSS: npx tailwindcss@3 -i src/tailwind.css -o css/site.css --minify */
module.exports = {
  content: ['./index.html'],
  safelist: ['flex', 'hidden'], // sættes fra JavaScript
  theme: {
    extend: {
      colors: { bordeaux: '#4B1225', dyb: '#2A0B15', creme: '#F2E7D8', guld: '#C8A45D', rose: '#E3A6A1' },
      fontFamily: { display: ['"Cormorant Garamond"', 'Georgia', 'serif'], body: ['Karla', 'system-ui', 'sans-serif'] },
    },
  },
}
