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
  const [editingAdmission, setEditingAdmission] = useState(null); // For Edit functionality

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

      if (Array.isArray(response.data)) {
        setAdmissions(response.data);
        setFilteredAdmissions(response.data.slice(0, 5));
      } else if (response.data && response.data.data) {
        setAdmissions(response.data.data || []);
        setFilteredAdmissions(response.data.data.slice(0, 5));
      }
    } catch (error) {
      toast.error("Failed to fetch admissions");
    }
  };

  // Handle Search functionality
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = admissions.filter(admission =>
      admission.name.toLowerCase().includes(query)
    );

    setFilteredAdmissions(filtered.slice(0, 5)); // Show only top 5 matching results
  };

  // Handle adding new admission
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
      setFilteredAdmissions(prevAdmissions => [...prevAdmissions, response.data.admission].slice(0, 5));

      setNewAdmission({
        name: '',
        dateOfBirth: '',
        gender: 'Male',
        role: 'Striker',
        mode: 'Offline',
      });

      toast.success("Admission added successfully");
    } catch (error) {
      toast.error("Failed to add admission");
    }
  };

  // Handle deleting an admission
  const handleDeleteAdmission = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      await axios.delete(`http://localhost:8000/api/v1/admin/admission/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAdmissions(admissions.filter(admission => admission._id !== id));
      setFilteredAdmissions(filteredAdmissions.filter(admission => admission._id !== id));

      toast.success("Admission deleted successfully");
    } catch (error) {
      toast.error("Failed to delete admission");
    }
  };

  // Handle editing an admission
  const handleEditAdmission = (admission) => {
    setEditingAdmission(admission);
    setNewAdmission({
      name: admission.name,
      dateOfBirth: admission.dateOfBirth,
      gender: admission.gender,
      role: admission.role,
      mode: admission.mode,
    });
  };

  // Handle updating an admission
  const handleUpdateAdmission = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const response = await axios.put(`http://localhost:8000/api/v1/admin/admission/${editingAdmission._id}`, newAdmission, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update the admission in the local state
      setAdmissions(admissions.map(admission => 
        admission._id === editingAdmission._id ? response.data.admission : admission
      ));
      setFilteredAdmissions(filteredAdmissions.map(admission =>
        admission._id === editingAdmission._id ? response.data.admission : admission
      ));

      setEditingAdmission(null);
      setNewAdmission({
        name: '',
        dateOfBirth: '',
        gender: 'Male',
        role: 'Striker',
        mode: 'Offline',
      });

      toast.success("Admission updated successfully");
    } catch (error) {
      toast.error("Failed to update admission");
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      {/* Add or Edit Admission Section */}
      <div className="mb-8 bg-gray-700 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">
          {editingAdmission ? 'Edit Admission' : 'Add New Admission'}
        </h2>
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
            onClick={editingAdmission ? handleUpdateAdmission : handleAddAdmission}
            className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
          >
            {editingAdmission ? 'Update Admission' : 'Add Admission'}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search admissions..."
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* Admissions List */}
      <div className="max-w-3xl mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-100">Admissions List</h3>
        <ul className="space-y-4">
          {filteredAdmissions.length > 0 ? (
            filteredAdmissions.map((admission) => (
              <li key={admission._id} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <p className="text-lg font-medium text-blue-400"><strong>Name:</strong> {admission.name}</p>
                <p className="text-md text-gray-300"><strong>Gender:</strong> {admission.gender}</p>
                <p className="text-md text-gray-300"><strong>Role:</strong> {admission.role}</p>
                <p className="text-md text-gray-300"><strong>Mode:</strong> {admission.mode}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEditAdmission(admission)}
                    className="bg-yellow-600 hover:bg-yellow-500 p-2 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAdmission(admission._id)}
                    className="bg-red-600 hover:bg-red-500 p-2 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
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
