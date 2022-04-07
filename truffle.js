const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "1680af899c0b4bcfaa0a4eecafb4b60c";
//
// const fs = require('fs');
const mnemonic = "erupt unaware spike nerve develop current skull humble art attract hat year";


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
  
  ropsten: {
    provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // ropsten's id
      gas: 4500000,        // ropsten has a lower block limit than mainnet
      gasPrice: 10000000000
  },
}
};