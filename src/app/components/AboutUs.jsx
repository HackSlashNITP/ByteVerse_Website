// pages/about.js
"use client";
import React from "react";
import Card from "./card";
import AboutIamge from "./AboutIamge";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const About = (props) => {

  const desco_link = "";
  const desco_insta = "";

  
  const gdsc_link = "";
  const gdsc_insta = "";

  return (
    <main id="about" className="flex flex-col  md:justify-start items-center   h-screen  ">
      <div className=" md-10"> 
        <AboutIamge />
      </div>
      <div className=" mt-4 flex flex-col md:flex-row  justify-evenly items-center  ">
        <Card
        />
        </div>
        <div className="m-14 flex flex-col md:space-y-2 md:flex-row justify-evenly items-center">
        <div className="bg-[#541E1E] w-10/10 md:w-3/5 lg:w-2/5 h-9/10 flex flex-col p-5 rounded-lg shadow-md md:p-10">
      <div className="flex flex-col items-center pt-10 sm:pt-10">
        <div className="flex flex-col items-center">
        <Image
            className="object-contain mt-8"
            src={`/byteverse/Gdsclogo.png`}
            alt=" Logo"
            width={385}
            height={385}
          />
        </div>
        <div className="w-full">
          <p className="md:pt-8 text-white text-justify">
            Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. adipiscing elit.
            consectetur adipiscing elit. ... used as a placeh
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-2 p-3">
          <Link href={gdsc_insta} target="_blank">
            <div className="text-white hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={30} />
            </div>
          </Link>
          <Link href={gdsc_link} target="_blank">
            <div className="text-white hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
     <div className="mt-4"></div>
    <div className="bg-[#541E1E] w-10/10 md:w-3/5 lg:w-2/5 h-9/10 flex flex-col rounded-lg shadow-md md:p-10">
      <div className="flex flex-col items-center pt-10 sm:pt-10">
      <div className=" flex flex-col items-center">
        <Image
            className="object-contain mt-8"
            src={`/byteverse/desco.png`}
            alt=" Logo"
            width={140}
            height={140}
          />
        </div>
        <div className="w-full">
          <p className=" md:pt-8 text-white text-justify">
            Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. adipiscing elit.
            consectetur adipiscing elit. ... used as a placeh
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-2 p-3">
          <Link href={desco_insta} target="_blank">
            <div className="text-white hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={30} />
            </div>
          </Link>
          <Link href={desco_link} target="_blank">
            <div className="text-white hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
        </div>
    </main>
  );
};

export default About;