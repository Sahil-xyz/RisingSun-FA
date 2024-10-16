// src/components/MissionPage/MissionPage.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import Footer from "../../pages/Footer";

const MissionPage = () => {

  return (
    <div className="bg-[#010B13] text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
      <div className="max-w-3xl mx-auto bg-[#FFD700] text-black rounded-md p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Empowering the Next Generation of Football Champions</h2>
        <p className="text-lg mb-4">
          At Rising Sun Football Academy, our mission is to cultivate a passion for football, instill discipline, and develop
          the skills necessary for success both on and off the field. We believe that every player has the potential to be a champion,
          and we are dedicated to providing the best environment, coaching, and resources to help our athletes reach their full potential.
        </p>
        <h3 className="text-2xl font-bold mb-4">Core Values</h3>
        <ul className="list-disc pl-5 mb-6">
          <li className="mb-2">Excellence: We strive for excellence in everything we do, from training to competition.</li>
          <li className="mb-2">Integrity: We promote honesty, sportsmanship, and respect both on and off the field.</li>
          <li className="mb-2">Teamwork: We believe in the power of teamwork and the importance of supporting each other.</li>
          <li className="mb-2">Passion: We foster a deep love for the game and encourage our players to pursue their dreams.</li>
          <li className="mb-2">Development: We are committed to the continuous development of our players, coaches, and community.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-lg">
          Our vision is to be recognized as one of the leading football academies in the world, known for our commitment to player
          development, innovation in training, and success in competitions. We aim to create a legacy of champions who not only excel
          in football but also contribute positively to society.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default MissionPage;