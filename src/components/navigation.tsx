"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import CloseIcon from "@/assets/images/close.svg";
import Search from "../assets/images/search.svg";

import { useLocalStorage } from "usehooks-ts";

const tabs = ["Learn", "Build", "Use", "Operate", "Connect", "News"];

const Navigation = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useLocalStorage(
    "is_announcement_visible",
    true
  );

  return (
    <div className="bg-white sticky top-0 z-10">
      {isAnnouncementVisible && (
        <div className="bg-[#E62058] text-white text-center">
          <div className="max-w-screen-xl p-3 flex items-center justify-center gap-2 mx-auto relative">
            <button
              onClick={() => setIsAnnouncementVisible(false)}
              className="shrink-0 md:absolute lg:left-0"
            >
              <Image src={CloseIcon} alt="close" width={16} height={16} />
            </button>
            <Link
              href="https://fair.flare.network/?utm_source=website&amp;utm_medium=referral&amp;utm_campaign=fair"
              target="_blank"
              rel="noopener"
              className="hover:underline"
            >
              Discover Flare’s DeFi ecosystem through our virtual carnival.
              Explore Flare Fair now &gt;
            </Link>
          </div>
        </div>
      )}
      <div className="w-full max-w-screen-xl mx-auto relative -mt-[34px] sm:mt-0 z-10 bg-white">
        <div className="flex items-center gap-6 justify-between p-4 lg:px-0">
          <Image src={Logo} alt="logo" width={99} height={33} />

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {tabs.map((tab) => (
              <button key={tab}>{tab}</button>
            ))}

            <button className="ml-28 mr-10">
              <Image src={Search} alt="logo" width={24} height={24} />
            </button>
            <a
              target="_blank"
              rel="noopener"
              href="https://dev.flare.network/"
              className="py-3.5 px-8 border border-current rounded-full transition hover:text-[#E62058]"
            >
              Developer hub ↗
            </a>
          </div>
          <button className="relative flex flex-col gap-2 lg:hidden">
            <span className="w-[35px] h-[3px] bg-[#E62058]"></span>
            <span className="w-[35px] h-[3px] bg-[#E62058]"></span>
            <span className="w-[35px] h-[3px] bg-[#E62058]"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
