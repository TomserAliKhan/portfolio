import React, { useRef } from "react"
import gsap from "gsap"


export let Avtar = () => {
  const containerRef = useRef(null)



  return (
    <>
      <div
        id="avt"
        ref={containerRef}
        className="rounded-[20px] border-[5px] mx-2 border-[#1a1919c2] overflow-hidden lg:overflow-y-hidden w-[100vw] h-[395px] md:h-[550px] lg:h-[800px] md:w-[500]"
      >
        <img
          src="/TAK.png"
          alt="TAK logo"
          className="w-full sm:h-[600px] md:h-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </>
  )
}