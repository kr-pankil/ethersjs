const ethers = require("ethers")
const CHAIN_ASSET = require("./abi.json")
const contractAddress = '0x8F422A5007E7eD5A1CcA0FaE431cA6339780607b'

let provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/yxTVTRR6InF-UkUmVC8mT81Humb67PDh')

let contract = new ethers.Contract(contractAddress, CHAIN_ASSET, provider)

// console.log(contract)
// console.log(contract.address)
// console.log(contract.resolvedAddress)
// console.log(contract.deployTransaction)
// console.log(contract.provider)
// console.log(contract.signer)

let  gameID = async () => {
    let game = await contract.getGameID()
    console.log("🚀 ~ file: contract.js:18 ~ gameID ~ game:", game)
}
gameID()