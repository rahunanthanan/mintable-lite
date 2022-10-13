import { GetServerSidePropsContext } from "next";
import React from "react";
import NFTCard from "../../components/nftcard";
import { NFT } from "../../types/NFT";

interface Props {
  nft: NFT;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const nftId = context.params?.id;

  return {
    props: {
      nft: {
        id: "ee7e93f4-012b-42b3-ac1f-d283905f3249",
        name: "Boost your conversion rate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
        image:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
        user: {
          name: "Brenna Goyette",
          href: "#",
          image:
            "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
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
