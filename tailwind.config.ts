import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
          light: '#f87171',
        },
        ink: '#0f172a',
        muted: '#64748b',
        dark: {
          DEFAULT: '#1e293b',
          deep: '#0f172a',
          card: '#334155',
        },
        accent: {
          green: '#22c55e',
          teal: '#14b8a6',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
