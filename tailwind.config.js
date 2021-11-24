module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: { custom: ".93rem" },
    },
  },
  variants: {
    extend: {
      borderColor: ["active"],
      borderWidth: ["active"],
    },
  },
  plugins: [],
};
