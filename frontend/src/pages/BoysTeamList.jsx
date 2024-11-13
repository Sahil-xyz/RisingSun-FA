import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoysTeamList = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/teams/boys');
        setTeams(response.data.data);
        setSelectedTeam(response.data.data[0]); // Default to the first team
        setLoading(false);
      } catch (err) {
        console.error('Error fetching teams:', err);
        setError('Failed to load teams');
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Header Content */}
      <div className="relative text-white flex flex-col justify-center items-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Boys Team</h1>
          <p className="text-xl mt-2">Select a Team</p>
          
          {/* Tab Navigation */}
          <div className="mt-6 flex space-x-4">
            {teams.map((team) => (
              <button
                key={team._id}
                onClick={() => setSelectedTeam(team)}
                className={`px-4 py-2 rounded ${
                  selectedTeam && selectedTeam._id === team._id ? 'bg-blue-600' : 'bg-blue-500'
                } text-white`}
              >
                {team.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container mx-auto mt-8 overflow-x-auto">
        <div className="bg-white shadow-md rounded">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">Name of the Player</th>
                <th className="py-3 px-6 text-left">Date of Birth</th>
                <th className="py-3 px-6 text-left">Age</th>
                <th className="py-3 px-6 text-left">Playing Position</th>
              </tr>
            </thead>
            <tbody>
              {selectedTeam && selectedTeam.players.map((player) => (
                <tr key={player._id} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{player.name}</td>
                  <td className="py-3 px-6">{player.dob}</td>
                  <td className="py-3 px-6">{player.age}</td>
                  <td className="py-3 px-6">{player.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoysTeamList;