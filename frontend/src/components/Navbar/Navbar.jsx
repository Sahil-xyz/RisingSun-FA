import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import FlyoutLink from "./FlyoutLink";
import AboutContent from "./AboutContent";
import TeamContent from "./TeamContent";
import JoinusContent from "./JoinusContent";
import ContactContent from "./ContactContent";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";  // Import icons
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [dropdowns, setDropdowns] = useState({
    about: false,
    team: false,
    joinus: false,
    contact: false,
  });
  const toggleDropdown = (section) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-white p-4 text-black shadow-lg fixed w-full z-50">
      <div className="max-w-[1600px] flex items-center justify-between mx-auto py-2 md:py-4">
        <h2 className="text-xl md:text-2xl font-bold ml-4">
          RISING SUN <span className="text-red-600">FA</span>
        </h2>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 font-bold">
          {user?.isAdmin ? (
            <>
              <Link to="/" className="text-sm md:text-base">Home</Link>
              <Link to="/admin" className="text-sm md:text-base">Admin</Link>
            </>
          ) : (
            <Link to="/" className="text-sm md:text-base">Home</Link>
          )}
          <FlyoutLink  FlyoutContent={AboutContent} className="text-sm md:text-base">  <Link to="/">About</Link></FlyoutLink>
          <FlyoutLink  FlyoutContent={TeamContent} className="text-sm md:text-base">   <Link to="/">Team</Link></FlyoutLink>
          <FlyoutLink  FlyoutContent={JoinusContent} className="text-sm md:text-base"> <Link to="/">Join Us</Link></FlyoutLink>
          <FlyoutLink  FlyoutContent={ContactContent} className="text-sm md:text-base"><Link to="/">Contact</Link></FlyoutLink>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <Link to="/profile">
              <button className="rounded-full bg-slate-400 px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-slate-300">
                Profile
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="rounded-sm bg-slate-500 px-4 py-2 text-sm md:px-6 md:py-2 font-semibold text-black hover:bg-slate-400">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-start justify-start transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col space-y-8 pl-10 pt-10">
          {user?.isAdmin ? (
            <>
              <Link to="/" className="text-lg" onClick={toggleMenu}>Home</Link>
              <Link to="/admin" className="text-lg" onClick={toggleMenu}>Admin</Link>
            </>
          ) : (
            <Link to="/" className="text-lg" onClick={toggleMenu}>Home</Link>
          )}

          {/* Mobile About Dropdown */}
          <div>
  <button className="text-lg w-full text-left flex items-center justify-between" onClick={() => toggleDropdown('about')}>
    About
    {dropdowns.about ? (
      <AiOutlineUp className="ml-2" />  // Show up icon when dropdown is open
    ) : (
      <AiOutlineDown className="ml-2" />  // Show down icon when dropdown is closed
    )}
  </button>
  {dropdowns.about && (
    <div className="pl-6 space-y-4 flex flex-col ml-15 mt-4">
      <Link to="/history" className="text-sm" onClick={toggleMenu}>History</Link>
      <Link to="/achievements" className="text-sm" onClick={toggleMenu}>Achievements</Link>
      <Link to="/vision" className="text-sm" onClick={toggleMenu}>Vision</Link>
    </div>
  )}
</div>

          {/* Mobile Team Dropdown */}
          <div>
  <button className="text-lg w-full text-left flex items-center justify-between" onClick={() => toggleDropdown('team')}>
    Team
    {dropdowns.team ? (
      <AiOutlineUp className="ml-2" />  // Show up icon when dropdown is open
    ) : (
      <AiOutlineDown className="ml-2" />  // Show down icon when dropdown is closed
    )}
  </button>
  {dropdowns.team && (
    <div className="pl-6 space-y-4 flex flex-col ml-15 mt-4">
      <Link to="/boys" className="text-sm" onClick={toggleMenu}>Boys Team</Link>
      <Link to="/girls" className="text-sm" onClick={toggleMenu}>Girls Team</Link>
    </div>
  )}
</div>

          {/* Mobile Join Us Dropdown */}
          <div>
  <button className="text-lg w-full text-left flex items-center justify-between" onClick={() => toggleDropdown('joinus')}>
    Join Us
    {dropdowns.joinus ? (
      <AiOutlineUp className="ml-2" />  // Show up icon when dropdown is open
    ) : (
      <AiOutlineDown className="ml-2" />  // Show down icon when dropdown is closed
    )}
  </button>
  {dropdowns.joinus && (
    <div className="pl-6 space-y-4 flex flex-col ml-15 mt-4">
      <Link to="/online-admission" className="text-sm" onClick={toggleMenu}>Admission</Link>
      <Link to="/coaches" className="text-sm" onClick={toggleMenu}>Top Players & Coaches</Link>
    </div>
  )}
</div>

          {/* Mobile Contact Dropdown */}
          <div>
  <button className="text-lg w-full text-left flex items-center justify-between" onClick={() => toggleDropdown('contact')}>
    Contact
    {dropdowns.contact ? (
      <AiOutlineUp className="ml-2" />  // Show up icon when dropdown is open
    ) : (
      <AiOutlineDown className="ml-2" />  // Show down icon when dropdown is closed
    )}
  </button>
  {dropdowns.contact && (
    <div className="pl-6 space-y-4 flex flex-col ml-15 mt-4">
      <Link to="/location" className="text-sm" onClick={toggleMenu}>Location</Link>
      <Link to="/support" className="text-sm" onClick={toggleMenu}>Support</Link>
      <Link to="/donate" className="text-sm" onClick={toggleMenu}>Donate</Link>
    </div>
  )}
</div>

          {/* Mobile Login Button */}
          {isLoggedIn ? (
            <Link to="/profile">
              <button className="rounded-sm bg-[#FFD700] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E]" onClick={toggleMenu}>
                Profile
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="rounded-sm bg-[#FFD700] px-6 py-2 font-semibold text-black hover:bg-[#B5D53E]" onClick={toggleMenu}>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
          </div>
  );
};

export default Navbar;
