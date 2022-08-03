const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", ComponentsContentPath],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["wireframe"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
