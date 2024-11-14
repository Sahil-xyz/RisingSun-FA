import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const EditTeam = () => {
  const { id } = useParams();
  const [teamData, setTeamData] = useState({
    name: '',
    coach: '',
    teamGender: '',
    achievements: [],
    players: [],
    display: false,
  });

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error("Authentication required");
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/admin/teams/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTeamData(response.data.data);
      } catch (error) {
        console.error('Error fetching team:', error);
        toast.error('Failed to fetch team details.');
      }
    };

    fetchTeam();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeamData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      const response = await axios.get(`http://localhost:8000/api/v1/admin/admission?name=${searchTerm}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSearchResults(response.data.data);
    } catch (error) {
      console.error('Error searching for players:', error);
      toast.error('Failed to search players.');
    }
  };

  const addPlayer = (playerId) => {
    setTeamData((prev) => ({
      ...prev,
      players: [...prev.players, playerId],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

      await axios.put(`http://localhost:8000/api/v1/admin/teams/${id}`, {
        ...teamData,
        admissions: teamData.players,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success('Team updated successfully!');
    } catch (error) {
      console.error('Error updating team:', error);
      toast.error('Failed to update team.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Edit Team</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Team Name</label>
          <input
            type="text"
            name="name"
            value={teamData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Coach</label>
          <input
            type="text"
            name="coach"
            value={teamData.coach}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Team Gender</label>
          <select
            name="teamGender"
            value={teamData.teamGender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
          <option value="" disabled>Select Gender</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
          </select>
        </div>

        {/* Display Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="display"
            checked={teamData.display}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Display on Frontend</label>
        </div>

        {/* Player Search and Selection */}
        <div>
          <h3 className="text-lg font-semibold">Add Players</h3>
          <input
            type="text"
            placeholder="Search players by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button type="button" onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Search
          </button>
          
          <div className="mt-2">
            {searchResults.map((player) => (
              <div key={player._id} className="flex items-center justify-between">
                <span>{player.name}</span>
                <button
                  type="button"
                  onClick={() => addPlayer(player._id)}
                  className="p-1 bg-green-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Update Team
        </button>
      </form>
    </div>
  );
};

export default EditTeam;
