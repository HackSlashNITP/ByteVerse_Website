"use client";
import React from "react";
import Image from "next/image";
import "./App.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import judges from "./judges.json";

const Judges = () => {
  return (
    <section id="judges">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
          position: "relative",
          background:
            "linear-gradient(180deg, rgb(72,0,0) 70%, rgb(114,0,0) 100%)",
        }}
      >
        <Image
          src="/byteverse/emeritus-judges.svg"
          width={1100}
          height={380}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          alt="Knife"
          style={{
            position: "absolute",
            zIndex: 1,
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="hide-scrollbar">
        {judges.map((judge, index) => (
          <div key={index} className="circle-container">
            <div className="image-container">
              <img
                style={{objectFit: "cover"}}
                src={judge.url}
                alt={`Judge ${index + 1}`}
                draggable="false"
                
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="social-icons gap-2 ">
                <div className=" text-white font-bold flex flex-col justify-center items-center ">
                  <p className=" text-xs ">{judge.name}</p>
                  <small>({judge.des})</small>
                </div>
                <div className="flex flex-row gap-2 justify-center items-center">
                  {judge.linkedin && (
                    <a
                      href={judge.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="z-{2} text-2xl text-white md:text-3xl "
                    >
                      <AiFillLinkedin />
                    </a>
                  )}
                  {judge.github && (
                    <a
                      href={judge.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" z-{2} text-2xl text-white md:text-3xl "
                    >
                      <AiFillGithub />
                    </a>
                  )}
                  {judge.twitter && (
                    <a
                      href={judge.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" z-{2} text-2xl text-white md:text-3xl "
                    >
                      <BsTwitterX />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Judges;
