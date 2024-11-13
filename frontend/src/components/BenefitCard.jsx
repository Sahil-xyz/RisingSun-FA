import React from 'react';

const BenefitCard = ({ image, title, description }) => {
  return (
    <div className='font-roboto group rounded-lg p-[2px] overflow-hidden max-w-sm mx-auto hover:bg-gradient-to-br hover:from-slate-300 hover:via-blue-500 hover:to-purple-700'>
      <div className='flex flex-col items-center justify-between bg-slate-200 rounded-lg w-full h-full bg-slate group-hover:bg-gradient-to-br group-hover:from-slate-50 group-hover:via-gray-100 group-hover:to-slate-100 '>
        <img className="w-full h-32 object-contain pt-6" src={image} alt={title} />
        <div className='flex flex-col items-center justify-center p-4 text-center'>
          <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;