// CoachesPage.jsx
import React, { useState } from 'react';

const Coaches = function () {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const coaches = [
    {
      name: 'Coach Messi',
      title: 'Head Coach',
      photo: 'data:image/jpeg;base64,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',
      description: 'John has over 10 years of experience coaching football teams of all levels.',
    },
    {
      name: 'Coach M Bappe',
      title: 'Assistant Coach',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAUpR1Jf9J9IKJYAeUZPmFMAZTIPLjbYX_A&s',
      description: 'Sarah specializes in defensive strategies and player development.',
    },
    {
      name: 'Coach Chettri',
      title: 'Technical Coach',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3LWk6RwzYDWSUceRAlKOw7rGlToXT-h1eTg&s',
      description: 'Alex has a sharp eye for technical skills and player improvement.',
    },
  ];

  const toggleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-center p-8">
      {coaches.map((coach, index) => (
        <div
          key={index}
          className="w-64 h-80 perspective cursor-pointer m-4"
          onClick={() => toggleFlip(index)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 transform ${flippedIndex === index ? 'rotate-y-180' : ''
              }`}
          >
            {/* Front Side */}
            <div className={`absolute w-full h-full bg-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center text-white ${flippedIndex === index ? 'hidden' : 'block'}`}>
              <img
                src={coach.photo}
                alt={`${coach.name} photo`}
                className="w-24 h-24 rounded-full mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold">{coach.name}</h2>
              <p className="text-sm italic mt-2">{coach.title}</p>
            </div>

            {/* Back Side */}
            <div className={`absolute w-full h-full bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 ${flippedIndex === index ? 'block' : 'hidden'}`}>
              <h2 className="text-xl font-semibold mb-2 text-blue-500">{coach.name}</h2>
              <p className="text-gray-700 mb-4 text-center">{coach.description}</p>
              <button
                className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFlip(index);
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Coaches;
