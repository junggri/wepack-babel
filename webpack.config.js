const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname + "/main.js"),
    output: {
        path: path.join(__dirname + "/build"),
        filename: "bundle.js"
    },
    resolve: { //import한 모듈을 어떻게 해석할지
        extensions: ['.js']// import ".js를 안써도 파일을 읽을 수 있게 해준다."
    },
    module: {//import한 모듈들을 어떻게 처리할거여
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/ //조건과 일치하는 모든 모듈을 제외합니다
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname + "/index.html")
        }),
    ], //옵션들
    devServer: {
        port: 3000,
        hot: true,
        host: 'localhost',
        static: {
            directory: path.join(__dirname),
        },
    },
    devtool: false
<<<<<<< HEAD
}
=======
}
>>>>>>> 5bf14d5d5008a894593ce9d374a4e6d53987f8ca
