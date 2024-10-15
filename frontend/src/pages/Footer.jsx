import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer =()=>{
  return <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
          
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p className="mb-2">123 Football Academy</p>
              <p className="mb-2">football City, SC 12345</p>
              <p className="mb-2">Email: sunrising@footballacademy.com</p>
              <p>Phone: 456-7890</p>
            </div>

            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/programs" className="hover:underline">Programs</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">&copy; 2024 Football Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
}
export default Footer;