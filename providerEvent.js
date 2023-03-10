const ethers = require("ethers");
let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/KD-7Fr_2xV_vFsIOkWz0uPvB_XlYILBS')

provider.on("block", (bn) => {
    console.log("block event:", bn)
})

provider.once("txHash", (tx) => {
    console.log("tx mined event", tx)
})

provider.on("pending", (tx) => {
    console.log("pending tx", tx)
})

provider.on("error", (error) => {
    console.log("error in provider", error)
})
