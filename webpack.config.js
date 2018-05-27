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
    watch: true
}