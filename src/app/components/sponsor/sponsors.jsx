import React from "react";
import Image from "next/image";
import rightKnife from "@/../public/byteverse/judgesKnife.svg";
import Category from "./category";
import slist from "./sponsors.json"
const Sponsors=()=>{
    return(
        <>
            <div id="sponsors" className="w-full flex flex-col items-center">
                <Image src={rightKnife} className="" style={{scale:"80%"}} />
                <Category title="TITLE SPONSORS" items={slist["title-sponsors"]} />
                <Category title="ASSOCIATE SPONSORS" items={slist["associate-sponsors"]} />
                <Category title="SUBEVENT SPONSORS" items={slist["sub-event-sponsors"]} />
                
            </div>
        </>
    );
}
export default Sponsors;