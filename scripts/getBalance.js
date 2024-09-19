const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/jet.sol/jet.json");

const tokenAddress = "0x25A61BE91c708fe8960a21630C2ab6E0049CB1Bd"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x03656d80b390e253233347bF77BbbB7d94839333"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
