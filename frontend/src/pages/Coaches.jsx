// CoachesPage.jsx
import React, { useState } from 'react';
import coach1 from '../assets/coach1.jpg';
import coach2 from '../assets/coach2.jpg';
import coach3 from '../assets/coach3.jpg';
import play1 from '../assets/play1.jpg';
import play2 from '../assets/play2.jpg';
import play3 from '../assets/play3.jpg';
 import play4 from '../assets/play4.jpg';
import goalkeep from '../assets/goalkeep.jpg';
import play6 from '../assets/play6.JPG';
import play7 from '../assets/play7.jpg';

const CoachesPage = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const coaches = [
    { name: 'Vijay Sir', title: 'Head Coach', photo: coach3, description: 'Vijay sir has over 10 years of experience coaching football teams of all levels.' },
    { name: 'Anil Patil', title: 'Assistant Coach', photo: coach2, description: 'Specializes in defensive strategies and player development.' },
    { name: 'Coach Prabhuram', title: 'Technical Coach', photo: coach1, description: 'Has a sharp eye for technical skills and player improvement.' },
  ];

  const players = [
    { name: 'Sunil Saha', position: 'Forward', photo: play1, achievement: 'Top Scorer - 2023' },
    { name: 'Bharat gupta', position: 'Midfielder', photo: play2, achievement: 'Best Playmaker' },
    { name: 'Nikhil Mahajan', position: 'Defender', photo: play3, achievement: 'Most Tackles 2022' },
    { name: 'Yash Waghmare', position: 'Goalkeeper', photo: goalkeep, achievement: 'Golden Glove' },
    { name: 'Sahil ishi', position: 'Forward', photo: play4, achievement: 'Rising Star' },
    { name: 'Prajakta Jagtap', position: 'Midfielder', photo: play6, achievement: 'Most Assists' },
    { name: 'komal Bhamre', position: 'Defender', photo:play7, achievement: 'Player of the Season' },
  ];

  const toggleFlip = (index) => setFlippedIndex(index === flippedIndex ? null : index);

  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">Our Coaches</h1>
      <div className="flex flex-wrap justify-center px-8">
        {coaches.map((coach, index) => (
          <div
            key={index}
            className="w-64 h-80 perspective cursor-pointer m-4 hover:scale-105 transition-transform duration-300 ease-out"
            onClick={() => toggleFlip(index)}
          >
            <div className={`relative w-full h-full transition-transform duration-500 transform ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
              {/* Front Side */}
              <div className={`absolute w-full h-full bg-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center text-white ${flippedIndex === index ? 'hidden' : 'block'}`}>
                <img src={coach.photo} alt={`${coach.name} photo`} className="w-24 h-24 rounded-full mb-4 shadow-md border-4 border-white" />
                <h2 className="text-xl font-semibold">{coach.name}</h2>
                <p className="text-sm italic mt-2">{coach.title}</p>
              </div>

              {/* Back Side */}
              <div className={`absolute w-full h-full bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 ${flippedIndex === index ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-semibold mb-2 text-blue-500">{coach.name}</h2>
                <p className="text-gray-700 mb-4 text-center">{coach.description}</p>
                <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={(e) => { e.stopPropagation(); toggleFlip(index); }}>Back</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-blue-600 mt-16 mb-8">Top Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
        {players.map((player, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
            <img src={player.photo} alt={`${player.name} photo`} className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold text-blue-500">{player.name}</h3>
            <p className="text-gray-600">{player.position}</p>
            <p className="text-sm text-gray-500 mt-2">{player.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachesPage;
