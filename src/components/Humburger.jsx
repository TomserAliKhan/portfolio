import React, { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

export const Humburger = ({links,setHum}) => {






  


   let clas='hover:text-orange-600 hi'
  return (
    <div className=" absolute w-[100%] h-[300px] left-0 top-[-540px]  bg-[#323331]   "  >
    <div className="flex flex-col items-center  justify-center gap-4 text-2xl">
      <Link onClick={()=>setHum(true) }>
        <FaXmark size='30px'  className=" absolute right-[28px] top-[13px]" />
        </Link>
      {
       
      links.map((j, i) => {
        return (
        <NavLink 
            key={i}
            to={j.path}
             className={({isActive })=> `${isActive? 'active':""} ${clas}`  } 
          >
            {j.name}
          </NavLink>
        );
      })
      }
    </div>
    <div className="h-60  " onClick={()=>setHum(true)}>

    </div>
    </div>
   
  );


  
};

// onClick={()=>setHum((s)=>!s)}