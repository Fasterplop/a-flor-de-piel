/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'midnight': '#050505', // Fondo casi negro
				'blood': '#A80000',    // Rojo de las letras de la portada
				'gold': '#C5A059',     // Dorado para bordes/detalles
				'paper': '#E0D6C8',    // Blanco roto para textos largos
			},
			fontFamily: {
				'gothic': ['"Cinzel Decorative"', 'serif'], // Títulos mágicos
				'body': ['"Lato"', 'sans-serif'],           // Lectura limpia
			},
            keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
		},
	},
	plugins: [],
}