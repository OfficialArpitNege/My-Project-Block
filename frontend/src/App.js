import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contract";

function App() {
  const [owner, setOwner] = useState("");
  const [unlockTime, setUnlockTime] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
  const loadContractData = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner();
      const accounts = await provider.listAccounts();
      const accountAddress = accounts[0].address || accounts[0]; // extract string
      setAccount(accountAddress);

      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const ownerAddr = await contract.owner();
      const unlock = await contract.unlockTime();
      setOwner(ownerAddr);
      setUnlockTime(unlock.toString());
    } else {
      alert("Please install MetaMask!");
    }
  };

  loadContractData();
}, []);


 const handleWithdraw = async () => {
  if (!window.ethereum) return alert("Please install MetaMask!");
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const tx = await contract.withdraw(); // send transaction
    alert("Transaction sent! Waiting for confirmation...");

    await tx.wait(); // wait until mined
    alert("Transaction confirmed!");
  } catch (err) {
    if (err.code === 4001) {
      alert("Transaction cancelled by user");
    } else {
      console.error(err);
      alert("Transaction failed. Check console.");
    }
  }
};



  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold underline mb-4">Contract Info</h1>
      <p>Connected account: {account}</p>
      <p>Owner: {owner}</p>
      <p>Unlock Time: {unlockTime}</p>
      <button
        onClick={handleWithdraw}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Withdraw
      </button>
    </div>
  );
}

export default App;
