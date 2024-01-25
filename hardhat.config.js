require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "INFURA_API_KEY";
const SEPOLIA_PRIVATE_KEY = "SEPOLIA_PRIVATE_KEY";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};