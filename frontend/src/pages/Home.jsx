import React from 'react'
import homeImage from '../assets/mainTeamImage.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const {isLoggedIn} = useSelector((state) => state.auth);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Black gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content on top of the gradient */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full -top-10">
        <h1 className="text-white text-5xl font-bold">Rising Sun FA</h1>
        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora aspernatur quis?</p>
        {
         isLoggedIn ? (
          <Link to="/admission" className='rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center'>
          Join Now <MdOutlineArrowOutward className='ml-2'/>
          </Link>
         ) : (
          <Link to="/login" className='rounded-full bg-yellow-50 text-black py-3 px-6 font-semibold flex items-center'>
          Join Now <MdOutlineArrowOutward className='ml-2'/>
          </Link>
         )
        }
      </div>
    </div>
  )
}

export default Home;