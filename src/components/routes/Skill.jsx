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
         
       
        <h1 className='pl-4 leading-tight lg:ms-11 text-4xl self-start font-extrabold text-[#2DE5E8]'>Skills</h1>
        <div className='w-full grid grid-cols-3 gap-8  m-4 mt-9 place-items-center '>
         

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