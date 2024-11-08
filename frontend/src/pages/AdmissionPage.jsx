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

      setAdmissions(response.data.admissionUsers); // Assuming response contains admissionUsers
      setFilteredAdmissions(response.data.admissionUsers.slice(0, 5)); // Show first 5 by default
    } catch (error) {
      console.error('Error fetching admissions:', error);
      toast.error("Failed to fetch admissions");
    }
  };

  // Filter the admissions based on the search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = admissions.filter(admission =>
      admission.name.toLowerCase().includes(query.toLowerCase()) || 
      admission.role.toLowerCase().includes(query.toLowerCase()) || 
      admission.mode.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAdmissions(filtered.slice(0, 5)); // Show only top 5 results
  };

  // Add new admission
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
        gender: 'male',
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
    <div className="p-6">
      {/* Add New Admission */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Add New Admission</h2>
        <input
          type="text"
          placeholder="Name"
          value={newAdmission.name}
          onChange={(e) => setNewAdmission({ ...newAdmission, name: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={newAdmission.dateOfBirth}
          onChange={(e) => setNewAdmission({ ...newAdmission, dateOfBirth: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        />
        <select
          value={newAdmission.gender}
          onChange={(e) => setNewAdmission({ ...newAdmission, gender: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          value={newAdmission.role}
          onChange={(e) => setNewAdmission({ ...newAdmission, role: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        >
          <option value="Striker">Striker</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Goalkeeper">Goalkeeper</option>
        </select>
        <select
          value={newAdmission.mode}
          onChange={(e) => setNewAdmission({ ...newAdmission, mode: e.target.value })}
          className="border p-2 rounded mb-2 w-full"
        >
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
        </select>
        <button onClick={handleAddAdmission} className="bg-blue-500 text-white p-2 rounded">
          Add Admission
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search admissions..."
          className="border p-2 rounded mb-4 w-full"
        />
      </div>

      {/* Display Admissions */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Admissions List</h3>
        <ul>
          {filteredAdmissions.length > 0 ? (
            filteredAdmissions.map((admission, index) => (
              <li key={index} className="mb-2 p-2 border-b">
                <p><strong>Name:</strong> {admission.name}</p>
                <p><strong>Gender:</strong> {admission.gender}</p>
                <p><strong>Role:</strong> {admission.role}</p>
                <p><strong>Mode:</strong> {admission.mode}</p>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionsPage;