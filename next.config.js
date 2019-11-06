const withPlugins = require('next-compose-plugins');
// const images = require('next-images');
const sass = require('@zeit/next-sass');
const typescript = require('@zeit/next-typescript');
const progressBar = require('next-progressbar');
// const offline = require('next-offline');
// const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next-server/constants');

//https://github.com/zeit/next-plugins

module.exports = withPlugins([
  [
    sass,
    {
      cssModules: true,
      cssLoaderOptions: {
        localIdentName: '[path]___[local]___[hash:base64:5]',
      },
    },
  ],
  typescript,
  // offline,
  progressBar,
]);

// module.exports = withCSS(withImages({
//     inlineImageLimit: 16384,
//     webpack(config, options) {
//         config.plugins = config.plugins || [];
//         config.plugins = [
//             ...config.plugins,

//             // Read the .env file
//             new Dotenv({
//                 path: path.join(__dirname, '.env'),
//                 systemvars: true
//             })
//         ];
//         return config
//     }
// }));
