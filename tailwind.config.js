// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         "blue-primary": "#16D5FF",
//       },
//       borderRadius: {
//         "3xl": "30px",
//       },
//       fontFamily: {
//         gothic: ["Century Gothic", "sans-serif"],
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },

//       colors: {
//         cyan: "#16D5FF",
//         maintheme: "#00D1FF",
//         "dark-navy": "#0A1F2C",
//         "midnight-blue": "#14253C",
//         "light-gray": "#E8F2F7",
//         "bright-green": "#00E676",
//         "warning-orange": "#FFAB40",
//         "text-dark-gray": "#2D2D2D",
//       },
//     },
//   },
// };
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all components and pages
    "./public/index.html", // If you're using index.html
  ],
  theme: {
    extend: {
      colors: {
        maintheme: "#00D1FF",
      },
    },
  },
  plugins: [],
};
