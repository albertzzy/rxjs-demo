const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:{
        app:'./index.js'
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    output:{
        filename:'js/[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'rxjs',
          filename:'index.html',
          template:'./index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]


}