/*
Available deployed contracts
Ethereum Rinkeby 0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431
Polygon Mumbai 0x351bbee7C6E9268A1BF741B098448477E08A0a53
BSC Testnet 0x88624DD1c725C6A95E223170fa99ddB22E1C6DDD
*/
var info = 'none given'
const nft_contract_address='';
function init()
{console.log('test');

  web3 = new Web3(window.web3.currentProvider);
const nft_contract_address = "0x452f45d2f9501a3BC9d93767Ee443aE4D50FE1AE" //NFT Minting Contract Use This One "Batteries Included", code of this contract is in the github repository under contract_base for your reference.
}
//frontend logic

async function login(){
  
  await window.web3.currentProvider.enable();
  init();
  Moralis.initialize("7fFnU2oaOFBieq0l8I5iMMT1r4njGaBjC0yshCIy"); // Application id from moralis.io
Moralis.serverURL = "https://vuxn1nz2csud.usemoralis.com:2053/server"; //Server url from moralis.io

Moralis.Web3.authenticate().then(function () {
      
  document.getElementById("upload").removeAttribute("disabled");
  
})
console.log(web3.currentProvider.chainId)
}

async function text(){
  var txt = document.getElementById('text').value;
  
  if(txt!=''){return txt;}
  return 'none given';
}

async function upload(){
  try {
    await web3.currentProvider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x4" }]
    });
  } catch (error) {
    alert(error.message);
  }
  
  var Contract = require('web3-eth-contract');
  nft_contract_address='0x452f45d2f9501a3BC9d93767Ee443aE4D50FE1AE';
  
  
  const requestValidation = await mintToken()
  
}

async function mintToken(){
  info = await text()
  console.log("info :",info)
  const encodedFunction = web3.eth.abi.encodeFunctionCall({

    "inputs": [
      {
        "internalType": "string",
        "name": "_info",
        "type": "string"
      }
    ],
    "name": "mintToken",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },[info]);
console.log('encode fct done')
  const transactionParameters = {
    to: nft_contract_address,
    from: ethereum.selectedAddress,
    data: encodedFunction
  };
  const txt = await ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters]
  });
  return txt
}

async function notify(_txt){
  document.getElementById("resultSpace").innerHTML =  
  `<input disabled = "true" id="result" type="text" class="form-control" placeholder="Description" aria-label="URL" aria-describedby="basic-addon1" value="Your NFT was minted in transaction ${_txt}">`;
} 
export {
  login,upload
}