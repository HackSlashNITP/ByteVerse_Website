"use client";

import { motion } from "framer-motion";

import TimelineNavigation from "./navigation/TimelineNav";
import Image from "next/image";
import Ground from "./groundTimeline";
import Baadal from "./Silverlines";

import bg1 from "@/../public/byteverse/hero/hero-background.svg";
import bg2 from "@/../public/byteverse/hero/Rectangle.svg";
import spear from "@/../public/byteverse/spear.svg";
import sun from "@/../public/byteverse/hero/sun.svg";
import themelogo from "@/../public/byteverse/themelogo.svg";

export default function ThemesHero() {
  return (
    <main
      id="home"
      className="relative flex min-h-screen w-full overflow-hidden flex-col items-center justify-center px-24 bg-[#720D0D]"
    >
      <TimelineNavigation />
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
      <div className="z-10 absolute flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 2.4 }}
          className="absolute bg-sun-gradient-radial rounded-full md:-mt-16 -mt-36 lg:p-20 md:p-10 p-0"
        >
          <Image
            alt="sun"
            src={sun}
            quality={100}
            className="lg:scale-[0.8] scale-[0.6]"
          />
        </motion.div>
        <motion.h1
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
          className="uppercase font-japanese absolute lg:text-8xl text-6xl md:mb-12 mb-32"
        >
            <Image
            alt="logo"
            src={themelogo}
            quality={100}
            className="scale-[0.6]"
            />

        </motion.h1>
        <motion.div
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, type: "spring" }}
        >
          <Image
            alt="spike"
            src={spear}
            className="lg:scale-[0.8] scale-[0.7] lg:translate-y-1/2 translate-y-2/3 md:opacity-100 opacity-0"
          />
        </motion.div>
      </div>
      <Ground />
    </main>
  );
}
