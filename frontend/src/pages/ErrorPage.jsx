import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '../assets/foul.gif';

const ErrorPage = () => {
  return (
    // <div className="flex items-center justify-center h-screen bg-white">
    //   <div className="text-center">
    //     <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
    //     <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
    //     <div className="bg-white p-4 inline-block">
    //       <img src={errorImage} alt="Error" className="w-32 h-32" />
    //     </div>
    //     <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mt-6">
    //       Go Back to Home
    //     </Link>
    //   </div>
    // </div>
    <div className='flex flex-col items-center h-screen w-screen justify-center font-poppins'>
      <img src={errorImage} alt="Error" className="w-36 h-36" />
      <p>Red Card!! For landing on wrong page</p>
      <p>-404 aura.</p>
      <Link to="/" className="bg-slate-950 text-white px-4 py-2 rounded hover:text-white hover:bg-slate-800 mt-6">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
