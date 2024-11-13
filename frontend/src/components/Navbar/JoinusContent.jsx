import React from "react";
import { Link } from "react-router-dom";
import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/outline";

const JoinusContent = () => {
  return (
    <div className="font-pop h-full w-72 bg-slate-200 text-[#000000] flex flex-col items-center justify-center">
      <ul className="w-full flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold flex items-center w-full hover:bg-slate-300">
          <Link to="/online-admission" className="flex w-full items-center justify-center text-center">
          <AcademicCapIcon className="h-5 w-5 mr-2" />
            Admission
          </Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center w-full hover:bg-slate-300">
          <Link to="/coaches" className="flex w-full items-center justify-center text-center">
          <UserGroupIcon className="h-5 w-5 mr-2" />
            Top Players & Coaches
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default JoinusContent;
