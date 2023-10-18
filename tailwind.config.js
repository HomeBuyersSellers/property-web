/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '0.5': '0.125rem',   
        '1.5': '0.375rem',   
        '2.5': '0.625rem',   
      },
      colors:{
        'primary-color':'#7065f0'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      backgroundImage: {
        'hero-banner': "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
