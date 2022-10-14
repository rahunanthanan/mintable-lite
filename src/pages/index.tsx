import React from "react";
import { GetServerSidePropsContext } from "next";
import { API } from "@aws-amplify/api";
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

import NFTCard from "../components/nftcard";
import { NFT } from "../types/NFT";

interface Props {
  nfts: NFT[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const nfts = await API.get("mintablelite", "/nfts", {});

  return {
    props: {
      nfts,
    },
  };
}

export default function Index({ nfts }: Props) {
  return (
    <>
      <div>
      <Head>
        <title>Mintable Lite</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      </div>
      
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 flex -z-10">
          <div className="relative w-full">
            <div className="absolute bg-gradient-to-t from-white via-transparent to-transparent w-full top-0 z-10 h-full" />
            <Image
              unoptimized
              layout="fill"
              src="/future-skyline.png"
              className="blur-2xl opacity-90 z-0"
            />
          </div>
        </div>
        <div className="w-full h-full top-0 py-10 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0">
              <div className="flex-1 flex flex-col justify-center text-white">
                <div className="text-xl sm:text-2xl">
                  Completely free to mint your first NFT
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold mt-1">
                  Turn any creation info an item on the blockchain
                </h1>
                <div className="mt-3 sm:text-xl">
                  Trade digital items on Mintable to easily earn crypto
                </div>
                <div className="flex gap-3 mt-6">
                  <Link href="/">
                    <a className="px-6 py-4 rounded font-medium uppercase bg-primary text-white">
                      Start Minting Now
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="px-6 py-4 rounded font-medium uppercase bg-primary text-white opacity-75">
                      Shop Now
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex">
                <div className="rounded shadow-md overflow-hidden bg-white">
                  <Image src="/future-skyline.png" width={320} height={300} />
                  <div className="flex justify-between px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-8 h-8 overflow-hidden">
                        <Image
                          unoptimized
                          width={35}
                          height={35}
                          src="https://avatars.dicebear.com/api/male/john.svg?background=%232C0346"
                        />
                      </div>
                      <div>Stylewish</div>
                    </div>
                    <div>
                      <div>Future Skyline</div>
                      <div>$340 (Ξ0.1)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-12">
            <Link href="/">
              <a className="px-6 py-4 rounded-md text-sm font-medium bg-primary text-white flex items-center gap-3">
                <Image unoptimized width={35} height={35} src="/discord.svg" />
                <span>Join our discord community</span>
              </a>
            </Link>
          </div>

          <div className="bg-white shadow rounded overflow-hidden mt-12">
            <Link href="/">
              <a className="flex">
                <div className="p-3 flex items-center justify-center">
                  <div className="">
                    <div className="text-2xl uppercase font-bold">
                      Rae&apos;s NFTs
                    </div>
                    <div>Drop is Live Now!</div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[100px]">
                  <Image unoptimized layout="fill" src="/rae.png" />
                </div>
              </a>
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Promoted Creations
            </h2>
            <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard key={nft.nft_id} nft={nft} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Trending NFTs
            </h2>
            <div className="mt-6 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard key={nft.nft_id} nft={nft} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Recently Sold
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
