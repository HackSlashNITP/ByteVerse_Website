"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import CountdownUI from "../components/countdownUI";
import Image from "next/image";
import Navigation from "./navigation";
import Logo from "./Logo";
import Ground from "./Ground";
import Baadal from "./Silverlines";
import Body from "./Body";

import bg1 from "@/../public/byteverse/hero/hero-background.svg";
import bg2 from "@/../public/byteverse/hero/Rectangle.svg";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="relative flex min-h-screen overflow-hidden flex-col items-center justify-center px-24">
      <Navigation />
      <Image
        alt="bg-1"
        src={bg1}
        quality={100}
        fill
        sizes="100vh 100vw"
        className="object-cover"
        style={{
          zIndex: "5",
          width: "100%",
        }}
      />
      <Image
        alt="bg-2"
        src={bg2}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          mixBlendMode: "color-burn",
          zIndex: "5",
        }}
      />
      <Baadal />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: [100, -20, 0] }}
        transition={{ duration: 0.6, delay: 4.9, ease: "easeOut" }}
        className="md:-translate-y-2 -translate-y-20 w-5/6 flex flex-col items-center justify-center gap-5 absolute z-50"
      >
        <Logo />
        <Body />
      </motion.div>
      <Ground />
    </main>
  );
}
