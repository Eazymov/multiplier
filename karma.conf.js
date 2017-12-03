const webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    basePath: '',
    mime : {
      "text/x-typescript": ["ts"],
    },
    frameworks: ["jasmine"],
    files: [
        {
          pattern: "src/**/*-Spec.ts",
        },
    ],
    preprocessors: {
        "src/**/*-Spec.ts": ["webpack"],
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  })
}
