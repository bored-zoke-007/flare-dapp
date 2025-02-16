import { useLocalStorage } from "usehooks-ts";

export const useWalletConnectModal = () => {
  const [isOpen, setIsOpen] = useLocalStorage(
    "isConnectWalletModalOpen",
    false
  );

  return {
    isOpen,
    setIsOpen,
  };
};
