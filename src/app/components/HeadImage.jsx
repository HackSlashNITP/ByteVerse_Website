import Image from 'next/image'
import React from 'react'

const HeadImage = () => {
  return (
    <div className=' flex justify-center items-center h-[190px] w-[173px] ' >
         <Image
              src="/GroupFace.svg"
              alt="Head Logo"
              
              width={156}
              height={133}
             
            />
    </div>
  )
}

export default HeadImage