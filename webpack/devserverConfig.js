/* global __dirname */
const fs = require("fs");
const path = require("path");

const devserverConfig = (config, rootDir) => ({
  publicPath: config.output.publicPath,
  contentBase: path.join(rootDir, "public"),
  hot: true,
  host: "0.0.0.0",
  https: {
    spdy: {
      protocols: ["http/1.1"],
    },
    key: fs.readFileSync(path.join(__dirname, "server.key")),
    cert: fs.readFileSync(path.join(__dirname, "server.cert")),
  },
  port: 3333,
  historyApiFallback: true,
  compress: false,
  overlay: {
    warnings: true,
    errors: true,
  },
  stats: "minimal",
});

module.exports = devserverConfig;
