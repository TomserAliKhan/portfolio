import React, { useEffect, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";


export const Humburger = ({links,setHum,hum}) => {

useEffect(()=>{
  if (hum==true){
 let humTl=gsap.timeline()
 humTl.to('#humbox',{
  y:340,
  duration:0.5,
 })
 .from('.navhumitem,#humx',{
  x:50,
  opacity:0,
  stagger:0.1
})

 

}else{
   let humTl=gsap.timeline()
 humTl.to('#humbox',{
  y:-350,
  duration:0.7,
 })


}

},[hum])







  


   let clas='hover:text-orange-600 navhumitem'
  return (
    <div id="humbox" className={` absolute w-[102%]  h-[300px] left-[-8px] top-[-350px]  bg-[#323331]  `} >
    <div  className=" flex flex-col items-center  justify-center gap-4 text-2xl">
      <span id="humx" className="w-10 h-10 cursor-pointer absolute right-[28px] top-[13px]" onClick={()=>{setHum(false) }}>
        <FaXmark size='30px'  className=" " />
        </span>
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
   

  
    </div>
   
  );


  
};
