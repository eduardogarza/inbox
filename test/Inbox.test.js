const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//El provider cambiará de acuerdo a donde lo quieras probar
const web3 = new Web3(ganache.provider());
