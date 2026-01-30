const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the babel-loader rule
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);

      if (oneOfRule) {
        const babelLoader = oneOfRule.oneOf.find(
          (rule) => rule.loader && rule.loader.includes('babel-loader')
        );

        if (babelLoader) {
          // Include the shared packages in babel-loader
          babelLoader.include = [
            babelLoader.include,
            path.resolve(__dirname, '../shared-components'),
            path.resolve(__dirname, '../shared-utils'),
          ];
        }
      }

      return webpackConfig;
    },
  },
};
