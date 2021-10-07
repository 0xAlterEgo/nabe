import hardhat from "hardhat";

async function main() {
  console.log("deploy start");

  const Nabe = await hardhat.ethers.getContractFactory("Nabe");
  const nabe = await Nabe.deploy();
  console.log(`Nabe address: ${nabe.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
