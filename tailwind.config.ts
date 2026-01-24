import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        evolyn: {
          blue: '#0B3C5D',
          teal: '#1FA2B1',
          cyan: '#4AC7CF',
          green: '#3FAE4D',
          white: '#FFFFFF',
          navy: '#1A2233',
          charcoal: '#23272F',
        },
        // Gradients for backgrounds
        'gradient-blue-teal': 'linear-gradient(90deg, #1FA2B1 0%, #4AC7CF 100%)',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
