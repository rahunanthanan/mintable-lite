import { GetServerSidePropsContext } from "next";
import React from "react";
import NFTCard from "../../components/nftcard";
import { NFT } from "../../types/NFT";
import { findNft } from "../../apis/findNft";

interface Props {
  nft: NFT;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const nftId = context.params?.id;

  let nft;
  if (typeof nftId === "string") {
    nft = await findNft(nftId);
  }

  if (!nft) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      nft,
    },
  };
}

export default function NFTDetails({ nft }: Props) {
  console.log("nft", nft);
  return (
    <main>
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NFTCard key={nft.id} nft={nft} />
        </div>
      </div>
    </main>
  );
}
