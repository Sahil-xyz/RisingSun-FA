import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Contact Us</h4>
            <p className="text-gray-300 mb-2">123 Football Academy</p>
            <p className="text-gray-300 mb-2">Football City, SC 12345</p>
            <p className="text-gray-300 mb-2">Email: <span className="text-blue-400">sunrising@footballacademy.com</span></p>
            <p className="text-gray-300">Phone: <span className="text-blue-400">456-7890</span></p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/programs" className="text-gray-300 hover:text-blue-400 transition duration-300">Programs</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gray-200">Follow Us</h4>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
              >
                <FaInstagram />
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



