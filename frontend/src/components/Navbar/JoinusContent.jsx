import React from "react";
import { AcademicCapIcon, UserGroupIcon } from "@heroicons/react/outline";

const JoinusContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-slate-200 text-[#000000] ">
      <ul className="flex flex-col items-center justify-center py-4 ">
        <li className="p-2 hover:font-bold flex items-center">
          <AcademicCapIcon className="h-5 w-5 mr-2" />
          <a href="/admission">Admission</a>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <UserGroupIcon className="h-5 w-5 mr-2" />
          <a href="/">Become Coach</a>
        </li>
      </ul>
    </div>
  );
};

export default JoinusContent;
