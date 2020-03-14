const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const M = {
  umd: {
    libraryTarget: 'umd',
    filename: (chunkData) => {
      return chunkData.chunk.name === 'mcform' ? '[name].umd.js': '[name].js';
    }
  },

  commonjs2: {
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  }
};

const T = process.env.OUTPUT_TARGET;

module.exports = {
  mode: 'development',
  entry: {
    'mcform': './index.js',
    'index.scss': './assets/index.scss.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'McForm',
    globalObject: 'this',
    ...M[T]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@vue/babel-preset-jsx']
          }
        }
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    // 抽离css为单独文件
    new MiniCssExtractPlugin({
      filename: 'assets/index.css'
    })
  ]
};