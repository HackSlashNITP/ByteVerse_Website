// pages/about.js
"use client";
import React from "react";
import Card from "./card";
import AboutIamge from "./AboutIamge";
import KnifeImage from "./KnifeImage";

const About = () => {
  return (
    <section id="about" className="flex flex-col  md:justify-start items-center   h-screen  ">
      <div className=" m-10    ">
        <AboutIamge />
      </div>
      <div className="flex flex-col  gap-5 p-10 md:flex-row relative justify-center items-center ">
        <Card
          img="HackSlashlogo.svg"
          width={180}
          height={180}
          instagram="https://instagram.com/hackslash.nitp/"
          linkedin="https://www.linkedin.com/company/hackslash/mycompany/"
        />

        <Card
          img="Gdsclogo.png"
          width={385}
          height={450}
          instagram="https://www.instagram.com/gdscnitp/"
          linkedin="https://www.linkedin.com/company/gdscnitp/"
        />
        <div className="flex flex-col items-center justify-center w-[200px] h-[200px] bg-[#4A0000] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <KnifeImage />
        </div>
      </div>
    </section>
  );
};

export default About;
