// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider1;');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
	'')