import React, { useState } from 'react';
import practice1 from '../assets/practice1.jpg'
import practice2 from '../assets/practice2.jpg'
import practice3 from '../assets/practice3.jpg'
import play3 from '../assets/play3.jpg'
import train2 from '../assets/train2.jpg'
import goalkeep from '../assets/goalkeep.jpg'
import team from'../assets/team.jpg'
import mainTeamimage from '../assets/mainTeamImage.jpg'
import A5 from '../assets/A5.jpg'
import lea1 from '../assets/lea1.jpg'
import lea2 from '../assets/lea2.jpg'
import lea3 from '../assets/lea3.jpg'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('practice');

  // Sample images for each category (replace with actual images)
  const galleryImages = {
    practice: [practice1, practice2,practice3],
    training: [play3, train2, goalkeep],
    team: [team, mainTeamimage, A5],
    league: [lea1, lea2,lea3],
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?cs=srgb&dl=pexels-pixabay-46798.jpg&fm=jpg')", // Replace with your background image URL
      }}
    >
      <div className="container mx-auto bg-gray-900 bg-opacity-80 rounded-lg p-8">
        <h1 className="text-5xl font-bold text-yellow-400 text-center mb-12">Gallery</h1>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {['practice', 'training', 'team', 'league'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? 'bg-yellow-400 text-gray-900 shadow-lg transform scale-105'
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Gallery
            </button>
          ))}
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages[activeTab].map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`${activeTab} image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition duration-300"
              />
              <div className="text-center mt-4">
                <p className="text-lg font-semibold text-white mb-2">
                  {`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ${index + 1}`}
                </p>
                <a
                  href={src}
                  download
                  className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold transition hover:bg-yellow-500 transform hover:scale-105"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
