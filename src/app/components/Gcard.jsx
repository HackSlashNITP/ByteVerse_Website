import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const GCard = (props) => {
  return (
    <div className="bg-[#541E1E] w-9/10 md:w-3/5 lg:w-2/5 h-auto flex flex-col p-5 rounded-lg shadow-md md:p-10">
      <div className="flex flex-col items-center pt-10 sm:pt-10">
        <div className="w-3/4 flex flex-col items-center">
        <Image
            className="object-contain mt-16"
            src={`/byteverse/gdsclogo.png`}
            alt=" Logo"
            width={350}
            height={350}
          />
        </div>
        <div className="w-full">
          <p className="md:pt-8 text-white text-justify">
            Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. adipiscing elit.
            consectetur adipiscing elit. ... used as a placeh
          </p>
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-2 p-5">
          <Link href={`${props.instagram}`} target="_blank">
            <div className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={30} />
            </div>
          </Link>
          <Link href={`${props.linkedin}`} target="_blank">
            <div className="hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GCard;