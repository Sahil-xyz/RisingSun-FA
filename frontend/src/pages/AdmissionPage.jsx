import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AdmissionsPage = () => {
  const [admissions, setAdmissions] = useState([]);
  const [filteredAdmissions, setFilteredAdmissions] = useState([]);
  const [newAdmission, setNewAdmission] = useState({
    name: '',
    dateOfBirth: '',
    gender: 'Male',
    role: 'Striker',
    mode: 'Offline',
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch admissions from the backend
  const fetchAdmissions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const response = await axios.get('http://localhost:8000/api/v1/admin/admission', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAdmissions(response.data.admissionUsers);
      setFilteredAdmissions(response.data.admissionUsers.slice(0, 5));
    } catch (error) {
      console.error('Error fetching admissions:', error);
      toast.error("Failed to fetch admissions");
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = admissions.filter(admission =>
      admission.name.toLowerCase().includes(query.toLowerCase()) || 
      admission.role.toLowerCase().includes(query.toLowerCase()) || 
      admission.mode.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAdmissions(filtered.slice(0, 5));
  };

  const handleAddAdmission = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const response = await axios.post('http://localhost:8000/api/v1/admin/admission', newAdmission, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAdmissions(prevAdmissions => [...prevAdmissions, response.data.admission]);
      setNewAdmission({
        name: '',
        dateOfBirth: '',
        gender: 'Male',
        role: 'Striker',
        mode: 'Offline',
      });
      toast.success("Admission added successfully");
    } catch (error) {
      console.error('Error adding admission:', error);
      toast.error("Failed to add admission");
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Add New Admission Section */}
      <div className="mb-8 bg-gray-700 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">Add New Admission</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={newAdmission.name}
            onChange={(e) => setNewAdmission({ ...newAdmission, name: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={newAdmission.dateOfBirth}
            onChange={(e) => setNewAdmission({ ...newAdmission, dateOfBirth: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
          />
          <select
            value={newAdmission.gender}
            onChange={(e) => setNewAdmission({ ...newAdmission, gender: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <select
            value={newAdmission.role}
            onChange={(e) => setNewAdmission({ ...newAdmission, role: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          >
            <option value="Striker">Striker</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Goalkeeper">Goalkeeper</option>
          </select>
          <select
            value={newAdmission.mode}
            onChange={(e) => setNewAdmission({ ...newAdmission, mode: e.target.value })}
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          >
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
          <button
            onClick={handleAddAdmission}
            className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
          >
            Add Admission
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search admissions..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* Admissions List */}
      <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-100">Admissions List</h3>
        <ul className="space-y-4">
          {filteredAdmissions.length > 0 ? (
            filteredAdmissions.map((admission, index) => (
              <li key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <p className="text-lg font-medium text-blue-400"><strong>Name:</strong> {admission.name}</p>
                <p className="text-md text-gray-300"><strong>Gender:</strong> {admission.gender}</p>
                <p className="text-md text-gray-300"><strong>Role:</strong> {admission.role}</p>
                <p className="text-md text-gray-300"><strong>Mode:</strong> {admission.mode}</p>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400">No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionsPage;






