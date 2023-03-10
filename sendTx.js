const ethers = require("ethers");

let pankilEth = "0x4cb2B9c5828Ddd4C4ADb6B87af62d33F9d8c28D9"
let receiverEth = "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076"
let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/KD-7Fr_2xV_vFsIOkWz0uPvB_XlYILBS')
let pk = '3051c13b8884b7a1068cbc4235b4badcb90fc812d3e5d9ea262e855f488fdc37'

let signer = new ethers.Wallet(pk, provider)
console.log("isSigner?  ",ethers.Signer.isSigner(signer))
provider.getTransactionCount(pankilEth).then(console.log)
signer.getGasPrice().then(gp => console.log("gasPrice", ethers.utils.formatEther(gp * 10)))
signer.getBalance().then(balance => console.log(ethers.utils.formatEther(balance)))
signer.getTransactionCount().then(nonce => console.log("txCount signer", nonce))
const initTx = {
    from: pankilEth,
    to: receiverEth,
    value: ethers.utils.parseEther("0.002"),
    gasLimit: ethers.utils.hexlify(21000),
   gasPrice: ethers.utils.parseUnits("0.01", "gwei"),
    nonce: 29
}

signer.signTransaction(initTx)
.then(signedTx => {
    console.log("🚀 ~ file: sendTx.js:21 ~ signedTx:", signedTx)
    provider.sendTransaction(signedTx)
    .then(console.log)
    .catch(e => {
        console.log("provider catch", e)
    })
})
.catch(e => {
    console.log("signer catch", e)
})
