import React, { useEffect } from "react";
import { links } from "../Nav";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
const Footer = () => {
    
    useEffect(()=>{
        let footTl=gsap.timeline({
            scrollTrigger: {
            trigger: "footer",
            start: 'top 70%',
            end: 'bottom top',
         
            markers: false}
        })
        footTl.fromTo('footer',{x:-200},{x:0})
        .fromTo('.fi',{
            x:-300,
            opacity:0
         
           
           
        },{x:0, 
          opacity:1,
         stagger:0.1,})
        .fromTo('.fi2',{
            x:-200,
          opacity:0
          
           
           
        },{
            x:0, 
            opacity:1,
         stagger:0.1,})
    },[])
  return (
    <footer className="w-[80vw] mx-auto p-5 flex md:justify-evenly bg-slate-500 justify-around mt-6 rounded-3xl text-white" >
      <div className="flex flex-col gap-2">
        {links.map((j, i) => {
          return (
            <NavLink
              key={i}
              to={j.path}
              className={`${({ isActive }) =>
                isActive ? "active" : ""} text-xl  fi`}
            >
              {j.name}
            </NavLink>
          );
        })}
      </div>

      <div className="flex flex-col justify-center gap-5 ">
          <Link to='https://github.com/TomserAliKhan/' className='hover:text-white fi2 '>
                            <FaGithub size={'30px'} />
                        </Link>
                        <Link to='https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=tomser-ali-khan-a09853386' className='hover:text-white fi2'>
                            <SiLinkedin size={'30px'}/>
                        </Link>
      </div>

    </footer>
  );
};

export default Footer;
