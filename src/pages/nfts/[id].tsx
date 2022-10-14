import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Head from "next/head";
import { API } from "@aws-amplify/api";
import React from "react";
import NFTCard from "../../components/nftcard";
import { NFT } from "../../types/NFT";

interface Props {
  nft: NFT;
  nfts: NFT[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const nftId = context.params?.id;
  const nfts = await API.get("mintablelite", "/nfts", {});

  let nft;
  if (typeof nftId === "string") {
    nft = await API.get("mintablelite", `/nfts/${nftId}`, {});
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
      nfts,
    },
  };
}

export default function NFTDetails({ nft, nfts }: Props) {
  return (
    <>
      <Head>
        <title>{nft.name}</title>
      </Head>

      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3">
            <div className="w-4/10">
              <Image width={320} height={320} src={nft.image} alt={nft.name} />
            </div>
            <div className="flex-1">
              <div className="">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {nft.name}
                </h1>
                <div className="text-gray-600 mt-1">{nft.description}</div>
                <div className="mt-3 flex items-center">
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
                <div className="text-xl font-bold text-gray-900 mt-1">
                  {nft.price}
                </div>
              </div>

              <div className="mt-12 pt-6 border-t">
                <div className="text-xl font-bold text-gray-900">
                  Description
                </div>
                <div className="text-gray-600 mt-1">{nft.description}</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recommended Items
            </h2>
            <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard key={nft.nft_id} nft={nft} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
