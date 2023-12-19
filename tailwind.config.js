/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1024px",
      },
    },
    extend: {
      keyframes: {
        glitter: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        glitter: "glitter 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
