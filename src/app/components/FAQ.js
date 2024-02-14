"use client";
import React from "react";
import Image from "next/image";

import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      id: 0,
      query: "What do I need to do to participate?",
      ans: "Apply using Devfolio and join HackSlash Discord server",
    },
    {
      id: 1,
      query: "What can be the size of Team?",
      ans: "A team can consist of 1-4 members",
    },
    {
      id: 2,
      query: "Are there any registration charges?",
      ans: "Nope! None at all",
    },
    {
      id: 3,
      query: "Do we get any certificate for participation?",
      ans: "Yes, you do get a Certificate of Participation if your hack is submitted successfully",
    },
  ];

  return (
    <div
      className="relative min-h-screen flex justify-center items-center"
      style={{
        background:
        "linear-gradient(180deg, #200000 0%, #4a0000 50% , #730d0d 100%)",
        // background:
        //   "linear-gradient(180deg, rgb(114,0,0) 0%,  rgb(172,0,0) 70%, #9f0b0b 100%)",
      }}
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image src={"/byteverse/sword.png"} height={500} width={500} />
      </div>
      <div className="z-10 w-full max-w-[1000px] h-auto flex flex-col md:flex-row justify-evenly items-center  p-5">
        <div className="w-full p-4  md:w-[300px]  flex flex-col justify-center items-start mb-6 md:mb-0 text-[#DEB889]  ">
          <h2 className="text-3xl mb-6 font-bold ">
            Frequently Asked Questions
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus,
            dignissimos at nostrum illum explicabo distinctio, sapiente, dolores
            nihil magnam praesentium? Ipsam et facilis alias! Temporibus nam hic
            consectetur tenetur.
          </p>
        </div>
        <div className="p-4 sm:w-full md:w-[400px] rounded-lg">
          {faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.query} answer={faq.ans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
