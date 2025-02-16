import WalletList from "./wallet-list";
import WalletSelector from "./wallet-selector";

import { useEffect, useState } from "react";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

import { WALLETS } from "@/lib/constants";
import CollectForm from "./collect-form";
import SelectedWallet from "./selected-wallet";

export type WalletsStatus = "idle" | "pending" | "collect" | "success";

export const Wallets = ({
  walletIdx,
  setWalletIdx,
}: {
  walletIdx?: number;
  setWalletIdx: (x?: number) => void;
}) => {
  const { isOpen } = useWalletConnectModal();
  const [status, setStatus] = useState<WalletsStatus>("idle");

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
