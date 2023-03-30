module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/svelte",
  // "core": {
  //   "builder": "@storybook/builder-vite"
  // },
  "svelteOptions": {
    // "preprocess": require("../svelte.config.js").preprocess
    "preprocess": import("../svelte.config.js").then((config) => config.preprocess)
  },
  "features": {
    "storyStoreV7": true
  }
}