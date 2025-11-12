import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Project = () => {

  const pri = useRef([])

  useEffect(() => {
   
    pri.current.forEach((el) => {
      if (!el) return
      gsap.fromTo(
        el,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom top',
         
            markers: false,
          
          },
        }
      )
    })


    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
  

  let projects=[
    {img:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",
      header:"Portfolio Website",
      summary:"A sleek personal portfolio built with React and Tailwind CSS. Features a smooth scrolling interface, responsive layout, and dark UI theme."
    },
    {img:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",
      header:"Portfolio Website",
      summary:"A sleek personal portfolio built with React and Tailwind CSS. Features a smooth scrolling interface, responsive layout, and dark UI theme."
    },
    {img:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",
      header:"Portfolio Website",
      summary:"A sleek personal portfolio built with React and Tailwind CSS. Features a smooth scrolling interface, responsive layout, and dark UI theme."
    },
    {img:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",
      header:"Portfolio Website",
      summary:"A sleek personal portfolio built with React and Tailwind CSS. Features a smooth scrolling interface, responsive layout, and dark UI theme."
    },
    {img:"https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565_960_720.png",
      header:"Portfolio Website",
      summary:"A sleek personal portfolio built with React and Tailwind CSS. Features a smooth scrolling interface, responsive layout, and dark UI theme."
    },
  ]

  return (
    <>
    
      <h1 className='text-[#2DE5E8] text-3xl text-center font-semibold my-10'> <span className='text-white'>Featured</span> Projects</h1>
     <div  className='mx-2 flex flex-col md:grid md:grid-cols-2 md:my- gap-3 md:gap-0  md:gap-y-10 lg:grid-cols-3'>

        {
          projects.map((p, i) => {
            return (
              <div
                key={i}
                ref={(el) => (pri.current[i] = el)}
                className="item max-w-[400px] mx-auto overflow-hidden border-[4px] md:w-[350px] lg:w-[400px] border-gray-600 rounded-2xl"
              >
                <img
                  className="w-full max-w-[400px] h-auto lg:w-full md:max-w-[800px] rounded-2xl"
                  src={p.img}
                  alt={p.header}
                />
                <h2 className="text-3xl m-2 text-white">{p.header}</h2>
                <p className="text-white m-2 text-justify py-3">{p.summary} </p>
                <div className="flex items-center justify-between m-5 ">
                  <GetStartedButton text={"Live Demo"} />
                  <GetStartedButton text={"GitHub"} />

                </div>
              </div>
            )
          })
        }

        
      
     
       
    </div>
    
    </>
  )
}

export default Project











const GetStartedButton = ({text}) => {
  return (
    <button
      className="
        uppercase font-normal tracking-[1.2px] text-white text-[0.7rem] leading-[14px]
        h-10 px-6 transition-all duration-200 ease-in-out
        bg-gradient-to-r from-[#1c1c1c] to-[#6220fb]
        border-0 overflow-hidden
        [clip-path:polygon(0_0,0_0,100%_0,100%_0,100%_calc(100%-15px),calc(100%-15px)_100%,15px_100%,0_100%)]
        hover:px-7 hover:transition-all hover:duration-300 hover:ease-in
        rounded-[4px]
      "
    >
      {text}
    </button>
  );
};




