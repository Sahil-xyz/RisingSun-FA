import React, { useEffect, useState } from 'react';
import bgImage from '../assets/teamlist.jpg'
import axios from 'axios';

const BoysTeamList = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/v1/user/teams/girls`);
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

  if (loading) return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;

  return (
    <div className="min-h-screen">
      {/* Header Section with Background Image and Overlay */}
      <div className="relative text-white flex flex-col justify-center items-center py-16 px-4 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Girls Team</h1>
          <p className="text-xl font-light">Select a Team to View Players</p>
        </div>
        <div className='relative z-10 flex justify-between gap-4 items-center'>
          {teams.map((team) => (
            <button
              key={team._id}
              onClick={() => setSelectedTeam(team)}
              className={`px-4 py-2 text-center rounded-lg shadow-md font-semibold transition-transform transform hover:scale-105 ${
                selectedTeam && selectedTeam._id === team._id ? 'bg-blue-700' : 'bg-blue-500'
              } text-white`}
            >
              {team.name}
            </button>
          ))}
        </div>
      </div>

      {/* Table Section (without background image) */}
      <div className="container mx-auto my-12 px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">Name of the Player</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">Date of Birth</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">Position</th>
              </tr>
            </thead>
            <tbody>
              {selectedTeam && selectedTeam.players && selectedTeam.players.map((player) => (
                <tr key={player._id} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{player.name}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {new Intl.DateTimeFormat('en-GB').format(new Date(player.dateOfBirth))}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{player.role}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoysTeamList;