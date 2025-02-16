import { motion } from "motion/react";
import { useWindowSize } from "usehooks-ts";
import { useWalletConnectModal } from "@/hooks/useWalletConnectModal";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "./ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type WalletSelectorProps = {
  children?: React.ReactNode;
};

const WalletSelector = ({ children }: WalletSelectorProps) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;
  const { isOpen, setIsOpen } = useWalletConnectModal();

  if (isLargeScreen) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="grow shrink-0 w-[165px] py-4 lg:py-3 text-white bg-[#E62058] rounded-full">
          Claim Airdrop
        </DialogTrigger>

        <DialogContent className="w-96 pb-0">
          <motion.div>
            <DialogHeader className="!text-center pb-4">
              <DialogTitle>Connect Wallet</DialogTitle>
              <DialogDescription className="sr-only">
                Choose a wallet to connect with
              </DialogDescription>
            </DialogHeader>

            <motion.div className="mx-auto w-full max-w-sm bg-white py-6 px-2 max-h-[480px] overflow-y-auto">
              {children}
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="grow shrink-0 w-[165px] py-4 lg:py-3 text-white bg-[#E62058] rounded-full">
        Claim Airdrop
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sm:text-center">
          <DrawerTitle>Connect Wallet</DrawerTitle>
          <DrawerDescription className="sr-only">
            Choose a wallet to connect with
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm p-6 max-h-96 overflow-y-auto">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default WalletSelector;
