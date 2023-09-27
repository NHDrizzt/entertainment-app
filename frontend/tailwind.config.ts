import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'plus-jakarta': 'Plus Jakarta Sans'
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        semiDark: '#161D2F',
        darkBg: '#10141E',
        redTomato: "#FC4747",
        semiGray: '#5A698F',
      }
    },
  },
  plugins: [],
}
export default config
