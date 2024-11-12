// src/components/CreateTeam.js
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const CreateTeam = () => {
  const [teamData, setTeamData] = useState({
    name: '',
    coach: '',
    formation: '',
    achievements: [],
    display: false,
  });

  const [achievement, setAchievement] = useState({
    title: '',
    year: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTeamData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAchievementChange = (e) => {
    const { name, value } = e.target;
    setAchievement((prev) => ({ ...prev, [name]: value }));
  };

  const addAchievement = () => {
    setTeamData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, achievement],
    }));
    setAchievement({ title: '', year: '', description: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem('token');
      if (!token) {
        toast.error("Authentication required");
        return;
      }

        const response = await axios.post('http://localhost:8000/api/v1/admin/teams/create-team', teamData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          alert('Team created successfully!');
      setTeamData({
        name: '',
        coach: '',
        formation: '',
        achievements: [],
        display: false,
      });
    } catch (error) {
      console.error('Error creating team:', error);
      console.log(error)
      alert('Failed to create team.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Create New Team</h2>
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
          <label className="block text-gray-700">Formation</label>
          <input
            type="text"
            name="formation"
            value={teamData.formation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-lg font-semibold">Achievements</h3>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="title"
              value={achievement.title}
              onChange={handleAchievementChange}
              placeholder="Title"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="year"
              value={achievement.year}
              onChange={handleAchievementChange}
              placeholder="Year"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="description"
              value={achievement.description}
              onChange={handleAchievementChange}
              placeholder="Description"
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={addAchievement}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Achievement
            </button>
          </div>
        </div>

        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="display"
              checked={teamData.display}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Display on frontend</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Create Team
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;
