import React from "react";
import FooterSection from "../components/footer";
import About from "../components/AboutUs";

import Judges from "../components/judge";
import Hero from "../components/Hero";
import PaperRoll from "../components/PaperRoll";
import Sponsors from "../components/sponsor/sponsers";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <main id="home" className="bg-[#720D0D]">
      <Hero />
      <div id="about" className="  h-[1500px] md:h-[1000px] gradient-bg  p-5">
        <About />
      </div>
      {/* <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          About Us Section
        </h1>
      </div> */}
      {/*<div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          Judges Section
        </h1>
    </div>*/}

      <PaperRoll />
      <Judges />

      <FAQ />
      {/* <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          Footer
        </h1>
      </div> */}
      <Sponsors />
      <FooterSection />
    </main>
  );
};

export default HomePage;
