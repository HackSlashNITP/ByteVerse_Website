import React from "react";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import PaperRoll from "./components/PaperRoll";
import Judges from "./components/judge";
import FooterSection from "./components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-[1500px] md:h-[1000px] gradient-bg p-5">
        <About />
      </div>
      <PaperRoll />
      <Judges />
      <FooterSection />
    </main>
  );
}
