"use client"

import Image from "next/image";
import { useRef } from 'react';
import { Montserrat, Inter, Hina_Mincho } from "next/font/google";
import Link from "next/link";
let insta = "/byteverse/footer/Instagram.svg";
let twit = "/byteverse/footer/TwitterX.svg";
let yt = "/byteverse/footer/YouTube.svg";
let lin = "/byteverse/footer/LinkedIn.svg";
let cr = "/byteverse/footer/Copyright.svg";
let terms = "/byteverse/footer/tnc.svg";
let qr = "/byteverse/footer/Qr.svg";
let discord = "/byteverse/footer/Discord.svg";
let byteverse = "/byteverse/footer/byteverse.svg";
let hackslash = "/byteverse/footer/Hackslash.svg";
let desco = "/byteverse/footer/Desco.svg";
import emailjs from '@emailjs/browser';

const FooterSection = () => {
  
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    let errors = [];
    if(!e.target.name.value) {
      errors.push('Name is required');
    }
    if(!e.target.email.value) {
      errors.push('Email is required');
    } else if(!/\S+@\S+\.\S+/.test(e.target.email.value)) {
      errors.push('Invalid email');
    }
    if(!e.target.body.value) {
      errors.push('Message is required');
    }
    if(errors.length > 0) {
      alert(errors);
      return;
    }

    emailjs.sendForm('service_4xof41n', 'template_m3gqswk', form.current, 'j4VDfmgF44mtyVqA8')
      .then(result => {
        console.log(result);
      }, error => {
        console.log(error);  
      });
    form.current.reset();
    alert("Form submitted!");
  };

  return (
    <div
      id="contact"
      className="h-[140vh] font-[Inter] flex flex-col bg-cover bg-no-repeat "
      style={{ backgroundImage: "url(/byteverse/footer/footerbg.png)" }}
    >
      <div className="h-[115vh] flex md:justify-end md:items-end md:p-5 lg:pr-36 justify-center items-center">
        <form
          onSubmit={sendEmail}
          ref={form}
          className=" px-10 md:px-0 flex flex-col gap-2 sm:gap-4 lg:w-[25vw] w-[100%] text-slate-700 lg:text-sm text-[0.8rem] "
        >
          <div className="text-white flex lg:text-4xl text-2xl font-japanese ">
            CONTACT US{" "}
          </div>
          <div className="flex gap-2 sm:gap-5 ">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="py-2 md:pl-5 pl-2  rounded-md md:rounded-lg w-[30%] focus:outline 
                    focus:outline-rose-500
                    focus:outline-offset-2 focus:outline-2"
            />
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className=" focus:outline-none py-2 pl-5 rounded-md md:rounded-lg focus:outline w-[70%]
                    focus:outline-rose-500
                    focus:outline-offset-2 focus:outline-2"
            />
          </div>
          <textarea
            className="rounded-md md:rounded-lg py-2 pl-5 h-[10vh] lg:h-[20vh] resize-none   focus:outline-none focus:outline 
                    focus:outline-rose-500
                    focus:outline-offset-2 focus:outline-2"
            re
            placeholder="Write your message"
            name="body"
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className=" bg-slate-200 w-24 rounded-md md:rounded-lg p-[0.4rem] hover:bg-red-800 hover:text-white text-slate-500"
            >submit </button>
          </div>
        </form>
      </div>
      <div className="lg:grid-cols-3 grid grid-row-3 h-[25vh]  ">
        <div className="flex lg:justify-end flex-col lg:items-start items-center lg:pl-7 lg:pb-5 lg:my-0 my-10">
          <div className="flex items-center ">
            <img
              src="/byteverse/footer/nitplogo.svg"
              alt=""
              className="md:h-16 h-12 "
            />
            <div className=" lg:w-[18vw] w-[60vw]  ml-5  font- lg:font-semibold text-[0.8rem]">
              Student Activity Center(SAC), NIT Patna Ashok Rajpath, Patna,
              Bihar - 800005
            </div>
          </div>
          <div className="flex justify-center gap-10 items-center mt-5">
            <Link
              href={
                "https://www.instagram.com/hackslash_nitp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              }
              target="_blank"
            >
              <img src={insta} className=" h-5 " />
            </Link>
            <Link href={"https://twitter.com/hackslash_nitp"} target="_blank">
              <img src={twit} className="  h-5 " />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/hackslash/mycompany/"}
              target="_blank"
            >
              <img src={lin} className=" h-6 " />
            </Link>
            <Link
              href={"https://www.youtube.com/@HackSlashDevelopersClub"}
              target="_blank"
            >
              <img src={yt} className=" h-5 " />
            </Link>
          </div>
        </div>
        <div className=" justify-self-center lg:self-end">
          <div className="flex gap-3 items-center mb-8  ">
            <img src={cr} alt="" />
            <img src={byteverse} alt="" className="h-8 lg:h-auto" />
            <div className="bg-white h-8 w-[2px]"></div>
            <div className="text-sm">NIT Patna 2024</div>
          </div>
        </div>
        <div className="flex  flex-col mt-5 lg:mt-0 items-center md:justify-end lg:items-end gap-6">
          <div className="flex flex-col gap-2 lg:mr-16    ">
            <div className="flex items-center gap-5 ">
              <img src={discord} alt="" className="h-6" />
              <div className="text-[10px]">Join us @Discord</div>
            </div>
            <div className="flex items-center gap-5">
              <img src={terms} alt="" className="h-6" />
              <div className="text-[10px]">Terms and Conditions</div>
            </div>
            <div className="flex items-center gap-5">
              <img src={qr} alt="" className="h-6" />
              <div className="text-[10px]">Code of Conduct</div>
            </div>
          </div>
          <div className="flex gap-4 mr-8">
            <div className="flex flex-col items-center">
              <img src={hackslash} alt="" />
              <div className="ml-6 text-[12px] text-neutral-400">Hosted by</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={desco} alt="" />
              <div className="text-[12px] text-neutral-400">Designed by</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
