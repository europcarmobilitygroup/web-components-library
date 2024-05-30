const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  framework: "@storybook/web-components",
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "storybook-addon-themes"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  }
}