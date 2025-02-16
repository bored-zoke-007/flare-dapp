import { useLocalStorage } from "usehooks-ts";

export const useWalletConnectModal = () => {
  const [isOpen, setIsOpen] = useLocalStorage("isConnectWalletModalOpen", true);

  return {
    isOpen,
    setIsOpen,
  };
};
