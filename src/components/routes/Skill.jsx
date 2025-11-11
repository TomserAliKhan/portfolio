import React from 'react'

const Skill = () => {
   let skils=[
      {name:"React", link:"/react.svg" },
      {name:"JS", link:"/JS.svg" },
      {name:"HTML", link:"/html-5.svg" },
      {name:"CSS", link:"/css-3.svg" },
      {name:"Tailwind", link:"/tailwind.svg" },
      {name:"GSAP", link:"/GSAP.png"}
     
   ]
  return (
     <span  className=' flex flex-col items-center justify-center lg p-5
 '>
        <h1 className='text-5xl leading-tight font-extrabold text-[#2DE5E8] '>Frontend Devloper</h1>
        <p className='mt-3 text-[19px] text-yellow-50'>
           I build fast, accessible, and polished web interfaces using React, Tailwind CSS and modern JavaScript. I focus on UX-led designs and clean, maintainable code.
        </p>
        <div className='w-full grid grid-cols-3 gap-8  m-10 place-items-center '>
        {
            skils.map((m,i)=>{
               return( <div key={i} className=''>
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