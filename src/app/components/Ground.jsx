'use client'

import { motion } from "framer-motion";

import Image from "next/image";
import ninja from "@/../public/byteverse/hero/ninja.svg";
import castle from "@/../public/byteverse/hero/castle.svg";
import base from "@/../public/byteverse/hero/ground.svg";

export default function Ground() {
  return (
    <motion.div
      initial={{ scale: 3, }}
      animate={{ scale: 1.02 }}
      transition={{ duration: 0.8, delay: 5, type: 'spring', bounce: 0.15 }}
      className="flex flex-col w-full absolute bottom-0 right-0 justify-center z-10 -space-y-8 md:-mb-12 mb-0">
      <div className="flex justify-between w-screen items-end xl:px-24 lg:px-12 px-4 ">
        <Image
          alt="ninja"
          src={ninja}
          quality={100}
          className="w-40 md:w-48 lg:w-64"
        />
        <Image
          alt="castle"
          src={castle}
          quality={100}
          className="w-44 md:w-56 lg:w-72"
        />
      </div>
      <Image
        alt="ground"
        src={base}
        quality={100}
        className="w-screen object-cover max-h-48 md:-mb-10 mb-0"
      />
    </motion.div>
  );
}
