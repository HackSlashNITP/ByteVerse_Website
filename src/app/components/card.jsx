import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div className="bg-[#541E1E] w-full md:w-[80vw] h-auto md:h-[300px] flex flex-col p-5 rounded-lg shadow-md md:p-10">
      <div className="flex flex-col md:flex-row pt-20 sm:pt-20 md:pt-10 ">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex flex-col">
          <Image
            className="mx-auto mt-16"
            src={`/byteverse/hack.png`}
            alt=" Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="w-full md:w-7/10 px-10">
          <p className="md:pt-8 text-white text-justify">
            Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. adipiscing elit.
            consectetur adipiscing elit. ... used as a placeh
            Lorem ipsum dolor sit amying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available. adipiscing elit.
            consectetur adipiscing elit. ... used as a placeh
          </p>
        </div>
        <div className="w-7/10 mb-6 md:w-1/20 flex flex-row md:flex-col justify-center items-center pt-5 gap-2">
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

export default Card;