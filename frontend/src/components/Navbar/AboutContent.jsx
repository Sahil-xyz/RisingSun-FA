import React from "react";
import { Link } from "react-router-dom";
import { FaHistory, FaFlagCheckered } from "react-icons/fa"; // React Icons
import { GiTrophyCup, GiTargetArrow } from "react-icons/gi"; // React Icons

const AboutContent = () => {
  return (
    <div className="font-pop h-full w-72 bg-slate-200 text-[#000000] flex flex-col items-center justify-center">
      <ul className="w-full flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold flex items-center hover:bg-slate-300 w-full">
          <Link
            to="/history"
            className="flex w-full items-center justify-center text-center"
          >
            <FaHistory className="w-5 h-5 mr-2" />
            History
          </Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center hover:bg-slate-300 w-full">
          <Link
            to="/achievement"
            className="flex w-full items-center justify-center text-center"
          >
            <GiTrophyCup className="w-5 h-5 mr-2" />
            <span>Achievements</span>
          </Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center hover:bg-slate-300 w-full">
          <Link
            to="/vision"
            className="flex w-full items-center justify-center text-center"
          >
            <FaFlagCheckered className="w-5 h-5 mr-2" /> <span>Vision</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutContent;
