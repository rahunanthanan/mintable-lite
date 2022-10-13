import { User } from "./User";

export interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  animation?: string;
  price: string;
  user: User;
}
