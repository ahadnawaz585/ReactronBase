const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    name: 'renderer',
    target: 'web',
    mode: 'development',
    entry: './src/renderer/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist/renderer'),
      filename: 'index.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',    // Injects CSS into the DOM
            'css-loader',      // Resolves CSS imports
            'sass-loader'      // Compiles Sass to CSS
          ],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',  // Injects CSS into the DOM
            'css-loader',    // Resolves CSS imports
            'postcss-loader' // Processes CSS with PostCSS (including Tailwind)
          ],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/images', // Place images in a specific folder
                publicPath: 'assets/images', // Correct URL path for images
                context: path.resolve(__dirname, 'src'), // Maintain the relative path in output
              },
            },
          ],
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/renderer/index.html',
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
  },
  {
    name: 'main',
    target: 'node',
    mode: 'development',
    entry: './src/main/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist/main'),
      filename: 'index.js',
    },
    externals: {
      electron: 'require("electron")',
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  }
  
];
