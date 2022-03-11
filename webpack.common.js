// Cria o arquivo HTML para servir ao bundle
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Remove todos os arquivos previamente existes do diretorio de saida
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Remove todos os comentarios do bundle e previne a criacao do arquivo licence.txt
const TerserPlugin = require('terser-webpack-plugin');

// Traduz os paths dos arquivos para compatibilidade em qualquer sistema operacional
const path = require('path');

module.exports = {
  entry: {
    login: path.resolve(__dirname, 'src', 'bundle-login.js'),
    dashboard: path.resolve(__dirname, 'src', 'bundle-dashboard.js'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  resolve: {
    extensions: ['.js', '.scss'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: path.resolve(__dirname, 'public', 'dashboard.html'),
      chunks: ['dashboard'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
};
