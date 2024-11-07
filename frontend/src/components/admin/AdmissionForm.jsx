import React, { useState } from 'react';
import axios from 'axios';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    role: 'Striker',
    mode: 'Offline',
    dateOfAdmission: '',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/admissions', formData);
      alert('Admission successfully submitted');
      setFormData({
        name: '',
        dateOfBirth: '',
        gender: '',
        role: 'Striker',
        mode: 'Offline',
        dateOfAdmission: '',
      });
    } catch (error) {
      console.error('Error submitting admission:', error);
      alert('Failed to submit admission');
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/admissions?search=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching admissions:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-200 text-center">Admission Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Date of Birth:</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-300">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            >
              <option value="Striker">Striker</option>
              <option value="Defender">Defender</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Goalkeeper">Goalkeeper</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300">Mode of Admission:</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            >
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300">Date of Admission:</label>
            <input
              type="date"
              name="dateOfAdmission"
              value={formData.dateOfAdmission}
              onChange={handleChange}
              className="w-full p-2 mt-1 rounded bg-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded text-white font-semibold"
          >
            Submit Admission
          </button>
        </form>
      </div>

      {/* Search Section */}
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200 text-center">Search Admissions</h3>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-500 p-2 rounded text-white font-semibold"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-200">Results:</h4>
            <ul className="mt-2 space-y-2">
              {searchResults.map((result) => (
                <li key={result._id} className="bg-gray-700 p-3 rounded">
                  {result.name} - {result.role} ({result.mode})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionForm;
