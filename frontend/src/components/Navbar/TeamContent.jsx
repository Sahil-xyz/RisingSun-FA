// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdSchool } from "react-icons/md"; // Icon for Academy
import { GiSoccerBall } from "react-icons/gi"; // Icon for Club

const TeamContent = () => {
  return (
    <div className="font-pop h-auto w-[600px] bg-slate-200 text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <p className="font-bold">Boys/Girls</p>
        <li className="p-2 hover:font-bold flex items-center">
          <MdSchool className="w-5 h-5 mr-2" /> {/* Academy */}
          <a href="/">Academy</a>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <GiSoccerBall className="w-5 h-5 mr-2" /> {/* Club */}
          <a href="/">Club</a>
        </li>
      </ul>
    </div>
  );
};

export default TeamContent;
