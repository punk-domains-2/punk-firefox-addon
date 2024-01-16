import { ethers } from "ethers";

export const getFallbackProvider = (networkId) => {
  let urls;

  if (networkId === 10) {
    // Optimism
    urls = [
      "https://mainnet.optimism.io"
    ]; 
  } else if (networkId === 14) {
    // Flare Mainnet
    urls = [
      "https://flare-api.flare.network/ext/C/rpc"
    ];
  } else if (networkId === 19) {
    // Songbird Canary-Network
    urls = [
      "https://songbird-api.flare.network/ext/C/rpc"
    ];
  } else if (networkId === 56) {
    // BNB Smart Chain Mainnet
    urls = [
      "https://bsc-dataseed.binance.org"
    ];
  } else if (networkId === 100) {
    // Gnosis Chain
    urls = [
      "https://rpc.gnosischain.com"
    ];
  } else if (networkId === 137) {
    // Polygon PoS Chain
    urls = [
      "https://rpc.ankr.com/polygon"
    ];
  } else if (networkId === 250) {
    // Fantom Opera
    urls = [
      "https://rpc.fantom.network"
    ];
  } else if (networkId === 255) {
    // Kroma
    urls = [
      "https://api.kroma.network"
    ];
  } else if (networkId === 324) {
    // zkSync Era Mainnet
    urls = [
      "https://mainnet.era.zksync.io"
    ];
  } else if (networkId === 8453) {
    // Base
    urls = [
      "https://mainnet.base.org"
    ];
  } else if (networkId === 42161) {
    // Arbitrum One
    urls = [
      "https://arb1.arbitrum.io/rpc"
    ];
  } else if (networkId === 42170) {
    // Arbitrum Nova
    urls = [
      "https://nova.arbitrum.io/rpc"
    ];
  } else if (networkId === 42766) {
    // ZKFair
    urls = [
      "https://rpc.zkfair.io"
    ];
  } else if (networkId === 59144) {
    // Linea
    urls = [
      "https://rpc.linea.build"
    ];
  } else if (networkId === 534352) {
    // Scroll
    urls = [
      "https://rpc.scroll.io"
    ];
  } 

  if (urls) {
    const providers = urls.map(url => new ethers.providers.JsonRpcProvider(url));
    return new ethers.providers.FallbackProvider(providers, 1); // return fallback provider
  } else {
    return null;
  }
}
