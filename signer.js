const { JsonRpcSigner } = require("@ethersproject/providers")
const ethers = require("ethers")

let pankilEth = "0x4cb2B9c5828Ddd4C4ADb6B87af62d33F9d8c28D9"
let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/KD-7Fr_2xV_vFsIOkWz0uPvB_XlYILBS')
let signer = provider.getSigner()
let pk = "3051c13b8884b7a1068cbc4235b4badcb90fc812d3e5d9ea262e855f488fdc37"
signer.getGasPrice().then(console.log)
console.log(ethers.Signer.isSigner(signer))
let mnemonic = "snake spread pistol prepare avoid blade lecture open mosquito merit mobile exit"
let walletMnemonic = ethers.Wallet.fromMnemonic(mnemonic)
console.log("🚀 ~ file: signer.js:12 ~ walletMnemonic:", walletMnemonic.privateKey)

let wallet = new ethers.Wallet(pk, provider)
console.log("🚀 ~ file: signer.js:15 ~ wallet:", wallet.mnemonic)
// wallet.connect(provider).then(console.log)
console.log(wallet.address)
console.log(wallet.provider)
console.log(wallet.publicKey)
wallet.getTransactionCount().then(console.log())
wallet.getBalance().then(balance => console.log("balance", ethers.utils.formatEther(balance)))
let tx = {
    to: "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076",
    value : ethers.utils.parseEther("0.004")
}

wallet.signMessage("Hello World!!")
.then(console.log)

wallet.signTransaction

wallet.sendTransaction(tx)
.then(txDetails => {
    console.log(txDetails)
})