import React, { useEffect } from "react";
import { links } from "../Nav";
import { Link, NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
    
  
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
