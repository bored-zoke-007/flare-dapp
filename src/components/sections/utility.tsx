import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Bridge from "@/assets/images/utility/Bridging-1-1.svg";
import Oracles from "@/assets/images/utility/data_feeds-1.svg";
import Scale from "@/assets/images/utility/web2_connectivity-1.svg";
import Dapps from "@/assets/images/utility/state_aquisition-1-1.svg";
import Access from "@/assets/images/utility/scalable_smart_contracts-1-1.svg";

const utilities = [
  {
    link: "https://flare.network/fassets/",
    title: "Decentralized Bridging",
    description: "Trustlessly access value and users from other chains.",
    image: Bridge,
  },
  {
    link: "https://flare.network/dataconnector/",
    title: "State Acquisition",
    description:
      "Build dapps and protocols that utilize state from any connected chain.",
    image: Dapps,
  },
  {
    link: "https://flare.network/dataconnector/",
    title: "Web2 Connectivity",
    description:
      "Trustlessly trigger smart contracts with data from web2 APIs.",
    image: Scale,
  },
  {
    link: "https://flare.network/ftso/",
    title: "Enshrined Oracles",
    description:
      "Access all the data you need, knowing Flare's oracles are secured at the network layer.",
    image: Oracles,
  },
  {
    link: "https://docs.flare.network/tech/flare/#developing-on-flare",
    title: "Data Access For Free",
    description:
      "Build on Flare with a broad range of data feeds available on-chain for free.",
    image: Access,
  },
];

const UtilitySection = () => {
  return (
    <section id="utility">
      <div className="space-y-10 text-center py-20 px-6">
        <h3 className="text-[42px] lg:text-[46px] tracking-tight leading-tight text-center">
          Expanding the utility of blockchain
        </h3>

        <div className="max-w-screen-xl grid md:grid-cols-2 lg:grid-cols-5 gap-6 items-center justify-center mx-auto">
          {utilities.map((item, idx) => (
            <Link href={item.link} key={idx}>
              <div
                className={cn(
                  "[border:1px_solid_#F4F4F4] p-6 grid grid-rows-[112px_69px_86px] rounded-[20px] min-h-[360px] transition-transform duration-300 hover:-translate-y-3 gap-2",
                  {
                    "md:col-span-2 lg:col-span-1": idx === 0,
                  }
                )}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={94}
                    height={94}
                  />
                </div>
                <div className="text-2xl leading-tight tracking-tight flex items-center justify-center">
                  {item.title}
                </div>
                <p className="text-sm text-[#9b9b9b]">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid gap-4 md:max-w-max mx-auto max-md:text-lg md:grid-cols-3">
          <Link
            rel="noopener"
            target="_blank"
            href="https://flare.network/flare-101/"
            className="grow shrink-0 py-3 px-6 border border-current rounded-full transition hover:text-[#E62058]"
          >
            Intro to Flare
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://flare.network/start-building/"
            className="grow shrink-0 py-3 px-6 text-white bg-[#E62058] rounded-full"
          >
            Start Building
          </Link>
          <Link
            rel="noopener"
            target="_blank"
            href="https://docs.flare.network/"
            className="grow shrink-0 py-3 px-6 border border-current rounded-full transition hover:text-[#E62058]"
          >
            Developer docs ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
