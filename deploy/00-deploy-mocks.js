const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25");
const GAS_PRICE_LINK = 1e9;

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = [BASE_FEE, GAS_PRICE_LINK];
  const chainId = network.config.chainId;
  // If we are on a local develohelppment network, we need to deploy mocks!
  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    /* deploy mocks here */
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      log: true,
      args: args,
    });
    log("Mocks Deployed!");
    log("------------------------------------------------");
    log(
      "You are deploying to a local network, you'll need a local network running to interact"
    );
    log(
      "Please run `npx hardhat console` to interact with the deployed smart contracts!"
    );
    log("------------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
