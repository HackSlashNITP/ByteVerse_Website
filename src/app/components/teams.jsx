"use client";
import * as React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, Tabs } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import teamKnife from "@/../public/byteverse/team-sword.svg";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import teams from "./teams.json"
import judges from "./judges.json";
import Autoplay from "embla-carousel-autoplay"

export default function Teams() {

  const [listt, setListt] = React.useState(teams.Leads);

  React.useEffect(() => {
    console.log(teams.Leads);
  },[])

  const handlenav = (value) => {
    console.log(value);
  
    const allTeams = Object.values(teams).flat(); 
    const filteredTeams = allTeams.filter(team => {
      return team.group === value;
    });
  
    console.log(filteredTeams);
    setListt(filteredTeams)
  };
  


  return (
    <div className="flex flex-col items-center h-fit gap-6 team-grad pb-20 md:pt-0 pt-20">
      <Image src={teamKnife} className="" style={{ scale: "80%" }} />
      <Tabs handlenav={handlenav} />
      <Carousel
        type="teams"
        plugins={[
          Autoplay({
            duration:1600,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-5/6"
      >
        <CarouselContent>
          {listt.map((item, index) => (
            <CarouselItem
              key={index}
              className={`basis-1/2 sm:basis-1/3 lg:pl-6 pl-1 relative  ${
                "team" + index
              }`}
            >
              <div className="p-1 flex w-full items-center justify-center">
                <Card className="rounded-full relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:size-64">
                  <CardContent className=" flex h-full relative overflow-hidden rounded-full border-[#C89E6D] border-solid border">
                    <img
                      src={item.photo}
                      alt={`teams`}
                      className="object-cover rounded-full h-full absolute scale-75 -right-6 md:-right-9"
                    />
                    <div className="border-[#C89E6D] border-solid border rounded-full relative h-full w-full scale-90 -right-3 md:-right-4 lg:-right-6">
                      <a className="relative lg:top-28 md:top-20 right-4 sm:top-16 top-12 md:text-4xl text-3xl bg-white">
                        <AiFillGithub style={{ fill: "#C89E6D" }} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="gap-1 flex flex-col py-2 leading-3">
                <CardTitle className=" text-xl text-center md:text-2xl ">
                  {item.name}
                </CardTitle>
                <CardTitle className=" text-xs text-center md:text-base text-[#C89E6D]">
                  Web Lead
                </CardTitle>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious variant="teams" />
        <CarouselNext variant="teams" />
      </Carousel>
    </div>
  );
}
