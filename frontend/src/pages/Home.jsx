import React from 'react';
import homeImage from '../assets/mainTeamImage.jpg';
import Footer from './Footer';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center bg-slate-500"
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

      <div className="flex flex-col lg:flex-row justify-center items-center py-10 bg-white">
  <div className="flex flex-col lg:flex-row w-11/12 bg-white shadow-md rounded-lg overflow-hidden">
    {/* Left Side Image and Stats */}
    <div className="relative lg:w-1/2 w-full">
      {/* Overlay Box for Professional Footballers */}
      <div className="absolute top-6 left-6 bg-blue-100 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">230+</p>
        <p className="text-sm">Professional Footballers</p>
      </div>

      {/* Player Image */}
      <div className='w-75 rounded-md '>  
      <img
        src="https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg"
        alt="Player"
        className="w-full h-auto object-cover" // Ensures the image is responsive and doesn't overflow
      />
       </div>

      {/* Lives Impacted Box */}
      <div className="absolute bottom-6 left-6 bg-green-500 text-white text-center py-2 px-4 rounded-md z-10">
        <p className="text-xl font-bold">1200+</p>
        <p className="text-sm">Lives Impacted</p>
      </div>
    </div>

    {/* Right Side Content */}
    <div className="lg:w-1/2 w-full p-6 lg:p-10 flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-blue-700">Academy</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem doloremque consequatur nostrum culpa, beatae labore esse distinctio reprehenderit consectetur totam omnis provident, commodi quibusdam eius dolor, dolore sint. Itaque, consequuntur.
      </p>
      <a
        href="#"
        className="mt-6 inline-block text-blue-500 hover:text-blue-700 font-medium"
      >
        Know More
      </a>
    </div>
  </div>
</div>

<div className="bg-white py-10 flex justify-center items-center h-screen">
  <div className="w-full max-w-7xl px-4">
    <div className="flex justify-center pb-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Leader's Message</h1>
    </div>

    {/* Scrollable container for leader cards */}
    <div className="overflow-x-auto flex space-x-8 pb-4" >
      
      {/* First Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src="data:image/jpeg;base64,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" // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 1</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>

      {/* Second Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 2</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>

      {/* Third Leader Card */}
      <div className="min-w-[300px] bg-white shadow-lg rounded-xl p-6 relative flex-shrink-0">
        <div className="flex flex-col items-center">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." // Replace with another image source
            alt="Leader"
            className="rounded-full w-32 h-32 mb-4"
          />
          <h2 className="text-xl font-semibold">Leader Name 3</h2>
          <p className="text-gray-600 text-center mt-2">
            Short description of the leader’s message or background.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
 

<div className="bg-white py-10 flex flex-col items-center">
      {/* Gallery Heading */}
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Gallery</h1>

      {/* Gallery Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 max-w-7xl w-full px-4">
        
        {/* Training Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/training.jpg" // Replace with actual image
            alt="Training"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Training</span>
          </div>
        </Link>

        {/* Practice Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/practics.jpg" // Replace with actual image
            alt="Practice"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Practice</span>
          </div>
        </Link>

        {/* Teams Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/teams.jpg" // Replace with actual image
            alt="Teams"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">Teams</span>
          </div>
        </Link>

        {/* League Section */}
        <Link to="/gallery" className="relative group">
          <img
            src="https://sesafootballacademy.in/wp-content/themes/sfa-home/images/lauge.jpg" // Replace with actual image
            alt="League"
            className="w-full h-60 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end rounded-lg">
            <span className="text-white text-xl font-bold p-4">League</span>
          </div>
        </Link>
      </div>

      {/* View All Link */}
      <div className="mt-6">
        <Link to="/gallery" className="text-blue-700 font-bold text-lg">
          View All
        </Link>
      </div>
    </div>
<Footer/>

    </div>
  
  
  );
}

export default Home;