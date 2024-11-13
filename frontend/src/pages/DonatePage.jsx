import React from 'react'
import { IoIosFootball } from "react-icons/io";
// import donateBgImage from '../assets/soccer-stadium-full-people.jpg'
// style={{ backgroundImage: `url(${homeImage})` }}
import donatePageImage from '../assets/donatePageImage.jpg'

const DonatePage = () => {
  return (
    <div className='font-poppins'>
        <div className='relative w-full flex flex-col items-center' style={{ backgroundImage: `url(${donatePageImage})` }}>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-6xl font-bold mt-20 mb-4'>Fuel Our Passion for <span className='text-red-700'>Football</span></h1>
            <p className='text-lg mb-8 font-medium font-ptsans'>Every donation goes towards providing quality training and equipment for our players.</p>
            <button className='bg-slate-950 text-white rounded-lg py-2 px-4 mb-20 hover:bg-slate-800'>Donate Now</button>
          </div>
          <div className='absolute  -bottom-12'>
            <IoIosFootball size={80} className='bg-white rounded-full w-16 h-16 md:w-24 md:h-24 animate-spin-slow'/>
          </div>
        </div>
        <div className='relative h-screen w-full flex items-center justify-center'>
          <h1 className='absolute top-2/4 text-4xl font-semibold h-full'>Yet to build...</h1>
        </div>
    </div>
  )
}

export default DonatePage