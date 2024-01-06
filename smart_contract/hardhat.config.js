require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  networks: {
    hardhat:{},
    sepolia:{
      url: 'https://eth-sepolia.g.alchemy.com/v2/QvyNaRhOMGQeNoy9Cbj5F0Gw65O2TczW',
      accounts: [`0x596c577a4f7e20620be2afe372d55817224eb7f66f87a97098df6aa12a23f6f9`]
    }
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // mocha: {
  //   timeout: 40000
  // }
};