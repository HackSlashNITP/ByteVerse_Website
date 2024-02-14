"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function HomeSidebar({ open, toggle }) {
  const frameVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navbarItemVariant = {
    visible: {
      y: 0,
      transition: {
        duration: 0.2,
        type: "spring",
      },
    },
    hidden: { y: 50 },
  };
  return (
    <motion.div
      initial={{ x: -750 }}
      animate={{ x: open ? 0 : -750 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="md:hidden flex w-[80vw] h-screen bg-black absolute top-0 left-0 p-20 pt-28 font-japanese text-xl  whitespace-nowrap" style={{zIndex:"200"}}
    >
      <motion.ul
        variants={frameVariants}
        animate={open ? "visible" : "hidden"}
        className="flex flex-col h-full w-full text-white gap-7 justify-start items-center"
      >
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <ScrollLink
            to="home"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Home
          </ScrollLink>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <ScrollLink
            to="about"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            About Us
          </ScrollLink>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <Link
            href="/timeline"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Timeline
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <ScrollLink
            to="rules"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Rules
          </ScrollLink>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <ScrollLink
            to="sponsors"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Sponsors
          </ScrollLink>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <ScrollLink
            to="contact"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Contact Us
          </ScrollLink>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}