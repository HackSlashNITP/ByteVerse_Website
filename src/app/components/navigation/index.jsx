"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import arrowLeft from "@/../public/byteverse/hero/arrow.svg";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 6 }}
      className="w-full flex top-0 mx-6 z-50 items-center justify-center fixed">

      <Sidebar toggle={toggle} open={isOpen}/>
      <Navbar />

      <button className={`${isOpen ? 'rotate-0' : 'rotate-180'} cursor-pointer md:hidden block absolute active:invert left-0 ml-8 mt-8 top-0 transition-all duration-150`} onClick={toggle}>
          <Image src={arrowLeft} alt="Back" className="p-1" />
      </button>
    </motion.div>
  );
};

export default Navigation;
