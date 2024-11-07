import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdmissionsPage = () => {
  const [admissions, setAdmissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newAdmission, setNewAdmission] = useState({
    name: '',
    dateOfBirth: '',
    gender: 'male',
    role: 'Striker',
    mode: 'Offline',
  });
  const [editingAdmission, setEditingAdmission] = useState(null);

  // Fetch admissions
  const fetchAdmissions = async () => {
    try {
      const response = await axios.get('/api/admissions');
      setAdmissions(response.data.admissions);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  // Search admissions
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAdmissions = admissions.filter(admission =>
    admission.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add new admission
  const handleAddAdmission = async () => {
    try {
      const response = await axios.post('/api/admissions', newAdmission);
      setAdmissions([...admissions, response.data.admission]);
      setNewAdmission({
        name: '',
        dateOfBirth: '',
        gender: 'male',
        role: 'Striker',
        mode: 'Offline',
      });
    } catch (error) {
      console.error('Error adding admission:', error);
    }
  };

  // Update admission
  const handleUpdateAdmission = async (id) => {
    try {
      const response = await axios.put(`/api/admissions/${id}`, editingAdmission);
      setAdmissions(admissions.map(admission =>
        admission._id === id ? response.data.admission : admission
      ));
      setEditingAdmission(null);
    } catch (error) {
      console.error('Error updating admission:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admissions Management</h1>

      {/* Search Admissions */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search admissions by name"
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 rounded w-full"
        />
      </div>

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
          <option value="male">Male</option>
          <option value="female">Female</option>
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

      {/* List of Admissions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Admissions List</h2>
        <ul>
          {filteredAdmissions.map((admission) => (
            <li key={admission._id} className="border p-2 rounded mb-2">
              {editingAdmission && editingAdmission._id === admission._id ? (
                <div>
                  <input
                    type="text"
                    value={editingAdmission.name}
                    onChange={(e) =>
                      setEditingAdmission({ ...editingAdmission, name: e.target.value })
                    }
                    className="border p-2 rounded mb-2 w-full"
                  />
                  <button
                    onClick={() => handleUpdateAdmission(admission._id)}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <p><strong>Name:</strong> {admission.name}</p>
                  <p><strong>Date of Birth:</strong> {new Date(admission.dateOfBirth).toLocaleDateString()}</p>
                  <p><strong>Gender:</strong> {admission.gender}</p>
                  <p><strong>Role:</strong> {admission.role}</p>
                  <p><strong>Mode:</strong> {admission.mode}</p>
                  <button
                    onClick={() => setEditingAdmission(admission)}
                    className="bg-yellow-500 text-white p-2 rounded mt-2"
                  >
                    Edit
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdmissionsPage;
