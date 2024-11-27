import React from "react";
import {  FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-slate-800 text-white py-12 font-poppins">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 max-w-xs font-light">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Contact Us</h4>
            <p className="text-gray-300 mb-2">123 Football Academy</p>
            <p className="text-gray-300 mb-2">Neville D'Souza Football Turf, KC Marg, Reclamation, Bandra West, Mumbai, Maharashtra 400050</p>
            <p className="text-gray-300 mb-2">Email: <span className="text-blue-400">risingsunfa@gmail.com</span></p>
            <p className="text-gray-300">Phone: <span className="text-blue-400">400051</span></p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 font-light">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-blue-400 transition duration-300">Donate</Link>
              </li>
              <li>
                <Link to="/coaches" className="text-gray-300 hover:text-blue-400 transition duration-300">Coach And Staff</Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-300 hover:text-blue-400 transition duration-300">Location </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Follow Us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=rising%20sun%20football&origin=GLOBAL_SEARCH_HEADER&sid=N%3AX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/risingsunfa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@risingsunfa9600?si=33EMLaSDes1VGuSl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">&copy; 2024 Football Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



