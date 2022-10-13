import Link from "next/link";
import { NFT } from "../types/NFT";

interface Props {
  nft: NFT;
}

const NFTCard = ({ nft }: Props) => {
  return (
    <div
      key={nft.name}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={nft.image} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/nfts/${nft.id}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{nft.name}</p>
              <p className="mt-3 text-base text-gray-500">{nft.description}</p>
              <p className="mt-3 text-base text-gray-500">{nft.price}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <a>
                <span className="sr-only">{nft.user.name}</span>
                <img
                  className="h-10 w-10 rounded-full"
                  src={nft.user.imageUrl}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link href="/">
                <a className="hover:underline">{nft.user.name}</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
