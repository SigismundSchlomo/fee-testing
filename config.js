require('dotenv').config();

module.export = {
  rpcEndpoint: process.env.RPC_ENDPOINT,
  contractAddress: process.env.CONTRACT_ADDRESS,
  senderAddress: process.env.SENDER_ADDRESS,
  privateKey: process.env.PRIVATE_KEY,
}
