import { ethers } from "hardhat";

const main = async () => {
  const Todo = await ethers.getContractFactory("Todo");
  const todo = await Todo.deploy();

  await todo.deployed();

  console.log("Todo Contract deployed to:", todo.address);
  /// Deployed contract address on rinkeby: 0xB3dB65363e0E6dddF3930b7290f6C7D599ff99Ae
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});