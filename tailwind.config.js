/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#19362D",
          "secondary": "#1F2937",
          "accent": "#BAC3C0",
          "ghost": "#CCCCCC",
          "info": "#B3D9B3"
        }
      },
      'cmyk', 'business'
    ]
  }
}

