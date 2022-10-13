import { getNfts } from "./getNfts";

export async function findNft(nftId: string) {
  return (await getNfts()).find((i) => i.id === nftId);
}
