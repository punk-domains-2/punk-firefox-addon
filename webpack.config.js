const manifest = require('./manifest')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const GenerateJsonPlugin = require('generate-json-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

const plugins = [
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
  new CopyPlugin({
    patterns: [
      { from: "src/icons", to: "icons" },
      { from: 'src/popup/index.html', to: 'popup/index.html' },
    ],
  }),
  new GenerateJsonPlugin('manifest.json', manifest)
]

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
    ],
  },
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'sass-loader'
    ],
  },
  {
    test: /\.(png|jpg|gif|svg|ico)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?emitFile=false',
    },
  },
]

const config = {
  entry: {
    'background': './src/background.js',
    'popup/popup': ['./src/popup/popup.js', './src/popup/popup.css'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: { rules },
  plugins,
  experiments: {
    topLevelAwait: true,
  },
}

if (isProd) {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);
}

if (!isProd) {
  config.devtool = 'source-map'
}

module.exports = config