module.exports = {
    mode: 'development',

    output: {
        filename: `[name].js`,
        chunkFilename: `[name].js`,
        library: ['[name]'],
        libraryTarget: 'window',
        jsonpFunction: '$wj',
        crossOriginLoading: 'anonymous',
        publicPath: 'dist/',
    },

    
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ]
    },

    // cache: {
    //     type: 'filesystem',
    // }
}