/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}", // se estiver usando pasta pages também
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: "#4F46E5", // exemplo: roxo-indigo
            dark: "#4338CA",
            light: "#6366F1",
          },
        },
        borderRadius: {
          xl: "1rem",
          '2xl': "1.5rem",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
  };
  