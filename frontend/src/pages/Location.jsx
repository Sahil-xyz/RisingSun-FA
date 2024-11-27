import React from "react";

const Location = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-300 to-slate-50 min-h-screen py-6 px-4 md:px-8 pt-20 font-poppins">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-6xl font-ptsans font-extrabold text-gray-800 mb-4 bg-gradient-to-br from-red-500 to-red-900 bg-clip-text text-transparent">Visit Us</h1>
          <p className="text-lg text-gray-600">
            We are located in the heart of Bandra West, Mumbai. Explore our location, contact details, and directions below.
          </p>
        </section>

        {/* Map Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Location</h2>
          <div className="rounded-md overflow-hidden shadow-md">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757.3349937034918!2d72.83224732933752!3d19.05110944131299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93959f1e5f5%3A0xabc4a60ff39b1c2!2sNeville%20D&#39;Souza%20Football%20Turf!5e0!3m2!1sen!2sin!4v1732628365152!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Map of Academy Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-md shadow p-4 text-center">
              <h3 className="text-lg font-bold text-gray-700">Phone</h3>
              <p className="text-gray-600 mt-2">+91 8369419545</p>
            </div>
            <div className="bg-white rounded-md shadow p-4 text-center">
              <h3 className="text-lg font-bold text-gray-700">Address</h3>
              <p className="text-gray-600 mt-2">
              Neville D'Souza Football Turf, KC Marg, Reclamation, Bandra West, Mumbai, Maharashtra 400050
              </p>
            </div>
            <div className="bg-white rounded-md shadow p-4 text-center">
              <h3 className="text-lg font-bold text-gray-700">Email</h3>
              <p className="text-gray-600 mt-2">risingsunfa@gmail.com</p>
            </div>
          </div>
        </section>

        {/* Operating Hours */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Operating Hours</h2>
          <div className="bg-white rounded-md shadow p-4 text-center">
            <ul className="text-gray-600 space-y-1">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
