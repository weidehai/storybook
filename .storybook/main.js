const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/stories'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    });

    config.module.rules.push({
      test: /\.(js|vue)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    });
    config.plugins.push(new StylelintPlugin(
      {
        "extensions":['vue','css','scss']
      }
    ))
    // Return the altered config
    return config;
  },
};
