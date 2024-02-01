import Image from 'next/image'
import cloud1 from "@/../public/byteverse/hero/baadal1.svg";
import cloud2 from "@/../public/byteverse/hero/baadal2.svg";
import cloud3 from "@/../public/byteverse/hero/baadal3.svg";

export default function Baadal() {
    return(
        <div className='flex flex-col lg:w-full w-3/4 h-fit z-0 absolute inset-y-14'>         
             <Image
                alt='cloud3'
                src={cloud3}
                quality={100}
                className="scale-90 translate-x-[53vw] "
            />
            <Image
                alt='cloud2'
                src={cloud2}
                quality={100}
                className="scale-90 translate-x-[60vw] "
            />
            <Image
                alt='cloud1'
                src={cloud1}
                quality={100}
                className="scale-90 translate-x-[36vw] "
            />
        </div>
    )
}
