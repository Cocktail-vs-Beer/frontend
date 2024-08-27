const path = require("path");

module.exports = {
  // i18n: {
  //   // These are all the locales you want to support in

  //   // your application
  //   locales: ["nl-BE"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "nl-BE",
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: "cocktailvsbeer.be",
  //       defaultLocale: "nl-BE",
  //     },
  //   ],
  // },
};

// const sentryWebpackPluginOptions = {
//   // Additional config options for the Sentry Webpack plugin. Keep in mind that
//   // the following options are set automatically, and overriding them is not
//   // recommended:
//   //   release, url, org, project, authToken, configFile, stripPrefix,
//   //   urlPrefix, include, ignore

//   silent: true, // Suppresses all logs
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// // Make sure adding Sentry options is the last code to run before exporting, to
// // ensure that your source maps include changes from all other Webpack plugins
// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
