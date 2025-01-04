/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
          light: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold:800,
          black: 900,
      },
      colors: {
        primary: "#c92071",
        secondary: "#b5b6f2",
        tertiary: "#991956",
        error: "#ee4266",
        success: "#52ca76",
        warning: "#f6aa1c",

        /*Grayscale*/
        darkGray: "#1f1f1f",
        darkGray2: "#474747",
        darkGray3: "#666666",
        lightGray: "#8f8f8f",
        lightGray2: "#cccccc",
        lightGray3: "#f5f5f5",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}

