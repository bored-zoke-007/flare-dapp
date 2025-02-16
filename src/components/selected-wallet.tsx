import { useTimeout } from "usehooks-ts";
import Image, { StaticImageData } from "next/image";

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
  useTimeout(resetWalletIdxAndCollectForm, 5000);

  if (!selectedWallet) return null;

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

export default SelectedWallet;
