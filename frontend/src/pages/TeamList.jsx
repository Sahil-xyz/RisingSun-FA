import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/team');
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
      <div className="bg-purple-800 bg-opacity-60 py-12">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Boys Team</h1>
          <p className="text-xl mt-2">Select a Team</p>
          <div className="flex justify-center mt-4 space-x-4">
            {teams.map((team) => (
              <button
                key={team._id}
                onClick={() => setSelectedTeam(team)}
                className={`px-4 py-2 rounded ${selectedTeam && selectedTeam._id === team._id ? 'bg-blue-700' : 'bg-blue-500'} text-white`}
              >
                {team.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mx-4 sm:mx-8 my-8">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-blue-700 text-white text-lg">
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
  );
};

export default TeamList;
