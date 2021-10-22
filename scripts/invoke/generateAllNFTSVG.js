import { ethers } from "ethers";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const provider = new ethers.providers.JsonRpcProvider(process.env.MAINNET);

const abi = [
  "function tokenURI(uint256 tokenId) override public view returns (string memory)",
];

const run = async () => {
  const contract = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    provider
  );

  for (let i = 1; i < 10000; i++) {
    const tokenURI = await contract.tokenURI(i);

    // console.log(tokenURI);

    const token = tokenURI.split(";base64,")[1];

    const data = Buffer.from(token, "base64").toString();

    // console.log(data);

    const img = JSON.parse(data).image.split(";base64,")[1];

    // console.log(img);

    const svg = Buffer.from(img, "base64").toString();

    console.log(svg);

    fs.writeFileSync(`./img/${i}.svg`, svg);
  }
};

await run();
