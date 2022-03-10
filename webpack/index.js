/* global __dirname */
/* global process */
const path = require("path");
const rootDir = path.resolve(__dirname, "..");

module.exports = (webpackEnv = {}) => {
  const mode = webpackEnv.NODE_ENV || "development";
  const env = { ...webpackEnv, ...process.env, NODE_ENV: mode };
  const config = {};
  config.mode = mode;
  config.watch = false;
  config.entry = {
    app: path.resolve(rootDir, "./src/index.js"),
    vendor: ["react", "react-dom", "react-router-dom"],
  };
  config.resolve = {
    extensions: [".js", ".jsx"],
    alias: {
      Components: path.resolve(rootDir, "src/components"),
      Images: path.resolve(rootDir, "src/images"),
      Middleware: path.resolve(rootDir, "src/middleware"),
      Router: path.resolve(rootDir, "src/router"),
      Store: path.resolve(rootDir, "src/store"),
      Src: path.resolve(rootDir, "src"),
      Utils: path.resolve(rootDir, "src/utils"),
      process: "process/browser",
    },
  };
  config.output = {
    path: path.join(rootDir, "dist"),
    filename: "js/[name].[fullhash:8].js",
    chunkFilename: "js/chunks/[name].[chunkhash:8].js",
    publicPath: "/",
    ...(mode === "development" && {
      pathinfo: true,
      hotUpdateChunkFilename: "hot/[id].[fullhash].hot-update.js",
      hotUpdateMainFilename: "hot/[fullhash].[runtime].hot-update.json",
    }),
  };
  config.module = require("./module")(rootDir);
  config.plugins = require(`./plugins/${mode}`)(config, env, rootDir);
  config.optimization = require(`./optimization/${mode}`);
  if (mode === "development") {
    config.devtool = "cheap-module-source-map";
    config.devServer = require("./devserverConfig")(config, rootDir);
  }
  return config;
};
