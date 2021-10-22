require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

const { privateKey } = require("./secrets.json");

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR_INFURA_URI",
      accounts: [privateKey],
    },

    mainnet: {
      url: "https://mainnet.infura.io/v3/YOUR_INFURA_URI",
      gasPrice: 80000000000,
      accounts: [privateKey],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://polygonscan.com/
    apiKey: "YOUR_API_KEY",
  },

  solidity: "0.8.0",
};
