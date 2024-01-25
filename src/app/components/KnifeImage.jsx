import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const KnifeImage = () => {
  const [animationState1, setAnimationState1] = useState("initial");
  const [animationState2, setAnimationState2] = useState("initial");

  const variants1 = {
    initial: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    moveLeft: {
      opacity: 1,
      x: "-10vw",
      y: "-10vh",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 1,
      },
    },

    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };
  const variants2 = {
    initial: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    moveLeft: {
      opacity: 1,
      x: "10vw",
      y: "-10vh",
      transition: {
        duration: 0.6,
        ease: "easeOut",

        delay: 1,
      },
    },

    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
  };

  const handleAnimationComplete1 = () => {
    if (animationState1 === "initial") {
      setAnimationState1("moveLeft");
    } else if (animationState1 === "moveLeft") {
      setAnimationState1("center");
    } else {
      setAnimationState1("initial");
    }
  };
  const handleAnimationComplete2 = () => {
    if (animationState2 === "initial") {
      setAnimationState2("moveLeft");
    } else if (animationState2 === "moveLeft") {
      setAnimationState2("center");
    } else {
      setAnimationState2("initial");
    }
  };

  useEffect(() => {
    handleAnimationComplete1();
    handleAnimationComplete2();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-[200px]  h-[200px] rounded-full  p-4   ">
      <Image
        src="/byteverse/GroupFace.svg"
        alt="Head Logo"
        className=" p-2 absolute top-[2px] left-2 "
        width={156}
        height={133}
      />

      <div className="flex gap-2 justify-center items-center pt-14   ">
        <motion.div
          initial="initial"
          animate={animationState1}
          variants={variants1}
          onAnimationComplete={handleAnimationComplete1}
        >
          <Image
            src="/byteverse/leftKnife.svg" // Replace with the path to your second image
            alt="Left Knife"
            width={82}
            height={77}
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate={animationState2}
          variants={variants2}
          onAnimationComplete={handleAnimationComplete2}
        >
          <Image
            src="/byteverse/rightKnife.svg" // Replace with the path to your second image
            alt="Right Knife"
            width={82}
            height={77}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KnifeImage;
