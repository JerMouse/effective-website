const path = require("path");
const isDevelopment = process.env.NODE_ENV === "development";

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 8888;
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/styles/variables.scss";`
      }
    }
  },
  devServer: {
    port,
    open: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        target: `http://127.0.0.1:${port}/mock`,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack(config) {
    // const vueConfig = config.module.rule()
    return config;
  }
};
