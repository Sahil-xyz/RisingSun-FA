import React from "react";

const Vision = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Our Vision</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Inspiring the future of football through excellence, passion, and dedication. Our vision shapes our journey as we nurture talent and foster sportsmanship.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
              <h3 className="text-2xl font-bold text-yellow-300">Integrity</h3>
              <p className="text-gray-400 mt-4">
                Building a culture of trust and honesty, where every action is guided by strong ethical principles.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
              <h3 className="text-2xl font-bold text-yellow-300">Dedication</h3>
              <p className="text-gray-400 mt-4">
                Commitment to hard work and continuous improvement in every aspect of the game.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 text-center">
              <h3 className="text-2xl font-bold text-yellow-300">Teamwork</h3>
              <p className="text-gray-400 mt-4">
                Fostering collaboration and respect, believing in the power of unity to achieve greatness.
              </p>
            </div>

          </div>
        </section>

        {/* Long-Term Goals Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Our Long-Term Goals</h2>
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              We are committed to creating a sustainable legacy by setting ambitious goals that inspire the next generation of players. From developing future stars to expanding our impact globally, we strive for excellence every day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Goal 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-yellow-300">Develop World-Class Players</h3>
                <p className="text-gray-400 mt-4">
                  Continuously train players to reach their highest potential, preparing them for the global stage.
                </p>
              </div>

              {/* Goal 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-yellow-300">Expand Community Programs</h3>
                <p className="text-gray-400 mt-4">
                  Extend our reach through community programs, inspiring youth and promoting positive change.
                </p>
              </div>

              {/* Goal 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-yellow-300">Promote Innovation in Training</h3>
                <p className="text-gray-400 mt-4">
                  Invest in advanced techniques and technology to stay at the forefront of football training.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900">Be Part of Our Vision</h2>
          <p className="text-lg text-gray-800 mt-4">
            Join us in creating a brighter future for football. Whether as a player, supporter, or sponsor, your contribution drives our mission forward.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-900 text-yellow-400 font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
            Get Involved
          </button>
        </section>
      </div>
    </div>
  );
};

export default Vision;
