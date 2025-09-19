import "@nomicfoundation/hardhat-toolbox"; // make sure this is imported
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const { PRIVATE_KEY, SHARDEUM_RPC_URL } = process.env;



export default {
  solidity: "0.8.28",
  networks: {
    shardeum: {
      url: SHARDEUM_RPC_URL || "https://api-unstable.shardeum.org",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [], 
      chainId: 8080,
    },
  },
};
