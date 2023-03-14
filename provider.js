const ethers = require("ethers");
const { parseEther } = require("ethers/lib/utils");

let pankilEth = "0x4cb2B9c5828Ddd4C4ADb6B87af62d33F9d8c28D9"
let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/KD-7Fr_2xV_vFsIOkWz0uPvB_XlYILBS')


provider.getTransactionCount(pankilEth).then((txCount) => {1
    console.log("txCount: ", txCount)
})
provider.getBalance(pankilEth).then((balance) => {
    console.log("balance of %s address in ETH: %d", pankilEth, ethers.utils.formatEther(balance))
})
provider.getBlockNumber().then((blockNumber) => {
    console.log("current blockNumber: ", blockNumber)
})
provider.getNetwork().then(console.log)
provider.getGasPrice().then((gas) => {
    console.log("gas-price:", ethers.utils.formatUnits(gas, "gwei"))
})

provider.getFeeData().then((feeData) => {
    console.log("lastBaseFeePerGas : ", ethers.utils.formatEther(feeData.lastBaseFeePerGas,"gwei"))
    console.log("gasPrice: ", ethers.utils.formatEther(feeData.gasPrice, "gwei"))
    console.log("maxFeePerGas: ", ethers.utils.formatUnits(feeData.maxFeePerGas, "gwei"))
    console.log("maxPriorityfeePerGas", ethers.utils.formatUnits(feeData.maxPriorityFeePerGas, "gwei"))
})

provider.estimateGas({
    to: pankilEth,
    value: parseEther("1.0")
}).then((EG) => {
    console.log("estimated Gas: ", ethers.utils.formatEther(EG, "gwei"))
})

provider.getTransaction("0x548e9d56bc910263ffc580d32ccfff479164865a0d9372abbecf928f389da8b0").then((txDetails) => {
    console.log("txDetails: ", txDetails)
    console.log("gasPrice: ", ethers.utils.formatEther(txDetails.gasPrice, "gwei"))
    console.log("maxPriorityFeePerGas: ", ethers.utils.formatEther(txDetails.maxPriorityFeePerGas, "gwei"))
    console.log("maxFeePerGas: ", ethers.utils.formatEther(txDetails.maxFeePerGas, "gwei"))
    console.log("gasLimit: ", ethers.utils.formatEther(txDetails.gasLimit, "gwei"))
})

provider.getTransactionReceipt("0x548e9d56bc910263ffc580d32ccfff479164865a0d9372abbecf928f389da8b0").then((receipt) => {
    console.log("receipt", receipt)
})

provider.getBlock(100004).then((blockInfo) => {
    console.log("blockInfo:", blockInfo)
})

provider.getBlockWithTransactions(8651768).then(console.log)
