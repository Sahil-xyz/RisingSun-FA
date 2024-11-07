import React from "react";

const Location = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto space-y-12">
        
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">Visit Us</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We are located in the heart of Goregaon West, Mumbai. Find our location, contact details, and directions below.
          </p>
        </section>

        {/* Map Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.160058982797!2d72.84310117494644!3d19.17014584505932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61437a366c5%3A0x2a5f8fa45d9ea9a9!2sUrban%20Sports%20Goregaon%2C%20Prabodhan%20Kridabhavan%20Maidan%2C%20near%20Ozone%20Swimming%20Pool%2C%20Siddharth%20Nagar%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400104!5e0!3m2!1sen!2sin!4v1619632593457!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Map of Academy Location"
            ></iframe>
          </div>
        </section>

        {/* Contact Information */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Contact Information</h2>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-yellow-300">Address</h3>
              <p className="text-gray-400">Urban Sports Goregaon, Prabodhan Kridabhavan Maidan, near Ozone Swimming Pool, Siddharth Nagar, Goregaon West, Mumbai, Maharashtra 400104</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-300">Phone</h3>
              <p className="text-gray-400">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-yellow-300">Email</h3>
              <p className="text-gray-400">info@footballacademy.com</p>
            </div>
          </div>
        </section>

        {/* Operating Hours */}
        <section className="space-y-8">
          <h2 className="text-4xl font-semibold text-yellow-400 text-center">Operating Hours</h2>
          <div className="flex justify-center">
            <ul className="text-gray-400">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>

        {/* Directions Section */}
        <section className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900">Directions</h2>
          <p className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto">
            Easily accessible from Siddharth Nagar, our academy is near the Ozone Swimming Pool. Look for Prabodhan Kridabhavan Maidan as a landmark.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Location;
