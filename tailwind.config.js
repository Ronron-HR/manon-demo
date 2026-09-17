/** Byg CSS: npx tailwindcss@3 -i src/tailwind.css -o css/site.css --minify */
module.exports = {
  content: ['./index.html'],
  safelist: ['flex', 'hidden'], // sættes fra JavaScript
  theme: {
    extend: {
      colors: { oliven: '#33382A', skov: '#1F221B', creme: '#F1ECDD', salvie: '#B9BB8E', lys: '#DCDCC0' },
      fontFamily: { display: ['"Cormorant Garamond"', 'Georgia', 'serif'], body: ['Karla', 'system-ui', 'sans-serif'] },
    },
  },
}
