"use client";

import "swiper/css";
import "swiper/css/pagination";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Ankr from "@/assets/images/ecosystem/ankr.svg";
import XDFI from "@/assets/images/ecosystem/XDFI.png";
import Atriv from "@/assets/images/ecosystem/atriv.svg";
import Arkham from "@/assets/images/ecosystem/arkham.svg";
import Oracle from "@/assets/images/ecosystem/oracle.svg";
import Kinetic from "@/assets/images/ecosystem/kinetic.svg";
import Raindex from "@/assets/images/ecosystem/Raindex.png";
import Sceptre from "@/assets/images/ecosystem/sceptre.svg";
import SparkDex from "@/assets/images/ecosystem/Sparkdex.png";
import Pangolin from "@/assets/images/ecosystem/pangolin.svg";
import Stargate from "@/assets/images/ecosystem/Stargate.png";
import SubSquid from "@/assets/images/ecosystem/subsquid.svg";
import FlareScan from "@/assets/images/ecosystem/flarescan.svg";
import HexTrust from "@/assets/images/ecosystem/Hex-Trust.png";
import SubQuery from "@/assets/images/ecosystem/subQuery-1.svg";
import LayerZero from "@/assets/images/ecosystem/LayerZero.png";
import Elliptic from "@/assets/images/ecosystem/elliptic-2.svg";
import BlazeSwap from "@/assets/images/ecosystem/blazeswap.svg";
import FireBlocks from "@/assets/images/ecosystem/fireblocks.svg";
import GoogleCloud from "@/assets/images/ecosystem/googlecloud.svg";
import HyperNative from "@/assets/images/ecosystem/Hypernative.png";
import Metropolis from "@/assets/images/ecosystem/metropolis.svg";
import Uppercent from "@/assets/images/ecosystem/uppercent.svg";
import PunkDomains from "@/assets/images/ecosystem/punk-domains.svg";
import { useWindowSize } from "usehooks-ts";

const EcosystemSection = () => {
  const { width } = useWindowSize();
  const isMobileScreen = width < 768;

  return (
    <section id="eco-system">
      <div className="space-y-4 text-center py-48 px-6 max-w-screen-xl mx-auto">
        <h3 className="text-[42px] lg:text-[46px] tracking-tight leading-tight text-center pb-6">
          Who's in the Flare ecosystem?
        </h3>

        <div suppressHydrationWarning>
          <EcosystemSlider />
        </div>

        <Link
          rel="noopener"
          target="_blank"
          href="https://flare.network/start-building/"
          className="py-3 px-10 text-white bg-[#E62058] rounded-full inline-block w-full sm:max-w-max"
        >
          Start Building
        </Link>
      </div>
    </section>
  );
};

const EcosystemSystemSliderMobile = () => {
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image src={GoogleCloud} alt="google cloud" width={150} height={84} />
          <Image width={150} height={84} alt="stargate" src={Stargate} />
          <Image width={150} height={84} alt="layerzero" src={LayerZero} />
          <Image width={150} height={84} alt="hextrust" src={HexTrust} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image width={150} height={84} alt="sparkdex" src={SparkDex} />
          <Image width={150} height={84} alt="kinetic" src={Kinetic} />
          <Image src={Raindex} alt="rain dex" width={150} height={84} />
          <Image width={150} height={84} alt="fireblocks" src={FireBlocks} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image width={150} height={84} alt="sceptre" src={Sceptre} />
          <Image width={150} height={84} alt="xdfi" src={XDFI} />
          <Image width={150} height={84} alt="blaze swap" src={BlazeSwap} />
          <Image width={150} height={84} alt="punk domains" src={PunkDomains} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image src={Uppercent} alt="uppercent" width={150} height={84} />
          <Image width={150} height={84} alt="elliptic" src={Elliptic} />
          <Image width={150} height={84} alt="hypernative" src={HyperNative} />
          <Image width={150} height={84} alt="ankr" src={Ankr} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image width={150} height={84} alt="arkham" src={Arkham} />
          <Image width={150} height={84} alt="atriv" src={Atriv} />
          <Image width={150} height={84} alt="flarescan" src={FlareScan} />
          <Image width={150} height={84} alt="metropolis" src={Metropolis} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center [&>img]:w-[22%] [&>img]:h-auto">
          <Image width={150} height={84} alt="oracle" src={Oracle} />
          <Image width={150} height={84} alt="pangolin" src={Pangolin} />
          <Image width={150} height={84} alt="sub query" src={SubQuery} />
          <Image width={150} height={84} alt="subsquid" src={SubSquid} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const EcosystemSystemSliderDesktop = () => {
  return (
    <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center">
          <Image src={GoogleCloud} alt="google cloud" width={150} height={84} />
          <Image width={150} height={84} alt="stargate" src={Stargate} />
          <Image width={150} height={84} alt="layerzero" src={LayerZero} />
          <Image width={150} height={84} alt="hextrust" src={HexTrust} />
          <Image width={150} height={84} alt="sparkdex" src={SparkDex} />
          <Image width={150} height={84} alt="kinetic" src={Kinetic} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center">
          <Image src={Raindex} alt="rain dex" width={150} height={84} />
          <Image width={150} height={84} alt="fireblocks" src={FireBlocks} />
          <Image width={150} height={84} alt="sceptre" src={Sceptre} />
          <Image width={150} height={84} alt="xdfi" src={XDFI} />
          <Image width={150} height={84} alt="blaze swap" src={BlazeSwap} />
          <Image width={150} height={84} alt="punk domains" src={PunkDomains} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center">
          <Image src={Uppercent} alt="uppercent" width={150} height={84} />
          <Image width={150} height={84} alt="elliptic" src={Elliptic} />
          <Image width={150} height={84} alt="hypernative" src={HyperNative} />
          <Image width={150} height={84} alt="ankr" src={Ankr} />
          <Image width={150} height={84} alt="arkham" src={Arkham} />
          <Image width={150} height={84} alt="atriv" src={Atriv} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="pb-6 w-full flex justify-between items-center">
          <Image width={150} height={84} alt="flarescan" src={FlareScan} />
          <Image width={150} height={84} alt="metropolis" src={Metropolis} />
          <Image width={150} height={84} alt="oracle" src={Oracle} />
          <Image width={150} height={84} alt="pangolin" src={Pangolin} />
          <Image width={150} height={84} alt="sub query" src={SubQuery} />
          <Image width={150} height={84} alt="subsquid" src={SubSquid} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const EcosystemSlider = () => {
  const { width } = useWindowSize();
  const isMobileScreen = width < 768;

  if (isMobileScreen) {
    return <EcosystemSystemSliderMobile />;
  }

  return <EcosystemSystemSliderDesktop />;
};

export default EcosystemSection;
