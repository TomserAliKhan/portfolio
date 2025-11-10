import React from 'react'


const Herosection = () => {
 let skils=[
    {name:"React", link:"https://www.svgrepo.com/show/452092/react.svg" },
    {name:"JS", link:"https://www.svgrepo.com/show/452045/js.svg" },
    {name:"HTML", link:"https://www.svgrepo.com/show/452228/html-5.svg" },
    {name:"CSS", link:"https://www.svgrepo.com/show/452185/css-3.svg" },
    {name:"Taiwind", link:"https://www.svgrepo.com/show/374118/tailwind.svg" },
    {name:"GSAP", link:"https://images.seeklogo.com/logo-png/44/2/greensock-gsap-icon-logo-png_seeklogo-448110.png" }
   
 ]

  return (
    <div className=' mx-auto mt-6 p-5  md:flex  items-center justify-center'>
         <span  className=' flex flex-col items-center justify-center '>
        <h1 className='text-5xl leading-tight font-extrabold text-[#2DE5E8] '>Frontend Devloper</h1>
        <p className='mt-3 text-[19px] text-yellow-50'>
           I build fast, accessible, and polished web interfaces using React, Tailwind CSS and modern JavaScript. I focus on UX-led designs and clean, maintainable code.
        </p>
        <div className='w-full grid grid-cols-3 gap-8  m-10 place-items-center '>
        {
            skils.map((m,i)=>{
               return( <div className=''>
                <div className='  h-16 w-16 bg-black/50 rounded-xl p-2 shadow-md shadow-cyan-500/50 '>
            <img src={m.link}  alt={m.name} />
        </div>
        </div>
               )
            })
        }
        </div>
       </span>

        <div className='  rounded-[20px] border-[5px] border-[#1a1919c2] overflow-hidden md:h-[550px] object-contain'>
        <img src="/TAK.png" alt="TAK" />
        </div>

    </div>
  )
}

export default Herosection