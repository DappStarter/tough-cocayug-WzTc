require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach response mirror connect install define army giant'; 
let testAccounts = [
"0x59783465334866ccd850a54804ce7af3eccf81a1a410013b4f9d5186d42c01ad",
"0xad172fb0aed2232b7f93a149d77c64b3b123476d56aac830c44acbd5f5591477",
"0x76ff0cb7175338c43630b98263fae0eef5c43198249dd09f9bb2eaf3b9dccd3f",
"0xec2f4d653a30ba20c0292c110455d45de3faf8e590a681ccca68de7c1116c827",
"0x248d2ca9006069c48095b02d7372f6848fd2ac4bbe723aa9f1bf39f8e5744627",
"0xf73fe78f0ee0a739f1e5c31796a91552df28b89c36965adbbf4a257cc6396f4a",
"0x6fb956b845083d33c26a741784240596ad2fa9bd41f46e008a41cab21736a9e2",
"0x2df00e659fd81ffe6c2095f8b7816564754607b63f73149345a469cc6c0c7f5d",
"0xe73cf7a416ca21d9c0c98ba32de57de4f33be1db9424a9fb79a2f50e313ac160",
"0x6b1d06e0c1dd1e524e5d032b027b51a46b7164072086dcbc5772be3833a3fee5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


