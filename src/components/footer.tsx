import Link from "next/link";
import Image from "next/image";
import AnimatedCanvas from "./animated-canvas";
import Logo from "@/assets/images/logo-light.svg";
import { SOCIALS } from "@/lib/constants";

const navigationLinks = [
  {
    link: "https://flare.network/privacy-policy/",
    title: <>Terms &amp; Privacy</>,
  },
  {
    link: "https://flare.network/media/",
    title: <> Media &amp; Branding</>,
  },
  {
    link: "https://flare.network/team/",
    title: "Team",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[linear-gradient(180deg,#fff_0,rgba(255,255,255,0.05)_85%,rgba(255,255,255,.0956757703)_100%)] isolate">
        <div className="py-10 px-6 lg:px-0 max-w-screen-xl mx-auto after:-z-[2]">
          <div className="min-h-80 flex flex-col justify-end items-center gap-6 lg:flex-row lg:items-end lg:justify-between relative z-10 text-white">
            <div className="flex lg:items-center gap-20">
              <Link href="/" className="max-lg:self-start">
                <Image src={Logo} alt="logo" width={99} height={33} />
              </Link>

              <nav className="lg:hidden">
                <ul className="flex flex-col gap-6 text-sm lg:hidden py-2">
                  {navigationLinks.map(({ link, title }, idx) => (
                    <li key={idx}>
                      <Link href={link}>{title}</Link>
                    </li>
                  ))}
                  <li>&copy; Flare Network</li>
                  <li>2025</li>
                </ul>
              </nav>

              <nav className="max-lg:hidden">
                <ul className="flex items-center gap-8 text-sm">
                  <li>&copy; Flare Network 2025</li>
                  {navigationLinks.map(({ link, title }, idx) => (
                    <li key={idx}>
                      <Link href={link}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-center gap-2 lg:gap-4">
              {SOCIALS.map(({ icon, link, name }) => (
                <Link
                  key={name}
                  href={link}
                  title={name}
                  target="_blank"
                  rel="noopener"
                >
                  <Image src={icon} alt={name} width={24} height={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <AnimatedCanvas />
    </>
  );
};

export default Footer;
