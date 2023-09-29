import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      letterSpacing: {
        tightest: '-.0312px',
      },
      fontFamily: {
        outfit: 'Outfit'
      },
      fontSize: {
        small: '15px',
        medium: '24px',
        large: '32px',
      },
      fontWeight: {
        light: '300',
        regular: '500',
        bold: '700',
      },
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
