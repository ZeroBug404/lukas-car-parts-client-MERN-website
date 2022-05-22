module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eeb644",
          // secondary: "#D926A9",
          // accent: "#1FB2A6",
        },
      },
    ],

    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
