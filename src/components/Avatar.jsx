import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"


export let Avtar = () => {
  const containerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.fromTo(containerRef.current,{
      
        scale:0
      },{
        scale:1,
       
        scrollTrigger:{
          trigger:containerRef.current,
          start:"top 100%",
          
        }
      }
    )
  })




  return (
    <>
      <div
        id="avt"
        ref={containerRef}
        className="rounded-[20px] border-[5px] mx-2 border-[#1a1919c2] overflow-hidden :overflow-y-hidden w-[100vw] h-[395px] md:h-[550px] lg:h-[100vh] md:w-[500] "
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