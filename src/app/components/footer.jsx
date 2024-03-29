"use client";

import Image from "next/image";
import { useRef } from "react";
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
let gdsc = "/byteverse/footer/gdsc-logo.webp";
import emailjs from "@emailjs/browser";

const FooterSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let errors = [];
    if (!e.target.name.value) {
      errors.push("Name is required");
    }
    if (!e.target.email.value) {
      errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(e.target.email.value)) {
      errors.push("Invalid email");
    }
    if (!e.target.body.value) {
      errors.push("Message is required");
    }
    if (errors.length > 0) {
      alert(errors);
      return;
    }

    emailjs
      .sendForm(
        "service_4xof41n",
        "template_m3gqswk",
        form.current,
        "j4VDfmgF44mtyVqA8"
      )
      .then(
        (result) => {
          // console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    form.current.reset();
    alert("Form submitted!");
  };

  return (
    <div className="footer-grad  ">
      <div
        id="contact"
        className="h-[140vh] font-[Inter] flex flex-col bg-cover bg-no-repeat  "
        style={{}}
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
              placeholder="Write your message"
              name="body"
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className=" bg-slate-200 w-24 rounded-md md:rounded-lg p-[0.4rem] hover:bg-red-800 hover:text-white text-slate-500"
              >
                submit{" "}
              </button>
            </div>
          </form>
        </div>
        <div className="lg:grid-cols-3 grid grid-row-3 h-[58vh]   ">
          <div className="flex lg:justify-end flex-col lg:items-start items-center lg:pl-7 lg:pb-5 lg:my-0 my-10">
            <div className="flex items-center ">
              <Image
                height={50}
                width={50}
                src="/byteverse/footer/nitplogo.svg"
                alt=""
                className="md:h-16 h-12 "
              />
              <div className=" lg:w-[18vw] w-[60vw] text-white  ml-5  font- lg:font-semibold text-[0.8rem]">
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
                <Image width={30} height={30} src={insta} className=" h-5 " />
              </Link>
              <Link href={"https://twitter.com/hackslash_nitp"} target="_blank">
                <Image width={30} height={30} src={twit} className="  h-5 " />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/hackslash/mycompany/"}
                target="_blank"
              >
                <Image width={30} height={30} src={lin} className=" h-6 " />
              </Link>
              <Link
                href={"https://www.youtube.com/@HackSlashDevelopersClub"}
                target="_blank"
              >
                <Image width={30} height={30} src={yt} className=" h-5 " />
              </Link>
            </div>
          </div>
          <div className=" justify-self-center lg:self-end">
            <div className="flex gap-3 items-center mb-8  ">
              <Image width={20} height={20} src={cr} alt="" />
              <Image
                width={120}
                height={120}
                src={byteverse}
                alt=""
                className="h-8 lg:h-auto"
              />
              <div className=" h-8 w-[2px]"></div>
              <div className="text-sm text-white ">NIT Patna 2024</div>
            </div>
          </div>
          <div className="flex  flex-col mt-5 lg:mt-0 items-center md:justify-end lg:items-end gap-6">
            <div className="flex flex-col gap-2 lg:mr-16    ">
              <div className="flex items-center gap-5 ">
                <Image
                  width={30}
                  height={30}
                  src={discord}
                  alt=""
                  className="h-6"
                />
                <Link
                  href={"https://discord.gg/Es29vwFc"}
                  alt={"Discord Link"}
                  target="_blank"
                >
                  <div className="text-[10px] text-white ">
                    Join us @Discord
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-5">
                <Image
                  width={30}
                  height={30}
                  src={terms}
                  alt=""
                  className="h-6"
                />
                <div className="text-[10px] text-white ">
                  Terms and Conditions
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Image width={30} height={30} src={qr} alt="" className="h-6" />
                <div className="text-[10px] text-white ">Code of Conduct</div>
              </div>
            </div>
            <div className="flex gap-4 mr-8">
              <div className="flex flex-col items-center">
                <Image width={100} height={100} src={hackslash} alt="" />
                <div className="ml-6 text-[12px] text-neutral-400">
                  Hosted by
                </div>
              </div>
              <div className="flex flex-col items-center   ">
                <div className="flex gap-2 ">
                  <Image width={30} height={30} src={desco} alt="" />
                  <Image width={30} height={30} src={gdsc} alt="" />
                </div>
                <div className="text-[12px] text-neutral-400 text-center">
                  Designed by
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
