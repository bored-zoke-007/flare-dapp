import Link from "next/link";
import Image from "next/image";

import ImageOne from "@/assets/images/community/img-1.png";
import ImageTwo from "@/assets/images/community/img-2.jpg";
import ImageSix from "@/assets/images/community/img-6.jpg";
import ImageFour from "@/assets/images/community/img-4.jpg";
import ImageFive from "@/assets/images/community/img-5.jpg";
import ImageNine from "@/assets/images/community/img-9.jpg";
import ImageThree from "@/assets/images/community/img-3.jpg";
import ImageSeven from "@/assets/images/community/img-7.jpg";
import ImageEight from "@/assets/images/community/img-8.jpg";

import { SOCIALS } from "@/lib/constants";

const CommunitySection = () => {
  return (
    <section id="community">
      <div className="space-y-10 py-20">
        <h3 className="text-[42px] lg:text-[46px] tracking-tight leading-tight text-center">
          Join the Flare community
        </h3>

        <div className="h-[470px] max-w-full overflow-hidden">
          <div className="w-[7680px] h-full flex gap-5 scrolly [&>]:h-full">
            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageOne}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="bg-[#242425] p-12 flex items-center justify-center">
                <div className="w-full flex justify-center gap-5 flex-wrap">
                  {SOCIALS.map(({ icon, link, name }) => (
                    <Link
                      key={name}
                      title={name}
                      href={link}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={icon} width={24} height={24} alt={name} />
                      <span className="sr-only">{name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden relative">
                <Image
                  src={ImageTwo}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageThree}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageFour}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="overflow-hidden relative">
                <Image
                  src={ImageFive}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#242425] text-white p-16 flex items-center justify-center text-center">
                <Link
                  href="https://flare.network/events"
                  className="text-[29px] tracking-tight leading-tight"
                >
                  Join us <br />
                  at one of our <br />
                  future events
                </Link>
              </div>
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageSix}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageSeven}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="overflow-hidden relative">
                <Image
                  src={ImageEight}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#242425] p-12 flex items-center justify-center">
                <div className="w-full flex justify-center gap-5 flex-wrap">
                  {SOCIALS.map(({ icon, link, name }) => (
                    <Link
                      key={name}
                      title={name}
                      href={link}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={icon} width={24} height={24} alt={name} />
                      <span className="sr-only">{name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageNine}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageOne}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="bg-[#242425] p-12 flex items-center justify-center">
                <div className="w-full flex justify-center gap-5 flex-wrap">
                  {SOCIALS.map(({ icon, link, name }) => (
                    <Link
                      key={name}
                      title={name}
                      href={link}
                      target="_blank"
                      rel="noopener"
                    >
                      <Image src={icon} width={24} height={24} alt={name} />
                      <span className="sr-only">{name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden relative">
                <Image
                  src={ImageTwo}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageThree}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageFour}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="overflow-hidden relative">
                <Image
                  src={ImageFive}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#242425] text-white p-16 flex items-center justify-center text-center">
                <Link
                  href="https://flare.network/events"
                  className="text-[29px] tracking-tight leading-tight"
                >
                  Join us <br />
                  at one of our <br />
                  future events
                </Link>
              </div>
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageSix}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[611px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageSeven}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-[305px] grid grid-rows-2 gap-5 [&>div]:rounded-[6px]">
              <div className="overflow-hidden relative">
                <Image
                  src={ImageFive}
                  alt=""
                  width={305}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#242425] text-white p-16 flex items-center justify-center text-center">
                <Link
                  href="https://flare.network/events"
                  className="text-[29px] tracking-tight leading-tight"
                >
                  Join us <br />
                  at one of our <br />
                  future events
                </Link>
              </div>
            </div>

            <div className="w-[305px] rounded-[6px] overflow-hidden">
              <Image
                src={ImageSix}
                alt=""
                width={611}
                height={470}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
