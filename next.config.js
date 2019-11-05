const withSass = require('@zeit/next-sass');
const withProgressBar = require('next-progressbar');

module.exports = withProgressBar(
    withSass({
        cssModules: true
    })
);



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