/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "sun-gradient-radial": "radial-gradient(circle at center, rgba(255, 0, 0, 0.3) 50%, rgba(255, 0, 0, 0.2) 50%, rgba(255, 0, 0, 0.2) 60%, rgba(255, 0, 0, 0.1) 60%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        japanese: ['Japanese3017', 'sans-serif'],
        lato: ['Lato-Regular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
