// pages/about.js
"use client";
import React from "react";
import Card from "./card";
import AboutIamge from "./AboutIamge";
import KnifeImage from "./KnifeImage";
import DCard from "./Dcard";
import GCard from "./Gcard";
const About = () => {
  return (
    <main id="about" className="flex flex-col  md:justify-start items-center   h-screen  ">
      <div className=" md-10"> 
        <AboutIamge />
      </div>
      <div className=" mt-4 flex flex-col md:flex-row  justify-evenly items-center  ">
        <Card
        />
        </div>
        <div className="m-4"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-evenly items-center">
        <GCard />
        <DCard />
        </div>
  

    </main>
  );
};

export default About;