import React from 'react';

const DonationFailurePage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-3xl font-semibold text-red-600 mb-4">Donation Failed</h2>
      <p className="text-gray-600 text-lg mb-6">Sorry, something went wrong with your donation. Please try again.</p>
      <button
        onClick={() => window.location.href = '/'}
        className="w-full py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  </div>
);

export default DonationFailurePage;
