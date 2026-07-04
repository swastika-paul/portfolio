module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
            
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
    },
  },
  plugins: [],
};