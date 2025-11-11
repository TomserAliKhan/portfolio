import React from 'react'
import Skill from './routes/Skill'


const Herosection = () => {


  return (
    <div className=' mx-auto pt-6  lg:p-0  lg:h-[75vh] overflow-hidden md:flex  lg:mx-5  items-center justify-center '>
      <Skill/>

               <div className='rounded-[20px] border-[5px] mx-2  lg:relative lg:top-28 border-[#1a1919c2] overflow-hidden lg:overflow-y-hidden w-[100vw] h-[395px]  md:h-[550px] lg:h-[800px] md:w-[500]'>
                  <img src="/TAK.png" alt="TAK logo" className='w-full sm:h-[600px] md:h-full h-full object-cover' loading="lazy" />
                </div>

    </div>
  )
}

export default Herosection