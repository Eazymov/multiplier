require('dotenv').config()

const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const resolve = (src) => path.resolve(__dirname, src)
const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  entry: './src/main.ts',
  output: {
    filename: 'build.js',
    path: resolve('dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: ['\\.vue$'],
          transpileOnly: true,
        },
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.pug$/,
        loader: 'pug-html-loader',
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [

  ],
}

switch (NODE_ENV) {
  case 'development':
    config.devServer = {
      port: 3000,
      contentBase: './',
      publicPath: '/dist/',
    }
    break

  case 'production':
    config.plugins.push(new UglifyJSPlugin())
    break

  default:
    break
}

module.exports = config
