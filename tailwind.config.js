/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotpink: "hsl(340 100% 50%)",
      },
      keyframes: {
        ripple: {
          from: {
            opacity: 0.5,
            transform:
              "translateX(calc(var(--x, 0px) - 50%)) translateY(calc(var(--y, 0px) - 50%)) scale(0)",
          },
          to: {
            opacity: 0,
            transform:
              "translateX(calc(var(--x, 0px) - 50%)) translateY(calc(var(--y, 0px) - 50%)) scale(1)",
          },
        },
      },
      animation: {
        ripple: "ripple 750ms linear",
      },
    },
  },
  plugins: [],
};
