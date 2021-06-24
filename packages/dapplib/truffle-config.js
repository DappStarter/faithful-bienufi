require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain essay grace inhale flower split'; 
let testAccounts = [
"0xe27c584dd0e54df9c57d51e911872aea660e4c457f98469d30ce8f1cec4f71b0",
"0x792abf917e783792331829d7f9ccf00825950c0dc95cf27bbbfeea60f753d4ff",
"0x27ebfc5ace8ffe6b9f45e29c9fa898502b07f410ab17126172ef71b95071b586",
"0xd157e661bca8814aae9875318f15f6c0486aaf7f9dfd827effb353cea8657089",
"0x9d69c4f0629503533d78f2622a29f7d7a2977591e259242781e99f1afcb35200",
"0x96cbdd2e287e5b502c8bade5ecd0d3876e3b4f7e257f4a89bc323c92f37b79aa",
"0xb559453be9d88e14637944e4604d8bcc514c57e457b929cb3f5be048562e8387",
"0x6bf2c2d12202f4ded465b9a5e406641dc1838a004fb617f3141714a5921d0c30",
"0x684d61217286a18c6075a51c74200b8290ba346a434bf6ed646fdfcb343c73d6",
"0xcd8a2ec00854c86d97e22ba3589b954da1499c5772d35e222301082c39634f1b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

