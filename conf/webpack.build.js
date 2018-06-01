/**
 * Created by Hanbo on 2018/5/27.
 */

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
      path: __dirname + '/build',
      filename: 'js/[name].[hash:6].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}