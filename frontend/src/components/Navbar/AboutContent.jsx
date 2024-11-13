import React from "react";
import { Link } from "react-router-dom";
import { FaHistory, FaFlagCheckered } from 'react-icons/fa'; // React Icons
import { GiTrophyCup, GiTargetArrow } from 'react-icons/gi'; // React Icons

const AboutContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-slate-200 text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold flex items-center">
          <FaHistory className="w-5 h-5 mr-2" /> {/* Icon for History */}
          <Link to="/history">History</Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <GiTrophyCup className="w-5 h-5 mr-2" /> {/* Icon for Achievements */}
          <a href="/achievement">Achievements</a>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <FaFlagCheckered className="w-5 h-5 mr-2" /> {/* Icon for Mission */}
          <a href="/mission">Mission</a>
        </li>
      </ul>
    </div>
  );
};

export default AboutContent;
