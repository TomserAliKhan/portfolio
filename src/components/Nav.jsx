import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Home from './routes/Home'
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import {  useState } from 'react';
import { Humburger } from './Humburger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
 export const links = [
        { name: "Home", path: "/" }, 
        { name: "Skill", path: "/skill" },
        { name: "Project", path: "/project" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Resume", path: "/resume" }
    ]

const Nav = () => {
    let css='navVal'
  

    const [hum, setHum] = useState(false)
      useGSAP(()=>{
           let tiNav=gsap.timeline()
           tiNav.from("nav",{
            y:-50,
            opacity:0,
            delay:0.2

           })
           .from('#logo,#logo2,.navVal',{
            y:-30,
             opacity:0,
             duration:0.4,
             stagger:0.1
           })
           
           .from('#hum',{
             y:-30,
             opacity:0,
             duration:0.4,
             
           },'-=1')
           
        })
    return (
      

        <>

            <nav className='z-40 bg-[rgba(255,255,255,0.04)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.04)] md:text-[20px] text-[#2DE5E8] h-14 w-full  rounded-3xl mt-2 mx-2 md:h-20 flex justify-between px-7 sticky items-center '>
                <div  className='  flex gap-5'>
                    <div id='logo' className='h-10 w-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 flex justify-center  items-center font-semibold  text-white'>TA</div>
                    <h2 id='logo2' className='text-2xl flex  gap-2'> T.A.K</h2>
                     </div>
                 <div  className=' md:flex gap-8 justify-end w-[60%] items-center hidden '>
                        {
                            links.map((j, i) => {
                                
                                return (
                                    <NavLink key={i}
                                        to={j.path}
                                        className={`${({isActive })=> isActive? 'active':""} ${css} `}
                                        
                                        
                                    >{j.name}</NavLink>
                                )
                            })

                        }

                        <Link to='https://github.com/TomserAliKhan/' className='hover:text-white navVal'>
                            <FaGithub />
                        </Link>
                        <Link to='https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=tomser-ali-khan-a09853386' className='hover:text-white navVal'>
                            <SiLinkedin />
                        </Link>




                    </div>
               
               
<div id='hum' onClick={()=>setHum(true)} className='md:hidden ' >
 
       <Link className='cursor-pointer'>
        <RxHamburgerMenu size='33px'/>
        </Link>

</div>


     <Humburger links={links} setHum={setHum} hum={hum}/> 


            </nav>
        </>
    )
}

export default Nav