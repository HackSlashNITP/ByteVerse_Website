// pages/about.js
"use client";
import React from "react";
import Card from "./card";
import AboutIamge from "./AboutIamge";
import KnifeImage from "./KnifeImage";
import HCard from "./Dcard";
import GCard from "./Gcard";
const About = () => {
  return (
    <section id="about" className="flex flex-col  md:justify-start items-center   h-screen  ">
      <div className=" m-10    ">
        <AboutIamge />
      </div>
      <div className="flex flex-col md:flex-row  justify-evenly items-center  ">
        <Card
          width="50" // replace with the desired width
          height="50"
          title="Our Mission"
          description="To provide a platform for the exchange of knowledge and ideas in the field of cybersecurity and to create a community of like-minded individuals."
        />
        </div>
        <div className="m-4"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-evenly items-center md:space-x-4">
        <GCard />
  <HCard />

</div>
    </section>
  );
};

export default About;