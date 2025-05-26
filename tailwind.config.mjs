/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta de marca
        brand: {
          blue:  '#0556c3', // primario
          light: '#4a9af6', // hover/acento
          dark:  '#032962', // fondos oscuros
          black: '#000206', // casi negro
          white: '#ffffff', // texto sobre fondos oscuros
        },
      },
    },
  },
  plugins: [],
};
