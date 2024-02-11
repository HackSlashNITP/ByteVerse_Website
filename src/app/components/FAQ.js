// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const FAQ = () => {
//   const faqs = [
//     {
//       id: 0,
//       query: "What do I need to do to participate?",
//       ans: "Apply using Devfolio and join HackSlash Discord server",
//     },
//     {
//       id: 1,
//       query: "What can be the size of Team ?",
//       ans: "A team can consist of 1-4 members",
//     },
//     {
//       id: 2,
//       query: "Are there any registration charges ?",
//       ans: "Nope! None at all",
//     },
//     {
//       id: 3,
//       query: "Do we get any certificate for participation ?",
//       ans: "Yes, you do get a Certificate of Participation if your hack is submitted successfully",
//     },
//   ];
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="relative min-h-screen flex justify-center items-center ">
//       <div className="absolute inset-0 flex justify-center items-center">
//         <Image src={"/byteverse/sword.png"} height={500} width={500} />
//       </div>
//       <div className=" w-[1167px] h-[617px] flex flex-row justify-center items-center  border border-black ">
//         <div className=" w-[500px] h-[234px] flex flex-col justify-center items-start ">
//           <h2 className="text-3xl  mb-6  ">Frequently Asked Questions</h2>
//           <p className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus,
//             dignissimos at nostrum illum explicabo distinctio, sapiente, dolores
//             nihil magnam praesentium? Ipsam et facilis alias! Temporibus nam hic
//             consectetur tenetur.
//           </p>
//         </div>
//         <div className=" w-[511px] h-[671px] flex flex-col justify-center items-start border border-black p-5 ">
//           {faqs.map(({ id, query, ans }) => (
//             <div className="faq-container cursor-pointer md:w-full sm:w-full my-2 flex justify-start items-center ">
//               <div className="faq-section">
//                 <div className="flex flex-row items-start justify-start text-start gap-x-3">
//                   <div className="flex flex-col justify-start items-start">
//                     <div className="question flex flex-row justify-between items-center">
//                       <h3 className="faq-ques text-lg md:text-xs sm:text-xs font-normal">
//                         {query}
//                       </h3>
//                       <IoIosArrowDown
//                         className="indicator transition-transform font-bold md:text-[15px] sm:text-[15px] ml-[10px]"
//                         onClick={() => setOpen(!open)}
//                       />
//                     </div>
//                     {open && (
//                       <div className="answer hidden">
//                         <p className="faq-ans ml-[20px] text-xs md:text-[16px] sm:text-[16px] font-light text-start">
//                           {ans}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

"use client";
import React, { useState } from "react";
import Image from "next/image";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Accordion from "./Accordion";

const FAQ = () => {
  const faqs = [
    {
      id: 0,
      query: "What do I need to do to participate?",
      ans: "Apply using Devfolio and join HackSlash Discord server",
    },
    {
      id: 1,
      query: "What can be the size of Team?",
      ans: "A team can consist of 1-4 members",
    },
    {
      id: 2,
      query: "Are there any registration charges?",
      ans: "Nope! None at all",
    },
    {
      id: 3,
      query: "Do we get any certificate for participation?",
      ans: "Yes, you do get a Certificate of Participation if your hack is submitted successfully",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#4A0000] flex justify-center items-center">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <Image src={"/byteverse/sword.png"} height={500} width={500} />
      </div>
      <div className="z-10 w-full max-w-[1000px] h-auto flex flex-col md:flex-row justify-evenly items-center  p-5">
        <div className="w-full p-4  md:w-[300px]  flex flex-col justify-center items-start mb-6 md:mb-0 text-[#DEB889]  ">
          <h2 className="text-3xl mb-6 font-bold ">
            Frequently Asked Questions
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus,
            dignissimos at nostrum illum explicabo distinctio, sapiente, dolores
            nihil magnam praesentium? Ipsam et facilis alias! Temporibus nam hic
            consectetur tenetur.
          </p>
        </div>
        <div className="p-4 w-[400px]  rounded-lg">
          {faqs.map((faq) => (
            <Accordion key={faq.id} title={faq.query} answer={faq.ans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
