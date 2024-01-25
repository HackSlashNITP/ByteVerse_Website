import Image from "next/image";
import React from "react";

const AboutIamge = () => {
  return (
    <div>
      <Image
        src="/byteverse/aboutus.png"
        alt="About US Logo"
       
        width={1050}
        height={192}
        priority={true}
      />
    </div>
  );
};

export default AboutIamge;
