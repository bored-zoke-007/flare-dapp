"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import Logo from "../assets/images/logo.svg";
import CloseIcon from "@/assets/images/close.svg";
import SearchIcon from "../assets/images/search.svg";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

const tabs = ["Learn", "Build", "Use", "Operate", "Connect", "News"];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useLocalStorage("show_banner", true);
  const { setIsOpen } = useWalletConnectModal();

  return (
    <div className="bg-white sticky top-0 z-10">
      {showBanner && (
        <div className="bg-[#E62058] text-white text-center">
          <div className="max-w-screen-xl p-2 sm:p-3 flex items-center justify-center gap-2 mx-auto relative">
            <button
              onClick={() => setShowBanner(false)}
              className="shrink-0 md:absolute lg:left-0"
            >
              <Image src={CloseIcon} alt="close" width={16} height={16} />
            </button>
            <Link
              href="https://fair.flare.network/?utm_source=website&amp;utm_medium=referral&amp;utm_campaign=fair"
              target="_blank"
              rel="noopener"
              className="hover:underline leading-8 sm:leading-normal"
            >
              Discover Flare’s DeFi ecosystem through our virtual carnival.
              Explore Flare Fair now &gt;
            </Link>
          </div>
        </div>
      )}
      <div className="w-full max-w-screen-xl mx-auto relative -mt-[32px] sm:mt-0 z-10 bg-white">
        <div className="flex items-center gap-6 justify-between p-6 sm:p-4 lg:px-0">
          <Link
            href="/"
            className={cn("relative transition block duration-500", {
              "[clip-path:inset(0_64px_0_0)]": isMenuOpen,
            })}
          >
            <Image src={Logo} alt="logo" width={99} height={33} />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {tabs.map((tab) => (
              <button key={tab}>{tab}</button>
            ))}

            <button className="ml-28 mr-10">
              <Image src={SearchIcon} alt="logo" width={24} height={24} />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="py-3.5 px-8 border border-current rounded-full transition hover:text-[#E62058]"
            >
              Connect Wallet
            </button>
          </div>
          <button
            onClick={() => setIsMenuOpen((x) => !x)}
            className="relative flex flex-col items-center justify-center gap-2 lg:hidden size-9 *:transition *:duration-300 *:ease-in-out *:origin-center"
          >
            <span
              className={cn(
                "absolute w-full h-[3px] bg-[#E62058] -translate-y-3",
                { "translate-y-0 rotate-45": isMenuOpen }
              )}
            ></span>
            <span
              className={cn("absolute w-full h-[3px] bg-[#E62058]", {
                "opacity-0": isMenuOpen,
              })}
            ></span>
            <span
              className={cn(
                "absolute w-full h-[3px] bg-[#E62058] translate-y-3 origin-bottom-left",
                { "translate-y-0 -rotate-45": isMenuOpen }
              )}
            ></span>
          </button>
        </div>
      </div>
      <div
        className={cn(
          "bg-white/50 backdrop-blur fixed top-[108px] left-0 w-full h-[calc(100vh-104px)] overflow-y-auto z-50",
          {
            "opacity-0 pointer-events-none select-none delay-300": !isMenuOpen,
          }
        )}
      >
        <div className="relative min-h-full isolate">
          <div
            className={cn(
              "absolute w-full h-full bg-white p-6 scale-y-0 duration-500 transition origin-top",
              { "scale-y-100": isMenuOpen }
            )}
          />
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
