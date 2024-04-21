require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: [],
        celo: {
            url: "https://forno.celo.org",
            accounts: {
                PRIVATE_KEY: process.env.PRIVATE_KEY,
                path: "m/44'/52752'/0'/0"
            },
            chainId: 42220
        },
    },
    etherscan: {
        apiKey: {
            celo: process.env.CELOSCAN_API_KEY,
        },
        customChains: [
            {
                network: "celo",
                chainId: 42220,
                urls: {
                    apiURL: "https://api.celoscan.io/api",
                    browserURL: "https://celoscan.io/",
                },
            },
        ],
    },
};
