import Image from "next/image";

import timeline from "@/../public/byteverse/timeline.svg";
import zen from "@/../public/byteverse/zen.svg";

const Schedule = () => {
  return (
    <section id="schedule" className="flex flex-col items-center justify-center w-full h-max relative py-36" style={{background: "linear-gradient(to bottom, #000000, #570d01 65%, #0C0C0C 65%, #570d01 97%, #9E2001"}}>
        <h2 className="uppercase font-japanese md:text-7xl text-5xl">Schedule</h2>
        <Image
            alt="timeline"
            src={timeline}
            className="w-full p-10 z-10"
        />
        <Image alt="zen" src={zen} className="w-full absolute top-1/2"/>
    </section>
  )
}

export default Schedule