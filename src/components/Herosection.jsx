import React from 'react'
import About from './routes/About'
import Skill from './routes/Skill'
import { Avtar } from './Avatar'

const Herosection = () => {
  return (
    <>
    <div className=' md:flex justify-between '>
        <span className='lg:my-10 lg:flex lg:flex-col  '>
        <About/>
        <Skill/>
        </span>
       
          <Avtar/>
        
    </div>
    </>
  )
}

export default Herosection