"use client";

import { useQueryState } from "nuqs";

import Image from "next/image";
import SearchIcon from "@/assets/images/search.svg";

import { WALLETS } from "@/lib/constants";
import { WalletsStatus } from "./wallets";

type WalletListProps = {
  selectWallet: (x: string) => void;
  setWalletStatus: (x: WalletsStatus) => void;
};

const WalletList = ({ selectWallet, setWalletStatus }: WalletListProps) => {
  const [query, setQuery] = useQueryState("wallet");

  const walletList = query
    ? WALLETS.filter((w) => w.name.includes(query) || w.link.includes(query))
    : WALLETS;

  return (
    <div className="grid gap-4 pb-16">
      <div className="w-full relative">
        <input
          type="search"
          value={query || ""}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search wallet"
          className="pl-8 py-2 rounded-lg border outline-none w-full text-base"
        />
        <Image
          src={SearchIcon}
          alt="search"
          width={18}
          height={18}
          className="absolute left-2 top-1/2 -translate-y-1/2"
        />
      </div>
      {walletList.map((wallet) => (
        <button
          key={wallet.name}
          className="flex items-center bg-zinc-100 rounded-xl p-4 hover:opacity-50 transition gap-4 justify-between text-lg font-medium border-2 border-zinc-400/0"
          onClick={() => {
            selectWallet(wallet.name);
            setWalletStatus("pending");
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
      {walletList.length === 0 && (
        <div className="min-h-64 flex items-center justify-center text-sm">
          Couldn&apos;t find wallet <strong className="pl-1">{query}</strong>
        </div>
      )}
    </div>
  );
};

export default WalletList;
