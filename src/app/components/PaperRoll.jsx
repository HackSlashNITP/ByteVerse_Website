"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PaperRoll = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const rotateImage = () => {
      setRotationAngle((prevAngle) => prevAngle + 1);
      requestAnimationFrame(rotateImage);
    };

    rotateImage();

    return () => cancelAnimationFrame(rotateImage);
  }, []);

  return (
    <main className="mt-20 py-8 bg-[#4A0000] flex justify-center">
      <div className="py-20 pb-40 flex flex-col align-middle w-[90vw] ">
        <img
          src="/PaperRoll.svg"
          className="absolute w-11/12 left-1/2 -translate-x-1/2 z-0 hidden lg:block"
        ></img>
        <div className="flex flex-row justify-center px-6 md:px-24 lg:px-60 pt-[6rem]">
          <motion.img
            src="/byteverse/weapon.svg"
            className="hidden lg:block w-32 m-auto"
            alt="Rotating Image"
            style={{
              zIndex: 10,
              opacity: 0.6,
            }}
            animate={{ rotate: rotationAngle }}
            transition={{ loop: Infinity, duration: 0.1 }}
          />
          <img
            src="/Byteverse24_Logo2.png"
            className="z-10 lg:m-auto px-10 opacity-60"
          ></img>
          <motion.img
            src="/byteverse/weapon.svg"
            className="hidden lg:block w-32 m-auto"
            alt="Rotating Image"
            style={{
              zIndex: 10,
              opacity: 0.6,
            }}
            animate={{ rotate: rotationAngle }}
            transition={{ loop: Infinity, duration: 0.1 }}
          />
        </div>
        <p className="lg:text-lg md:text-base text-sm font-semibold lg:pt-8 text-center z-20 text-white lg:text-[#350909] w-3/5 m-auto pt-16 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          aliquet gravida mi, sed bibendum diam fermentum a. Proin commodo enim
          sed augue rutrum imperdiet. Aliquam quis aliquam mi. Quisque vehicula
          porta bibendum. Nam vestibulum egestas orci, sit amet semper arcu
          imperdiet nec. Pellentesque facilisis justo vitae dui congue congue.
        </p>
      </div>
    </main>
  );
};

export default PaperRoll;
