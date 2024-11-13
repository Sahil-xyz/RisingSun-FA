// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"

const ContactContent = () => {
  return (
    <div className="font-pop h-auto w-72 bg-slate-200 text-[#000000]">
      <ul className="flex flex-col items-center justify-center py-4">
        <li className="p-2 hover:font-bold"><Link to="/contact">Contact Form</Link></li>
        <li className="p-2 hover:font-bold"><a href="/">Location</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Social Links</a></li>
        <li className="p-2 hover:font-bold"><a href="/">Donate</a></li>
      </ul>
    </div>
  );
};


export default ContactContent;