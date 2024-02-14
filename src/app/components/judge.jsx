"use client"
import React from "react";
import Image from "next/image";
import "./App.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import judges from "./judges.json";
const Judges = () => {
  return (
    <section id="judges" className="flex flex-col">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55vh",
          position: "relative",
          background:
            "linear-gradient(180deg, rgb(72,0,0) 70%, #4A0000 100%)",
        }}
      >
        <Image
          src="/byteverse/emeritus-judges.svg"
          width={1100}
          height={380}
          draggable={false}
          alt="Knife"
          style={{
            position: "absolute",
            
            maxWidth: "90%",
            height: "auto",
            zIndex:"10"
          }}
        />
      </div>
      <div className="bg-[#4A0000] flex flex-col">
      <Carousel
      type="judge"
        plugins={[
          Autoplay({
            duration:2000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-4/5 sm:w-5/6 self-center h-full z-10"
      >
        <CarouselContent className="w-full h-full " >
          {judges.map((judge, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/4 lg:basis-1/4 w-full h-full "
            >
              <div className="w-full h-full ">
                <Card className="w-full h-full rounded-b-xl ">
                  <CardContent className="flex items-center justify-center md:w-full w-full h-96 flex-col ">
                    <div className="w-full md:h-1/2 h-1/3 overflow-hidden ">
                      <img
                        src={judge.url}
                        alt={`judge ${index}`}
                        className="object-cover w-full object-top " style={{zIndex:"10"}}
                      />
                    </div>
                    <div className=" border-white  border-solid border-b justify-between flex flex-col border-x h-1/2 w-full pl-2 pt-3" style={{zIndex:"10"}}>
                      <div>
                        <h1 className="text-white font-lato font-semibold">{judge.name}</h1>
                        <h2 className="text-[#D1A878] font-medium">{judge.des}</h2>
                      </div>
                      <p className="text-[#D1A878]">{judge.role}</p>
                      <div className="flex gap-3 pb-4">
                      {judge.linkedin && (
                    <a
                      href={judge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-[2] text-2xl text-white md:text-3xl "
                    >
                      <AiFillLinkedin />
                    </a>
                  )}
                  {judge.github && (
                    <a
                      href={judge.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" z-[2] text-2xl text-white md:text-3xl "
                    >
                      <AiFillGithub />
                    </a>
                  )}
                  {judge.twitter && (
                    <a
                      href={judge.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" z-[2] text-2xl text-white md:text-3xl "
                    >
                      <BsTwitterX />
                    </a>
                  )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline"/>
  <CarouselNext variant="outline" />
      </Carousel>
      </div>
    </section>
  );
};

export default Judges;
