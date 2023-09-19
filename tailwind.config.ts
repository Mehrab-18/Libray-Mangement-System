/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
        "custom-gray":"#4b4b50",
        white:'#fff',
        "custom-mobile-bg":"#e7ddc6",
        "custom-mobile-orange":"#c25b3c",
        "custom-offwhite":"#e7dcc6",
        "custom-brown":"#342923",
        "custom-alert-orange":"#D94638",
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
        '0': '0% 0%',
      }
    },
  },
  plugins: [],
};