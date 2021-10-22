# Loot Virtual Land NFT

Loot Virtual Land is a Loot inspired NFT collection. The NFT SVGs are generated randomly on chain with the metadata in the smart contract.

You may deploy this smart contract on Ethereum or EVM compatible network.

The smart contract has an exclusive mint function which requires wallets to be whitelisted via a external signing mechanism.

## Setup Hardhat
1. Install Hardhat

```npm install --save-dev hardhat```

2. To use your local installation of Hardhat, you need to use npx to run it (i.e. npx hardhat)

3. Check local account

```npx hardhat accounts```
    
4. Test the smart contract

```npx hardhat test```

## Deploy Smart Contract

1. starting hardhat local network

```npx hardhat node```

2. Deploy to local

```npx hardhat run scripts/deploy.js --network localhost```
    
3. Deploy to Polygon Mumbai

```npx hardhat run scripts/deploy.js --network mumbai```
    
4. Deploy to Polygon Mainnet

```npx hardhat run scripts/deploy.js --network polygon```
    
## Verify Smart Contract
1. Install Hardhat Etherscan plugin (compatible with Etherscan and Polygonscan)

```npm install --save-dev @nomiclabs/hardhat-etherscan```
    
2. Verify the smart contract with contract address

```npx hardhat verify --network polygon YOUR_CONTRACT_ADDRESS```
