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

import { motion } from "motion/react";
import useMeasure from "react-use-measure";
import { useWindowSize } from "usehooks-ts";

type WalletSelectorProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: (s: boolean) => void;
  selectWallet: (x: number) => void;
};

const WalletSelector = ({
  children,
  isOpen,
  onClose,
  selectWallet,
}: WalletSelectorProps) => {
  const { width } = useWindowSize();
  const [ref, bounds] = useMeasure();
  const isLargeScreen = width >= 768;

  if (isLargeScreen) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTrigger className="grow shrink-0 w-[165px] py-4 lg:py-3 text-white bg-[#E62058] rounded-full">
          Connect Wallet
        </DialogTrigger>

        <DialogContent className="w-96">
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
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerTrigger className="grow shrink-0 w-[165px] py-4 lg:py-3 text-white bg-[#E62058] rounded-full">
        Connect Wallet
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
