const path = require("path");
const MNEMONIC = '';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "/contracts"),
    networks: {
      development: {
          host: "127.0.0.1",
          port: 7545,
          network_id: 5777
      },
  }
};