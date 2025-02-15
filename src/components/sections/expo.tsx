import Link from "next/link";
import Image from "next/image";
import FTSO from "@/assets/images/ftso.svg";
import StateConnector from "@/assets/images/state-connector.svg";

const ExpoSection = () => {
  return (
    <section id="blockchain-expo">
      <div className="p-6">
        <div className="text-center space-y-4 py-10 tracking-tight leading-tight">
          <h3 className="text-[42px] lg:text-[46px]">
            The blockchain for data
          </h3>
          <p className="text-[25px] text-[#9b9b9b]">
            Flare is an EVM smart contract platform with two enshrined data
            acquisition protocols.
          </p>
        </div>

        <div className="space-y-10 lg:flex lg:gap-10 lg:space-y-0 lg:justify-center text-center max-w-[860px] mx-auto py-16">
          <div className="bg-[#242425] p-6 pt-12 rounded-3xl flex flex-col gap-6 items-center text-[#9b9b9b]">
            <Image src={FTSO} alt="ftso" width={150} height={150} />
            <Link
              rel="noopener"
              target="_blank"
              href="https://flare.network/ftso/"
              className="flex flex-col gap-6"
            >
              <div className="text-2xl leading-tight">
                <div className="text-white">FTSO</div>
                <div>Decentralized prices</div>
              </div>

              <p className="text-sm">
                Offers highly-decentralized price and data feeds to dapps on
                Flare, without relying on centralized providers.
              </p>
            </Link>

            <Link
              rel="noopener"
              target="_blank"
              href="https://flare.network/ftso/"
              className="py-3 px-8 border-current border text-white hover:text-[#E62058] transition rounded-full"
            >
              Learn More
            </Link>
          </div>
          <div className="bg-[#242425] p-6 pt-12 rounded-3xl flex flex-col gap-6 items-center text-[#9b9b9b]">
            <Image src={StateConnector} alt="data" width={150} height={150} />
            <Link
              rel="noopener"
              target="_blank"
              href="https://flare.network/dataconnector/"
              className="flex flex-col gap-6"
            >
              <div className="text-2xl leading-tight">
                <div className="text-white">Data Connector</div>
                <div>Trustless data proofs</div>
              </div>

              <p className="text-sm">
                Enables information from other blockchains and the internet to
                be used securely and trustlessly on Flare.
              </p>
            </Link>

            <Link
              rel="noopener"
              target="_blank"
              href="https://flare.network/dataconnector/"
              className="py-3 px-8 border-current border text-white hover:text-[#E62058] transition rounded-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpoSection;
