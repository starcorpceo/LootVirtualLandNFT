import { ethers } from "ethers";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const account = wallet.connect(provider);

const abi = ["function pausePubMint() public onlyOwner"];

const run = async () => {
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    account
  );

  await contract.pausePubMint();
};

await run();
