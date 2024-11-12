import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import FlyoutLink from "./FlyoutLink";
//import Home from "../pages/Home";
//import Home from "./Home"; 
// import AchievementsPage from "./About/Achievement";
import AboutContent from "./AboutContent";
import TeamContent from "./TeamContent";
import JoinusContent from "./JoinusContent";
import ContactContent from "./ContactContent";
// import Login from "../pages/Login";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#010B13] p-4 text-white shadow-lg">
      <div className="max-w-[1600px] flex items-center justify-between mx-auto py-[15px]">
        <h2 className="text-xl md:text-2xl font-bold ml-4">
          RISING SUN <span className="text-[#FFD700]">FA</span>
        </h2>
        <div className="hidden md:flex items-center space-x-6">
        
        <Link to="/home" className="text-lg">Home</Link> 
                
        <FlyoutLink href="#" FlyoutContent={AboutContent} className="text-sm md:text-base">
            About
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={TeamContent} className="text-sm md:text-base">
       
            Team
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={JoinusContent} className="text-sm md:text-base">
            Join Us
          </FlyoutLink>
          <FlyoutLink href="#" FlyoutContent={ContactContent} className="text-sm md:text-base">
            Contact
          </FlyoutLink>
        </div>
        <div className="hidden md:block">
  <Link to="/login">
    <button className="rounded-sm bg-[#FFD700] px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-[#B5D53E]">
      Login
    </button>
  </Link>
</div>

        <div className="md:hidden text-white text-2xl">
          {isMenuOpen ? (
            <AiOutlineClose onClick={toggleMenu} className='text-white text-2xl md:hidden block'/>
          ) : (
            <AiOutlineMenu onClick={toggleMenu} className='text-white text-2xl md:hidden block' />
          )}
        </div>
      </div>
      {/* Responsive menu */}
      <div
        className={`duration-300 md:hidden w-full h-screen fixed bg-[#010B13] text-white top-[90px] ${
          isMenuOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col items-start justify-center h-full space-y-8 pl-10">
        
        <Link to="/home" className="text-lg">Home</Link> 
        

          <li className="hover:z-10 ">
            <FlyoutLink href="#" FlyoutContent={AboutContent} className="text-lg">
              About
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={TeamContent} className="text-lg">
              Team
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={JoinusContent} className="text-lg">
              Join Us
            </FlyoutLink>
          </li>
          <li className="hover:z-10">
            <FlyoutLink href="#" FlyoutContent={ContactContent} className="text-lg">
              Contact
            </FlyoutLink>
          </li>
          <div className="hidden md:block">
  <Link to="/login">
    <button className="rounded-sm bg-[#FFD700] px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-[#B5D53E]">
      Login
    </button>
  </Link>
</div>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;