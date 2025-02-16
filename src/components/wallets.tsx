import WalletList from "./wallet-list";
import WalletSelector from "./wallet-selector";

import { useEffect, useState } from "react";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

import { WALLETS } from "@/lib/constants";
import CollectForm from "./collect-form";
import SelectedWallet from "./selected-wallet";

export type WalletsStatus = "idle" | "pending" | "collect" | "success";

export const Wallets = () => {
  const { isOpen } = useWalletConnectModal();
  const [wallet, setWallet] = useState<string>();
  const [status, setStatus] = useState<WalletsStatus>("idle");

  const selectedWallet = WALLETS.find((w) => w.name === wallet);

  const resetWalletIdxAndCollectForm = () => {
    setStatus("collect");
  };

  const goBack = () => {
    setWallet(undefined);
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
        <WalletList selectWallet={setWallet} setWalletStatus={setStatus} />
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
