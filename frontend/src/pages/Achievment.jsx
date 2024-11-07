import React from "react";

const Achievement = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Our Achievements</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Celebrating the milestones and victories that define our academy's journey to excellence. Each achievement reflects the hard work, dedication, and talent of our players and coaches.
          </p>
        </section>

        {/* Achievement Highlights */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Achievement 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-300">National Champions - 2010</h3>
              <p className="text-gray-400 mt-4">
                Our academy's first national championship victory, a historic moment that inspired a generation of players.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-300">Best Youth Academy - 2015</h3>
              <p className="text-gray-400 mt-4">
                Awarded the best youth academy title, recognizing our commitment to nurturing young talent.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-yellow-300">International Recognition - 2020</h3>
              <p className="text-gray-400 mt-4">
                Players from our academy began joining international leagues, showcasing their skills globally.
              </p>
            </div>

            {/* Add more achievements as needed */}
          </div>
        </section>

        {/* Achievement Gallery */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Achievement Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/achievement-1.jpg"
                alt="Championship Win"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/achievement-2.jpg"
                alt="Award Ceremony"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="/images/achievement-3.jpg"
                alt="Player in Action"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <section className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900">Join Us and Be Part of the Legacy</h2>
          <p className="text-lg text-gray-800 mt-4">
            Every player and coach contributes to our ongoing story. Discover the passion, dedication, and teamwork that make our achievements possible.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Achievement;
