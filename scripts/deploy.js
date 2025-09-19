import hre from "hardhat";

async function main() {
  const Lock = await hre.ethers.getContractFactory("Lock");
  const unlockTime = Math.floor(Date.now() / 1000) + 60 * 60; // 1 hour from now
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.01") });
  await lock.waitForDeployment();
  console.log("Contract deployed to:", lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
