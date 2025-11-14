import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
  import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from "react-router-dom";
   import 'react-toastify/dist/ReactToastify.css'


export const Contact = () => {
  const form = useRef();
  
let tost=(x)=>{
    toast.success(x)
  }

let navigate=useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1s74te6", "template_qwmtavp", form.current, {
        publicKey: "mfKY8YwDUPAa3VEpe",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          tost("Email Send successfully")
          navigate("/")
        
        },
        (error) => {
          toast.error(error)
          console.log("FAILED...", error.text);
          tost(error)
        }
      );
  };
  let navigateHome=()=>{
    navigate("/")
  }

 

  return (
    <>
  <button className="bg-red-600" >bbbbbbbbbbbb</button>

    <h1  className="from-h text-center text-5xl  text-[#2DE5E8] my-10">
            Contact Me
          </h1>
           <ToastContainer/>
    <div 
    >

      
      <span className="flex relative flex-col md:flex-row md:h-[600px] md:w-[75vw] p-1 rounded-2xl md:mx-auto md:bg-white md:items-center  md:gap-5">
      <div className=" w-[300px] h-full md:w-[50%] text-white  bg-[#00B8B0] overflow-hidden relative ps-7 rounded-3xl mx-auto pe-3 py-10 ">
        <h1 className="text-4xl my-2">Contact information</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum
          enim dig
        </p>
        <span className="flex flex-col mt-10 gap-10">
          <div className="flex gap-3 items-center ">
            <i className=" "><IoMdCall size={'25px'}/></i>
            <p > 6001426089</p>
            
          </div>
          <div className="flex gap-3 items-center">
            <i>< IoIosMail size={'25px'}/></i>
            <p>tomserali6500@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center pb-20 z-20">
            <i><MdPlace size={'25px'}/></i>
            <p>Pathsala,Bajali,Assam(India)</p>
          </div>
        </span>
        <span className="h-[200px] w-[200px] rounded-full inline-block absolute right-[-20px] bottom-[-20px] bg-[#77DAD5]"></span>
      </div>

      <div className="h-[544px] w-[300px] md:w-[50%] md:h-[600px] overflow-hidden relative  border md:border-none rounded-3xl mx-auto    my-10  ">
        <form ref={form} onSubmit={sendEmail} className=" mx-auto ">
          <RegisterForm/>
        </form>
      </div>
      </span>
    </div>
   
    </>
  );
};



export  function RegisterForm() {
  return (
    <div className="max-w-[350px] w-[100%] h-[544px]   bg-white p-6 rounded-2xl flex flex-col gap-4 pt-10">
      <h1 className="text-center p-4 text-4xl font-bold text-[#2DE5E8]">E-Mail </h1>
      {/* Title */}
      <span className=" absolute border p-2 rounded-xl right-1 top-0">
      <p className=" text-[15px] text-blue-600 font-semibold pl-8 relative">
       NOT Avilable
        <span className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></span>
        <span className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full animate-ping"></span>
      </p>
      </span>

    

      {/* First + Last Name */}
      <div className="flex gap-2 w-full">
        

        {/* Firstname */}
        <label className="relative w-full">
          <input
            type="text"
            required
            name="name"
            className="peer   w-full border-b focus:border-blue-400 border-gray-400   p-3 pt-5 outline-none  "
            placeholder=" "
          />
          <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300
            peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm
            peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
            peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-600">
            Firstname
          </span>
        </label>

        {/* Lastname */}
        <label className="relative w-full">
          <input
            type="text"
            required
            name="last"
            className="peer w-full border-b border-gray-400  p-3 pt-5 outline-none focus:border-blue-400"
            placeholder=" "
          />
          <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300
            peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm
            peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
            peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-600">
            Lastname
          </span>
        </label>

      </div>

      {/* Email */}
      <label className="relative w-full">
        <input
          type="email"
          name="email"
          required
          className="peer w-full border-b border-gray-400 p-3 pt-5 outline-none focus:border-blue-400"
          placeholder=" "
        />
        <span className="absolute left-3 top-0 text-gray-500 text-sm transition-all duration-300
          peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm
           peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
          peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-600">
          Email
        </span>
      </label>

      {/* Subject */}
      <label className="relative w-full">
        <input
          type="text"
          required
          name="subject"
          className="peer w-full border-b border-gray-400  p-3 pt-5 outline-none focus:border-blue-400"
          placeholder=" "
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300
          peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm
          peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
          peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-600">
          Subject
        </span>
      </label>

      {/* Text */}
      <label className="relative w-full">
        <textarea
          
        
          required
          name="message"
          className="peer w-full border-b border-gray-400  p-3 pt-5 outline-none focus:border-blue-400"
          placeholder=" "
        />
        <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all duration-300
          peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm
          peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500
          peer-valid:top-0 peer-valid:text-xs peer-valid:text-green-600">
          Message
        </span>
      </label>

      {/* Submit Button */}
     <ExploreButton/>

      

    </div>
  );
}


export  function ExploreButton() {
   
  return (
    <button
    
        type="submit" value="Send"
      className="inline-flex items-center md:mt-5 gap-3 font-semibold text-white rounded-full px-6 py-3 transition-colors duration-300 overflow-hidden"
      style={{ backgroundColor: "#7808d0" }}
    >
      {/* Icon Wrapper */}
      <span
        className="relative grid place-items-center w-6 h-6 rounded-full bg-white overflow-hidden"
        style={{ color: "#7808d0" }}
      >
        {/* Main Icon */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="12"
          className="main-icon transition-transform duration-300 ease-in-out"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        {/* Copy Icon */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="12"
          className="copy-icon absolute transition-transform duration-300 ease-in-out"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>

      Send Mail

      {/* Extra CSS inside component */}
      <style>{`
        button:hover {
          background-color: #000000 !important;
        }
        button:hover span {
          color: #000 !important;
        }
        .main-icon {
          transform: translate(0);
        }
        button:hover .main-icon {
          transform: translate(150%, -150%);
        }
        .copy-icon {
          transform: translate(-150%, 150%);
        }
        button:hover .copy-icon {
          transform: translate(0, 0);
        }
      `}</style>
    </button>
  );
}





  
