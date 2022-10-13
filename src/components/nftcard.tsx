import Link from "next/link";
import Image from "next/image";
import { NFT } from "../types/NFT";

interface Props {
  nft: NFT;
}

const NFTCard = ({ nft }: Props) => {
  return (
    <Link href={`/nfts/${nft.nft_id}`}>
      <a className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0 min-h-[320px] relative">
          <Image
            className="object-cover"
            src={nft.image}
            alt={nft.name}
            layout="fill"
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="block mt-2">
              <p className="text-lg font-semibold text-gray-900">{nft.name}</p>
              <p className="mt-3 text-base text-gray-500">{nft.price}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{nft.user.name}</span>
              <Image
                className="rounded-full"
                width={35}
                height={35}
                unoptimized
                src={`https://avatars.dicebear.com/api/adventurer/${nft.user.name}.svg?background=%232C0346`}
                alt={nft.user.name}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {nft.user.name}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NFTCard;
