"use client";

import Image from "next/image";
import { WALLETS } from "@/lib/constants";

const WalletList = ({
  selectWallet,
}: {
  selectWallet: (x: number) => void;
}) => {
  return (
    <div className="grid gap-4 pb-4">
      {WALLETS.map((wallet, idx) => (
        <button
          key={wallet.name}
          className="flex items-center bg-zinc-100 rounded-xl p-4 hover:opacity-50 transition gap-4 justify-between text-lg font-medium border-2 border-zinc-400/0"
          onClick={() => {
            console.log("clicked ", idx);
            selectWallet(idx);
          }}
        >
          {wallet.name}
          <Image
            alt={wallet.name}
            src={wallet.icon}
            width={32}
            height={32}
            priority
            className="w-auto h-auto object-contain rounded-lg"
          />
        </button>
      ))}
    </div>
  );
};

export default WalletList;
