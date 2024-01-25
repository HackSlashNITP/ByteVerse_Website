import React from "react";
import FooterSection from "../components/footer"
import About from "../components/AboutUs";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <main className="bg-[#ffd4d4]">
      <Hero />
      <div className=" bg-[#4A0000] h-[1500px] md:h-[1000px] p-5">
        <About />
      </div>
      {/* <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
      
        <h1 className="text-4xl text-slate-700 items-center text-center">
          About Us Section
        </h1>
      </div> */}
      <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          PaperRoll Section
        </h1>
      </div>
      <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          Judges Section
        </h1>
      </div>
      {/* <div className="h-48 w-full my-10 shadow-xl bg-[#ffd4d4]  shadow-black">
        <h1 className="text-4xl text-slate-700 items-center text-center">
          Footer
        </h1>
      </div> */}
      <FooterSection />

    </main>
  );
};

export default HomePage;
