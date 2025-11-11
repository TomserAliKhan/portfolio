import React, { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Humburger = ({links,setHum}) => {

useGSAP(()=>{
  let tl=gsap.timeline()
  tl.from('#box',{
    y:-300,
    duration:0.5,
    opacity:0
  })
  .from('.hi,#x',{
    y:-20,
    delay:0.1,
    opacity:0,
    duration:0.5,
    stagger:0.1
  })

})




  


   let clas='hover:text-orange-600 hi'
  return (
    <div id="box" className=" absolute w-[102%]  h-[300px] left-[-8px] top-[-10px]  bg-[#323331]   "  >
    <div  className=" flex flex-col items-center  justify-center gap-4 text-2xl">
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
    <div className="h-60  " id="x" onClick={()=>setHum(true)}>

    </div>
    </div>
   
  );


  
};

// onClick={()=>setHum((s)=>!s)}