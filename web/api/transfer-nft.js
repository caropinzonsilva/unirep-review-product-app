import { sdk, contractAddress, ownerWalletAddress } from "../thirdwebSDK.js";

export default async function transferNft({ toAddress }) {
  const contract = await sdk.getContract(contractAddress);
  const tokens = await contract.erc721.getAll();
  const nextTokenIndex = tokens.findIndex(
    (token) => token.owner === ownerWalletAddress
  );
  // No more tokens available
  if (nextTokenIndex < 0) return;

  const tokenId = tokens[nextTokenIndex].metadata.id;
  const receipt = await contract.erc721.transfer(toAddress, tokenId);
  return { ...receipt, token: tokens[nextTokenIndex] };
}
