import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import {  useState } from 'react';
import { Humburger } from './Humburger';


const Nav = () => {
    const links = [
        { name: "Home", path: "/" }
        , { name: "Skill", path: "/skill" },
        { name: "Project", path: "/project" },
        { name: "About", path: "/about" },
        { name: "Resume", path: "/resume" }
    ]

    const [hum, setHum] = useState(true)
    return (
        
        <>

            <nav className='z-40 bg-[rgba(255,255,255,0.04)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.04)] md:text-[20px] text-[#2DE5E8] h-14 w-full  rounded-3xl mt-2 mx-2 md:h-20 flex justify-between px-7 sticky items-center '>
                <div className='  flex gap-5'>
                    <div className='h-10 w-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 flex justify-center  items-center font-semibold  text-white'>TA</div>
                    <h2 className='text-2xl flex  gap-2'> T.A.K</h2>
                     </div>
                 <div className=' md:flex gap-8 justify-end w-[60%] items-center hidden '>
                        {
                            links.map((j, i) => {
                                
                                return (
                                    <NavLink key={i}
                                        to={j.path}
                                        className={({isActive })=> isActive? 'active':""  }
                                        
                                        
                                    >{j.name}</NavLink>
                                )
                            })

                        }

                        <Link to='#' className='hover:text-white '>
                            <FaGithub />
                        </Link>
                        <Link to='#' className='hover:text-white '>
                            <SiLinkedin />
                        </Link>




                    </div>
               
               
<div onClick={()=>setHum((s)=>!s)} className='md:hidden' >
 
       <Link >
        <RxHamburgerMenu size='33px'/>
        </Link>

</div>

{
    !hum && <Humburger links={links} setHum={setHum}/> 
}

            </nav>
        </>
    )
}

export default Nav