"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import HomeNavbar from "./navbar/homeNav";
import HomeSidebar from "./sidebar/homeSideBar";


import arrowLeft from "@/../public/byteverse/hero/arrow.svg";
import Image from "next/image";

const HomeNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    if(!isOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'unset';
    }
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5, delay: 6 ,ease:"easeOut"}}
      className="w-full flex top-0 mx-6 z-[100] items-center justify-center fixed">
      <div hidden={!isOpen} className="h-[140vh] w-[100vw] fixed top-0 bg-[#54191962]" style={{zIndex:"110"}}  >
        <HomeSidebar toggle={toggle} open={isOpen}/>
        <div className="absolute right-0 h-[140vh] w-[100vw] " hidden={!isOpen} onClick={toggle}></div>
      </div>
      
      <HomeNavbar />

      <button className={`${isOpen ? 'rotate-0' : 'rotate-180'} cursor-pointer md:hidden block absolute active:invert left-0 ml-8 mt-8 top-0 transition-all duration-150`} onClick={toggle} style={{zIndex:"250"}}>
          <Image src={arrowLeft} alt="Back" className="p-1" />
      </button>
    </motion.div>
  );
};

export default HomeNavigation;