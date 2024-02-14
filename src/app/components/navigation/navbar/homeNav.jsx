import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function HomeNavbar() {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY) setIsTop(false);
    else setIsTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`md:flex hidden xl:px-64 lg:px-40 px-24 w-full xl:h-28 md:h-24 items-center font-japanese xl:text-2xl lg:text-xl text-lg uppercase whitespace-nowrap transition-all duration-300 bg-gradient-to-b to-transparent ${
        isTop ? "from-transparent" : "from-black/80"
      }`}
    >
      <ul className="flex w-full text-white justify-between">
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <ScrollLink
            href="/"
            to="home"
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Home
          </ScrollLink>
        </li>
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <ScrollLink
            to="about"
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            About Us
          </ScrollLink>
        </li>
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <Link
            href="/timeline"

            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Timeline
          </Link>
        </li>
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <ScrollLink
            to="rules"
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Rules
          </ScrollLink>
        </li>
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <ScrollLink
            to="sponsors"
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Sponsors
          </ScrollLink>
        </li>
        <li className="md:hover:text-white/80 group transition-all cursor-pointer">
          <ScrollLink
            to="contact"
            className="md:group-hover:border-white border-transparent border-b-2 pb-1 px-1 transition-all duration-300"
          >
            Contact Us
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}