import React, { useState } from "react";
import {BrowserRouter as Router ,Route,Routes,Link} from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header=()=>{
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const links=[
    {
      id:"1",
      name:"Home",
      link:"/"
    },
    {
      id:"2",
      name:"About",
      link:"/About"
    },
    
    {
      id:"3",
      name:"Log In",
      link:"/RegistrationForm"
    },
    {
      id:"4",
      name:"Sign In",
      link:"/"
    },
    {
      id:"5",
      name:"Feedback",
      link:"/Feedback"
    },
    {
      id:"6",
      name:"Registration Form",
      link:"/RegistrationForm"
    },
    
  
  ]
  return(
    <div className="p-[30px] shadow-xl text-black z-50 ">
      <div className="max-w-[1200px] mx-auto flex items-center font-semibold text-[18px]">
        <div className="w-[200px] font-extrabold text-[28px] text-[#f05537] ml-[40px]">
        <Link to="/">Eventify</Link>
        </div>
        <nav className="hidden md:flex list-none gap-10 ml-auto mr-[35
        px] text-[18px] text-[#39364f] font-semibold ">
            
                
                 
                 {links.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:bg-[rgba(0,0,0,0.1)] rounded p-1 flex items-center gap-2"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
          </nav>
          {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden absolute right-[35px]'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
     

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r  border-r-gray-900 bg-white ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] fixed duration-500  top-0 bottom-0 left-[-100%] z-50'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#f05537] m-4'>Eventify</h1>

        {/* Mobile Navigation Items */}
        {links.map((item) => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          > <Link to={item.link}>{item.name}</Link>
          
          </li>
        ))}
      </ul>

      </div>

    </div>

  );

}
export default Header;