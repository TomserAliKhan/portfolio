import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { ReactTyped } from "react-typed";



const About = () => {
 
useGSAP(()=>{
  let tlabout=gsap.timeline()

  tlabout.from("#big",{
    y:-40,
    opacity:0,
    duration:0.5
  })
 .from("#wiriting",{
    x:-40,
    opacity:0,
    duration:0.5
  })
 .from("#p",{
    x:40,
    opacity:0,
    duration:0.5
  })
})

  
  return (
    <div className=' flex flex-col items-center justify-center p-5 overflow-x-hidden'>

       <h1 id='big' style={{lineHeight:"43px"}} className='text-[45px] translate-x-[-25px] leading-8  font-extrabold text-[#2DE5E8] self-start '>&lt;Frontend&gt;<br />
       <span className='ms-[2rem]'>&lt;&#47;Devloper&gt;</span> </h1>
       <h1 id='wiriting' className='text-white self-start mt-5 whitespace-nowrap text-2xl font-bold
       '> I am &#160;
         <ReactTyped className='text-orange-600' strings={["<i>ForntEnd Devloper </i>"]} typeSpeed={100}
         backSpeed={100}
         
         loop /> 

      </h1>
        <p id='p' className='my-6 text-[19px] text-yellow-50 '>
           I build fast, accessible, and polished web interfaces using React, Tailwind CSS and modern JavaScript. I focus on UX-led designs and clean, maintainable code.
        </p>
        
      
        
       
    </div>
  )
}

export default About

