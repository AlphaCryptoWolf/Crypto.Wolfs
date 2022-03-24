import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CryptoWolfs',
  tokenName: 'CryptoWolfs',
  tokenSymbol: 'CW',
  hiddenMetadataUri: 'ipfs://__CID__/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 10,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 10000,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 10000,
  },
  contractAddress: "0xcE9e2ACD764337e77055D54B9DB9B442e525bBA9",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
