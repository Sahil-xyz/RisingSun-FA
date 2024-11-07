import React from "react";

const History = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto space-y-8">
        
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Our Journey</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the story of our football academy, from humble beginnings to producing world-class players. Our commitment to excellence defines us.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400">Academy Milestones</h2>
          <div className="border-l-4 border-yellow-400 ml-8 space-y-12">
            <div className="relative pl-8">
              <span className="absolute -left-5 h-4 w-4 bg-yellow-400 rounded-full top-2"></span>
              <h3 className="text-2xl font-bold text-yellow-300">Established in 2005</h3>
              <p className="text-gray-400">
                Our academy was founded with a mission to nurture young talent and instill the spirit of teamwork and sportsmanship.
              </p>
            </div>
            <div className="relative pl-8">
              <span className="absolute -left-5 h-4 w-4 bg-yellow-400 rounded-full top-2"></span>
              <h3 className="text-2xl font-bold text-yellow-300">First Championship Victory - 2010</h3>
              <p className="text-gray-400">
                Our first major victory was a turning point, putting us on the map and inspiring young athletes to dream big.
              </p>
            </div>
            <div className="relative pl-8">
              <span className="absolute -left-5 h-4 w-4 bg-yellow-400 rounded-full top-2"></span>
              <h3 className="text-2xl font-bold text-yellow-300">International Recognition - 2018</h3>
              <p className="text-gray-400">
                With players joining top leagues globally, our academy became a recognized name internationally.
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400">Academy Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img src="https://sesafootballacademy.in/wp-content/uploads/2022/01/img7-3.jpg" alt="Team Photo" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img src="https://sesafootballacademy.in/wp-content/uploads/2022/01/img2-3.jpg" alt="Training Session" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <img src="https://sesafootballacademy.in/wp-content/uploads/2022/01/cover-3.jpg" alt="Championship Trophy" className="w-full h-64 object-cover" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400">Our Journey Video</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <video controls className="w-full h-64 object-cover">
              <source src="https://www.youtube.com/watch?v=l_uIR6JjCsA" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400">Player Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-400 italic">
                "The training and guidance I received here shaped me not just as a player, but as a person. Forever grateful!"
              </p>
              <h4 className="mt-4 font-semibold text-yellow-300">- Alex Doe</h4>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-400 italic">
                "This academy gave me the skills and confidence to pursue my dreams. The coaches are truly dedicated."
              </p>
              <h4 className="mt-4 font-semibold text-yellow-300">- Jamie Smith</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
