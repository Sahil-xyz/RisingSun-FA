// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { MdSchool } from "react-icons/md"; // Icon for Academy
import { GiSoccerBall } from "react-icons/gi"; // Icon for Club

const TeamContent = () => {
  return (
    <div className="font-pop h-full w-72 bg-slate-200 text-[#000000] flex flex-col items-center justify-center">
      <ul className="w-full py-4">
        <li className="p-2 rounded-lg flex items-center justify-center w-full hover:bg-slate-300">
          <Link
            to="/boys"
            className="w-full flex items-center justify-center text-center"
          >
            <MdSchool className="w-5 h-5 mr-2" />
            <span> Boys Team</span>
          </Link>
        </li>
        <li className="p-2 rounded-lg flex items-center justify-center w-full hover:bg-slate-300">
          <Link
            to="/girls"
            className="w-full flex items-center justify-center text-center"
          >
            <MdSchool className="w-5 h-5 mr-2" />
            <span> Girls Team</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamContent;
