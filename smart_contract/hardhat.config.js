require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { MNEMONIC, PRIVATE_KEY } = require('./.env');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
        hardhat: {
            chainId: 31337
        },
        celo: {
            url: "https://forno.celo.org",
            accounts: {
                PRIVATE_KEY: process.env.PRIVATE_KEY,
                path: "m/44'/52752'/0'/0"
            },
            chainId: 42220
        },
    },
    solidity: {
        version: "0.8.0", // Solidity compiler version
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
};
