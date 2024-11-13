import React from "react";
import { motion } from "framer-motion";


const Vision = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto space-y-20">

        {/* Hero Section */}
        <section className="text-center relative">
          <img 
            src="" 
            alt="Vision Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <motion.h1 
            className="text-5xl font-bold mb-4 text-yellow-400 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Vision
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Inspiring the future of football through excellence, passion, and dedication. Our vision shapes our journey as we nurture talent and foster sportsmanship.
          </motion.p>
        </section>

        {/* Core Values Section */}
        <section className="space-y-12 relative">
          <img 
            src="/path/to/values-background.jpg" 
            alt="Core Values Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <motion.h2 
            className="text-4xl font-semibold text-yellow-400 text-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {[
              { title: "Integrity", description: "Building a culture of trust and honesty, where every action is guided by strong ethical principles.", image: "/path/to/integrity.jpg" },
              { title: "Dedication", description: "Commitment to hard work and continuous improvement in every aspect of the game.", image: "/path/to/dedication.jpg" },
              { title: "Teamwork", description: "Fostering collaboration and respect, believing in the power of unity to achieve greatness.", image: "/path/to/teamwork.jpg" }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              >
                <img src={value.image} alt={value.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-yellow-300">{value.title}</h3>
                <p className="text-gray-400 mt-4">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Long-Term Goals Section */}
        <section className="space-y-12 relative">
          <img 
            src="/path/to/goals-background.jpg" 
            alt="Goals Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <motion.h2 
            className="text-4xl font-semibold text-yellow-400 text-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Our Long-Term Goals
          </motion.h2>
          <div className="text-center relative space-y-8">
            <motion.p 
              className="text-lg text-gray-400 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We are committed to creating a sustainable legacy by setting ambitious goals that inspire the next generation of players. From developing future stars to expanding our impact globally, we strive for excellence every day.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Develop World-Class Players", description: "Continuously train players to reach their highest potential, preparing them for the global stage.", image: "/path/to/players.jpg" },
                { title: "Expand Community Programs", description: "Extend our reach through community programs, inspiring youth and promoting positive change.", image: "/path/to/community.jpg" },
                { title: "Promote Innovation in Training", description: "Invest in advanced techniques and technology to stay at the forefront of football training.", image: "/path/to/innovation.jpg" }
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  <img src={goal.image} alt={goal.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-2xl font-bold text-yellow-300">{goal.title}</h3>
                  <p className="text-gray-400 mt-4">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <motion.section 
          className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center relative space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Be Part of Our Vision</h2>
          <p className="text-lg text-gray-800">
            Join us in creating a brighter future for football. Whether as a player, supporter, or sponsor, your contribution drives our mission forward.
          </p>
          <motion.button
            className="mt-6 px-6 py-3 bg-gray-900 text-yellow-400 font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get Involved
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
};

export default Vision;

