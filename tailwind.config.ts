import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./apps/**/*.{ts,tsx}",          // All your apps
    "./packages/**/*.{ts,tsx}" // All packages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config