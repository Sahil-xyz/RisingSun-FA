import React from "react";
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md"; // Icon for Contact Form
import { IoLocationSharp } from "react-icons/io5"; // Icon for Location
import { FaFacebookF } from "react-icons/fa"; // Icon for Social Links
import { GiMoneyStack } from "react-icons/gi"; // Icon for Donate

const ContactContent = () => {
  return (
    <div className="font-pop h-full w-72 bg-slate-200 text-[#000000] flex flex-col items-center justify-center">
      <ul className="w-full flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold flex items-center w-full hover:bg-slate-300">
          <Link to="/location" className="flex w-full items-center justify-center text-center">
            <IoLocationSharp className="h-5 w-5 mr-2" />
            Location
          </Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center w-full hover:bg-slate-300">
          <Link to="/support" className="flex w-full items-center justify-center text-center">
            <FaFacebookF className="h-5 w-5 mr-2" />
            Support
          </Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center w-full hover:bg-slate-300">
          <Link to="/donate" className="flex w-full items-center justify-center text-center">
            <GiMoneyStack className="h-5 w-5 mr-2" />
            Donate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactContent;
