import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      
      container: {
      //  center: true,
       padding: '10',
      },
    },
  },
  plugins: [],
}
export default config
