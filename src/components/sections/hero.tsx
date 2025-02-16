"use client";

import Link from "next/link";
import { Wallets } from "../wallets";

const HeroSection = () => {
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
        <div className="bg-hero-gradient bg-clip-text text-transparent [background-size:200%_200%] animate-gradient-noise max-w-screen-lg">
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
      <div className="flex flex-col items-center gap-3 md:gap-6 justify-center max-w-[330px] mx-auto sm:flex-row">
        <Link
          href="#"
          className="grow shrink-0 w-[165px] py-4 lg:py-3 border border-current rounded-full hover:bg-[#242425] hover:text-white transition"
        >
          Learn More
        </Link>
        <Wallets />
      </div>
    </section>
  );
};

export default HeroSection;
