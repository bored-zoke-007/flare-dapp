"use client";

import { useState } from "react";

import Link from "next/link";
import { WalletList } from "../wallet-list";
import WalletSelector from "../wallet-selector";
import { WALLETS } from "@/lib/constants";
import Image from "next/image";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [walletIdx, setWalletIdx] = useState<number>();

  const selectedWallet =
    walletIdx != undefined ? WALLETS[walletIdx] : undefined;

  return (
    <section
      id="hero"
      className="min-h-[88vh] flex p-6 mx-auto flex-col gap-10 text-center justify-center items-center"
    >
      <Link
        rel="noopener"
        target="_blank"
        href="https://flare.network/flare-101/"
      >
        <div className="animated-gradient-text max-w-screen-lg">
          <h1 className="text-[min(42px,10vw)] tracking-tight md:text-[min(10vw,120px)] lg:tracking-tighter font-medium leading-tight max-w-screen-xl">
            Connect Everything.
          </h1>
          <p className="text-[25px] md:text-[40px] leading-tight max-w-screen-lg mt-4">
            Flare is the blockchain for data, providing developers with secure
            decentralized access to high-integrity data from other chains and
            the internet.
          </p>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-3 md:gap-6 justify-center max-w-[330px] mx-auto sm:flex-row font-medium">
        <Link
          href="#"
          className="grow shrink-0 w-[165px] py-4 lg:py-3 border border-current rounded-full"
        >
          Learn More
        </Link>
        <WalletSelector
          isOpen={isOpen}
          onClose={setIsOpen}
          selectWallet={setWalletIdx}
        >
          {selectedWallet ? (
            <div className="min-h-64 flex items-center justify-center">
              <div className="flex flex-col gap-6 items-center text-center">
                <div className="relative">
                  <div className="size-28">
                    <Image
                      alt={selectedWallet.name}
                      src={selectedWallet.icon}
                      width={112}
                      height={112}
                      className="size-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-1 rounded-full">
                    <div className="size-10 rounded-full border-4 animate-spin spin-in-3 border-r-zinc-500 " />
                  </div>
                </div>
                <span className="text-lg font-medium">
                  {selectedWallet.name}
                </span>

                <button
                  onClick={() => setWalletIdx(undefined)}
                  className="py-1 px-6 bg-zinc-200 rounded-full"
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <WalletList selectWallet={setWalletIdx} />
          )}
        </WalletSelector>
      </div>
    </section>
  );
};

export default HeroSection;
