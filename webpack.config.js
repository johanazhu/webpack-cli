/**
 * Created by Hanbo on 2018/5/27.
 */

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
      path: __dirname + '/build',
      filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    watch: true
}