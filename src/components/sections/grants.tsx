import Link from "next/link";
import Image from "next/image";

import { FaStar } from "react-icons/fa6";
import MobileBanner from "@/assets/images/grants/banner-sm.jpg";
import DesktopBanner from "@/assets/images/grants/banner-xl.jpg";

const GrantsSection = () => {
  return (
    <section id="grants">
      <div className="py-28">
        <div className="max-w-screen-xl rounded bg-pink-100 text-white relative mx-auto gap-20">
          <div className="p-12 space-y-8 px-8 lg:px-12 lg:space-y-20 max-w-md relative z-[1]">
            <div className="text-[32px] leading-tight tracking-tight">
              Grants are available to teams using our tech in interesting ways.
            </div>

            <Link
              href="https://flare.network/grants/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-current rounded-full py-3 pl-4 pr-8 inline-flex items-center gap-4 text-[18px] lg:text-base"
            >
              <FaStar size={24} />
              Learn More
            </Link>
          </div>

          <div className="min-h-96 lg:hidden" />

          <div className="absolute h-full w-full left-0 top-0 overflow-hidden pointer-events-none select-none">
            <Image
              alt="grants"
              width={386}
              height={642}
              src={MobileBanner}
              className="absolute w-full h-full lg:hidden"
            />
            <Image
              alt="grants"
              height={346}
              width={1254}
              src={DesktopBanner}
              className="absolute w-full h-full max-lg:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrantsSection;
