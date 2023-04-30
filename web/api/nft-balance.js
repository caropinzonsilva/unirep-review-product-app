import { sdk, contractAddress } from "../thirdwebSDK.js";

export default async function nftBalance({ address }) {
  const contract = await sdk.getContract(contractAddress);
  const ownedTokens = await contract.erc721.getOwned(address);
  return ownedTokens;
}
