const { Web3 } = require('web3');
const fs = require('fs')
const config = require('./config');

let web3 = new Web3(config.rpcEndpoint);

const contractABI = JSON.parse(fs.readFileSync('fees.json', 'utf-8'));

const contract = new web3.eth.Contract(contractABI, config.contractAddress);

const newGasPrice = 100;

const setGasPriceTx = contract.methods.setGasPrice(newGasPrice);

setGasPriceTx.extimateGas({ from: config.senderAddress })
  .then(gasAmount => {
    setGasPriceTx.send({
      from: config.senderAddress,
      gas: gasAmount,
    })
      .on('receipt', console.log)
      .catch(console.error)
  })
  .catch(console.error)
