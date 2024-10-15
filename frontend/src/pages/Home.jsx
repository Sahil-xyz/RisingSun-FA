
import React from 'react';
import homeImage from '../assets/mainTeamImage.jpg';
import Footer from './Footer';
import { MdOutlineArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div
    
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65 z-0"></div>

      {/* Content on top of the gradient */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">Rising Sun FA</h1>
        <p className="text-white py-4">
        Unlock your potential with top-tier training and expert coaching.<br/>Elevate your game and chase your football dreams with us.
        </p>
        <button className="rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center">
          Join Now <MdOutlineArrowOutward className="ml-2" />
        </button>
      </div>
      <Footer/>
    </div>
  
  
  );
}

export default Home;