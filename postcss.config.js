module.exports = {
  plugins: [
    require("tailwindcss"),
    require("postcss-nesting"),
    require("postcss-preset-env")({ stage: 1 }),
    require("autoprefixer"),
    require("postcss-clean"),
  ],
};
