import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useAuth } from "../hooks/useAuth";
import NFTCard from "../components/nftcard";

const nfts = [
  {
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
  {
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
  {
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
];

const Index = () => {
  const { signIn } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await signIn({ username, password });
    },
    [username, password, signIn]
  );

  return (
    <main>
      <div className="bg-red-100 py-10 bg-[]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex ">
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-2xl">
                Completely free to mint your first NFT
              </div>
              <h1 className="text-4xl font-bold mt-1">
                Turn any creation info an item on the blockchain
              </h1>
              <div className="mt-6 text-xl">
                Trade digital items on Mintable to easily earn crypto
              </div>
              <div className="flex gap-3 mt-3">
                <Link href="/mint">
                  <a className="px-6 py-4 rounded-md text-sm font-medium uppercase bg-primary text-white">
                    Start Minting Now
                  </a>
                </Link>
                <Link href="/shop">
                  <a className="px-6 py-4 rounded-md text-sm font-medium uppercase bg-primary text-white opacity-75">
                    Shop Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="rounded shadow-md overflow-hidden">
              <Image src="/future-skyline.png" width={320} height={320} />
              <div className="flex justify-between px-3 py-3 bg-white">
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

      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center my-6">
            <Link href="/shop">
              <a className="px-6 py-4 rounded-md text-sm font-medium bg-primary text-white">
                Join our discord community
              </a>
            </Link>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Promoted Creations
            </h2>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard nft={nft} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Community Picks
            </h2>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard nft={nft} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Creator Spotlight
            </h2>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {nfts.map((nft) => (
                <NFTCard nft={nft} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
