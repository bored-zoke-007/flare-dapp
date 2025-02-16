"use client";

import { useLocalStorage } from "usehooks-ts";

import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/assets/images/arrow.svg";
import CloseIcon from "@/assets/images/close.svg";

const Popup = () => {
  const [visible, setVisible] = useLocalStorage("popup_visible", true);

  if (!visible) return null;

  return (
    <div className="fixed z-20 isolate w-[calc(100%-54px)] max-w-80 md:max-w-max bottom-[50px] right-[27px] bg-white [box-shadow:0_0_15px_0_rgba(0,0,0,.5)] p-5 rounded-3xl md:p-4 md:right-[100px] md:bottom-[100px]">
      <Link
        href="https://flare.network/sign-up/"
        className="flex divide-x divide-[#E62058]"
      >
        <div className="text-lg px-2 leading-tight tracking-tight space-y-1">
          <p className="font-medium">Sign up for the newsletter.</p>
          <p className="text-[#9b9b9b]">Don’t miss the latest updates.</p>
        </div>
        <div className="flex items-center p-4 lg:p-1">
          <Image src={ArrowIcon} alt="link" width={16} height={16} />
        </div>
      </Link>
      <button
        className="size-5 rounded-full bg-[#c8c8c8] flex items-center justify-center absolute -top-6 -right-2 p-1 z-10"
        onClick={() => setVisible(false)}
      >
        <Image src={CloseIcon} alt="close" width={14} height={14} />
      </button>
    </div>
  );
};

export default Popup;
