"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import Link from "next/link";

export default function Sidebar({ open, toggle }) {
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
      className="md:hidden flex w-[101vw] h-screen bg-black absolute top-0 left-0 p-36 font-japanese text-lg whitespace-nowrap"
    >
      <motion.ul
        variants={frameVariants}
        animate={open ? "visible" : "hidden"}
        className="flex flex-col h-full w-full text-white justify-between items-center"
      >
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
        >
          <Link
            to="home"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
          onClick={toggle}
        >
          <Link
            to="about"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            About Us
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
          onClick={toggle}
        >
          <Link
            to="timeline"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Timeline
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
          onClick={toggle}
        >
          <Link
            to="rules"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Rules
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
          onClick={toggle}
        >
          <Link
            to="sponsors"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Sponsors
          </Link>
        </motion.li>
        <motion.li
          variants={navbarItemVariant}
          className="md:hover:text-white/80 group transition-all cursor-pointer"
          onClick={toggle}
        >
          <Link
            to="contact"
            onClick={toggle}
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
