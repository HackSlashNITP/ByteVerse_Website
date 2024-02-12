import React from "react";
import FooterSection from "../components/footer";
import About from "../components/AboutUs";

import Judges from "../components/judge";
import Hero from "../components/Hero";
import PaperRoll from "../components/PaperRoll";
import Sponsors from "../components/sponsor/sponsors";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <main id="home" className="bg-[#720D0D]">
      <Hero />
      <div id="about" className="  h-[1500px] md:h-[1000px] gradient-bg  p-5">
        <About />
      </div>

<PaperRoll />


      <Judges />
      <Sponsors />
      <FAQ />
      <FooterSection />
    </main>
  );
};

export default HomePage;
