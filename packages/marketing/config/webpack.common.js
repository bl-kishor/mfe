module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // when you find a file with mjs or js tell babel to process it as js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
