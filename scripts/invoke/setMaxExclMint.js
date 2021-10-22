import { ethers } from "ethers";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const account = wallet.connect(provider);

const abi = ["function setMaxExclMintAllowed(uint256 max) public onlyOwner"];

const run = async () => {
  let max = process.argv.slice(2)[0];
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    account
  );

  await contract.setMaxExclMintAllowed(max);
};

await run();
