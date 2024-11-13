// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { MdContactMail } from "react-icons/md"; // Icon for Contact Form
import { IoLocationSharp } from "react-icons/io5"; // Icon for Location
import { FaFacebookF } from "react-icons/fa"; // Icon for Social Links
import { GiMoneyStack } from "react-icons/gi"; // Icon for Donate

const ContactContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-slate-200 text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold flex items-center">
          <MdContactMail className="w-5 h-5 mr-2" /> {/* Contact Form */}
          <Link to="/contact">Contact Form</Link>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <IoLocationSharp className="w-5 h-5 mr-2" /> {/* Location */}
          <a href="/">Location</a>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <FaFacebookF className="w-5 h-5 mr-2" /> {/* Social Links */}
          <a href="/">Social Links</a>
        </li>
        <li className="p-2 hover:font-bold flex items-center">
          <GiMoneyStack className="w-5 h-5 mr-2" /> {/* Donate */}
          <a href="/">Donate</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactContent;
