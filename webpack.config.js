const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js'
    },
    mode: 'development',
    serve: {
        content: path.resolve(__dirname, "dist")
      },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
          {
            test: /\.module\.s(a|c)ss$/,
            use: [
                  MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                      modules: true,
                      //sourceMap: isDevelopment
                  }
                }, 
                {
                    loader: 'sass-loader',
                    options: {
                      //sourceMap: isDevelopment
                    }
                }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            exclude: /\.module\.(s(a|c)ss)$/,
            use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader', 
                {
                    loader: 'sass-loader',
                    options: {
                      //sourceMap: isDevelopment
                    }
                }
            ]
          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: ['babel-loader']
          },
          {
              test: /\.(jpeg|jpg|png)$/,
              use: [
                {
                  loader: 'url-loader?name=app/images/[name].[ext]'
                }
              ]
            }
      ]
      
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      })
    ]
}