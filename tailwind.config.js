/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#191825",
        secondary: "#865DFF",
        tertiary: "#E384FF",
        quaternary: "#FFA3FD",
        white: "#FEFCF3",
        error: "#EB455F",
        success: "#609966",
      },
      borderColor: {
        primary: "#191825",
        secondary: "#865DFF",
        tertiary: "#E384FF",
        quaternary: "#FFA3FD",
        white: "#FEFCF3",
        error: "#EB455F",
        success: "#609966",
      },
      fill: {
        primary: "#191825",
        secondary: "#865DFF",
        tertiary: "#E384FF",
        quaternary: "#FFA3FD",
      },
    },
  },
  plugins: [],
};
