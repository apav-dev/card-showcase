const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", ComponentsContentPath],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate", "night"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
