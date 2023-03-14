const ethers = require("ethers");

let pankilEth = "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076"
let receiverEth = "0x0F2eC1C2fc9A4D35510c47899466A69Ce309f076"
let provider = new ethers.providers.JsonRpcProvider('https://eth-goerli.g.alchemy.com/v2/KD-7Fr_2xV_vFsIOkWz0uPvB_XlYILBS')
let pk = 'c02c8579fb09ae11c21c747209e6d723861cc54bfb1df86645541ddd166028b0'

let signer = new ethers.Wallet(pk, provider)
console.log("isSigner?  ",ethers.Signer.isSigner(signer))
provider.getTransactionCount(pankilEth).then(console.log)

const initTx = {
    from: pankilEth,
    to: receiverEth,
    value: ethers.utils.parseEther("0.0002"),
    gasLimit: ethers.utils.hexlify(221000),
   gasPrice: ethers.utils.parseUnits("5", "gwei"),
    nonce: 7
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
