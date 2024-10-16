import React from "react";
import Footer from "../../pages/Footer";
import A1 from "../../assets/A1.jpg"; // Adjusted relative path
import A2 from "../../assets/A2.jpg";
import A3 from "../../assets/A3.jpg";
import A4 from "../../assets/A4.jpg";
import A5 from "../../assets/A5.jpg";
import A6 from "../../assets/A6.jpg";

const AchievementsPage = () => {
  const achievements = [
    {
        
    
      title: "2010: Academy Founded",
      description: "The journey began in 2010 with a mission to nurture young talent.",
      imageUrl: A1, // Use the imported image
    },
    {
      title: "2012: First Major Championship Win",
      description: "We won our first major championship, marking the start of our success.",
      imageUrl: A2,
    },
    {
      title: "2015: Expansion to Multiple Locations",
      description: "Expanded to multiple locations, bringing our training to more aspiring athletes.",
      imageUrl: A3,
    },
    {
      title: "2018: Partnership with International Coaches",
      description: "Collaborated with international coaches to enhance our training programs.",
      imageUrl: A4,
    },
    {
      title: "2020: Launch of Advanced Training Programs",
      description: "Introduced advanced training programs to further develop our players.",
      imageUrl: A5,
    },
    {
      title: "2022: Launch of Advanced Training Programs",
      description: "Introduced advanced training programs to further develop our players.",
      imageUrl: A6,
    },
  ];

  return (
    <div className="bg-[#010B13] text-white min-h-screen p-8">
      <header className="py-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Achievements</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div key={index} className="bg-[#FFD700] text-black rounded-md p-4 shadow-lg">
            <img
              src={achievement.imageUrl}
              alt={achievement.title}
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{achievement.title}</h2>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AchievementsPage;
