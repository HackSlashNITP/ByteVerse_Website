"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import byte from "@/../public/byteverse/hero/byte.svg";
import erse from "@/../public/byteverse/hero/erse.svg";
import v from "@/../public/byteverse/hero/v.svg";
import sun from "@/../public/byteverse/hero/sun.svg";

export default function Logo() {
  return (
    <motion.div
      initial={{ scale: 3.3 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 0.3,
        delay: 1.5,
        ease: "circOut",
      }}
      className="flex object-contain w-full justify-center md:items-center"
    >
      <motion.div
        initial={{ filter: "invert(0%)" }}
        animate={{ filter: "invert(100%)" }}
        transition={{ duration: 0.2, delay: 3 }}
        className="flex justify-center lg:gap-36 gap-20 items-center w-max h-fit z-20 md:translate-y-4 translate-y-6"
      >
        <motion.div
          initial={{ x: -350 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.3,
            delay: 0.4,
          }}
          className="md:scale-x-75 md:scale-y-75 w-1/2"
        >
          <Image alt="byte" src={byte} quality={100} className="w-max" />
        </motion.div>
        <motion.div
          initial={{ x: 350 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.2,
            delay: 0.4,
          }}
          className="md:scale-x-75 md:scale-y-75 w-1/2"
        >
          <Image alt="erse" src={erse} quality={100} className="w-max" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: -800 }}
        animate={{ y: 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 7 }}
        className="absolute bg-sun-gradient-radial rounded-full md:-mt-16 -mt-36 lg:p-20 md:p-10 p-0"
      >
        <Image
          alt="sun"
          src={sun}
          quality={100}
          className="lg:scale-[0.8] scale-[0.6]"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0.8 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.2, delay: 0.4 }}
        className="z-30 lg:w-max w-2/3 md:mt-6 -mt-2 absolute"
      >
        <Image alt="v" src={v} quality={100} />
      </motion.div>
    </motion.div>
  );
}
