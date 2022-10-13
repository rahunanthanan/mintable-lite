import { User } from "./User";

export interface NFT {
  nft_id: string;
  name: string;
  description: string;
  image: string;
  animation?: string;
  price: string;
  user: User;
}
