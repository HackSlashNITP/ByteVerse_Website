import react from "react";
import Image from "next/image";
import paperRollImg from "@/../public/byteverse/hero/PaperRoll.svg";
import SponserCard from "./sponserCard";
const Category=(props)=>{
    
    let companies=props.items;
    // console.log(companies)
    // const createCard=(e)=>{
    //     console.log("Hello")
    //     return <sponserCard company={e.company} imgurl={e.url} />
        
    // }

    return (
        <div className="flex flex-col justify-center items-center" >
        <div className="w-max mx-auto relative my-10">
            <Image src={paperRollImg} className="w-auto h-[20vw] lg:h-[10vw]" alt={"roll"} style={{width:"auto",justifySelf:"start"}} />
            <div className="absolute top-[35%]  w-full flex justify-center">
            <p className="  left-[50%] right-[50%] font-japanese text-black text-[1rem] md:text-[2rem]">{props.title}</p>
            </div>
            
        </div>
        {/* <div className="flex flex-wrap justify-center align-center md:gap-10 gap-5 py-5 px-5">
        <div className="h-[6rem] w-[10rem] lg:h-[11rem] lg:w-[20rem] bg-white rounded-lg flex justify-center items-center">
            <img src="/sponsers/titleSponsers/postman.png" alt="sponser" className="lg:h-[8rem] h-[4rem] w-auto" />
        </div>
    </div> */}
        <div className="flex flex-wrap justify-center align-center md:gap-[4rem] gap-5 py-5 md:px-10 px-5">
            {companies.map((e,i)=><SponserCard {...e} key={i} />)}
            </div>
            
        </div>
    );

}
export default Category;