"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import ArrowIcon from "@/assets/images/arrow.svg";
import SearchIcon from "@/assets/images/search.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { MOBILE_NAVIGATION, SOCIALS_WITH_DARK_ICONS } from "@/lib/constants";

const MobileMenu = () => {
  return (
    <div className={cn("relative py-12 px-7 space-y-6")}>
      <Accordion type="single" collapsible className="w-full">
        {MOBILE_NAVIGATION.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              className="text-[20px] space-y-2"
              value={item.label}
            >
              <AccordionTrigger>{item.label}</AccordionTrigger>
              <AccordionContent className="space-y-4">
                {item.content.map((content, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="text-[20px] text-[#E62058]">
                        {content.label}
                      </div>
                      <ul className="ml-6 space-y-4">
                        {content.links.map((link, index) => {
                          return (
                            <li key={index}>
                              <Link
                                href={link.link}
                                className="text-[#9b9b9b] hover:text-[#E62058] transition"
                              >
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="w-full border border-current rounded-md pl-11 p-4 text-[16px] placeholder:text-[#667085] placeholder:text-sm hover:outline-none focus-visible:outline-none"
        />
        <Image
          src={SearchIcon}
          alt="logo"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        />
        <Image
          src={ArrowIcon}
          alt="link"
          width={16}
          height={16}
          className="absolute right-2 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        />
      </div>

      <button className="w-full p-3 text-white bg-[#242425] rounded-full text-[20px] text-center hover:bg-[#E62058] transition">
        Connect Wallet
      </button>

      <div className="flex items-center justify-between gap-2 py-6">
        {SOCIALS_WITH_DARK_ICONS.map(({ icon, link, name }) => (
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
  );
};

export default MobileMenu;
