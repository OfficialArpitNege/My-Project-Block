import { ethers } from "ethers";

// Replace this with your deployed contract address (from Hardhat)
export const CONTRACT_ADDRESS = "0x2c936fFf63f520e87D41De7dF4B283Deca0B3947";

// Replace this with your contract ABI (generated after compile)
export const CONTRACT_ABI = [
  {
    "inputs": [{"internalType":"uint256","name":"_unlockTime","type":"uint256"}],
    "stateMutability":"payable",
    "type":"constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": false,"internalType":"uint256","name":"amount","type":"uint256"},
      {"indexed": false,"internalType":"uint256","name":"when","type":"uint256"}
    ],
    "name":"Withdrawal",
    "type":"event"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType":"address payable","name":"","type":"address"}],
    "stateMutability": "view",
    "type":"function"
  },
  {
    "inputs": [],
    "name": "unlockTime",
    "outputs": [{"internalType":"uint256","name":"","type":"uint256"}],
    "stateMutability": "view",
    "type":"function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type":"function"
  }
];
