import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div onClick={toggleAccordion} className="p-2 mb-4 border border-[#FFFFFF]  text-[#DEB889] rounded-md ">
      <div className="flex justify-between w-full">
        <span>{title}</span>
        <span>
          {accordionOpen ? (
            <CiCircleMinus className="text-2xl" />
          ) : (
            <CiCirclePlus className="text-2xl" />
          )}
        </span>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "grid-rows-[auto] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#DEB889]">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
