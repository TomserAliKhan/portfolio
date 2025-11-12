import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useLocation } from 'react-router-dom'

const Skill = () => {
   let skils=[
      {name:"React", link:"/react.svg" },
      {name:"JS", link:"/JS.svg" },
      {name:"HTML", link:"/html-5.svg" },
      {name:"CSS", link:"/css-3.svg" },
      {name:"Tailwind", link:"/tailwind.svg" },
      {name:"GSAP", link:"/GSAP.png"}
     
   ]

   let location=useLocation()
 
  
   

   useGSAP(()=>{
      let sk=gsap.timeline()
      sk.from("#ski",{
         y:30,
         opacity:0,
         delay:1
      })
      .from(".skillItems",{
         x:-70,
         opacity:0,
      
         stagger:0.1
      })

   })
  return (
     <span  className={`${location.pathname==='/skill'?"h-screen lg:w-[50%]   justify-start mx-auto items-center":' justify-center'} flex flex-col items-center  lg p-5
 `}>
         
       
        <h1 id='ski' className='pl-4 leading-tight lg:ms-11 text-4xl self-start font-extrabold text-[#2DE5E8]'>Skills</h1>
        <div className='w-full grid grid-cols-3 gap-8  m-4 mt-9 place-items-center '>
         

        {
            skils.map((m,i)=>{
               return( <div key={i} className='skillItems'>
                <div className='  h-16 w-16 bg-black/50 rounded-xl p-2 shadow-md shadow-cyan-500/50 '>
            <img src={m.link}  alt={m.name} />
        </div>
        </div>
               )
            })
        }
        </div>
       </span>
  )
}

export default Skill