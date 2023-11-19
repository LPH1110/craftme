/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ['"Outfit"'],
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      blue: "#25425E",
      sea: "#F7AC28",
      mountain: "#15A09B",
      white: "#FFFFFF",
      "light-gray": "rgb(243 244 246)",
      "semi-gray": "rgb(107 114 128)",
      desc: "rgb(209 213 219)",
      "card-border": "rgb(229 231 235)",
    },
  },
  plugins: [],
  darkMode: "class",
};
