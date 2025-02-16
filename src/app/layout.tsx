import type { Metadata } from "next";
import localFont from "next/font/local";

import Popup from "@/components/popup";
import { Toaster } from "@/components/ui/sonner";
import AnimatedCanvas from "@/components/animated-canvas";

import "./globals.css";
import TanstackProvider from "@/providers/tanstack-provider";

const monumentGrotesk = localFont({
  src: [
    {
      path: "../fonts/MonumentGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonumentGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MonumentGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-monument-grotesk",
});

export const metadata: Metadata = {
  title: "Flare is the blockchain for data",
  description:
    "Flare is the blockchain for data: an EVM-based layer 1 that gives developers secure decentralized access to high-integrity data from other chains and the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${monumentGrotesk.variable}`}>
        <TanstackProvider>
          {children}
          <Popup />
          <Toaster />
          <AnimatedCanvas />
        </TanstackProvider>
      </body>
    </html>
  );
}
