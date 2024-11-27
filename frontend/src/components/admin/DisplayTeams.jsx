import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayTeams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedTeamId, setExpandedTeamId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Authentication required");
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}api/v1/admin/teams`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTeams(response.data.data || []);
      } catch (error) {
        console.error("Error fetching teams:", error);
        toast.error("Failed to load teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const toggleTeamDetails = (id) => {
    setExpandedTeamId((prevId) => (prevId === id ? null : id));
  };

  const handleEditClick = (teamId) => {
    navigate(`/admin/teams/${teamId}`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-500">Loading teams...</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Manage Teams
      </h2>
      {teams.length === 0 ? (
        <p className="text-center text-gray-600">No teams available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team._id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleTeamDetails(team._id)}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {team.name}
                </h3>
                <span className="text-gray-500">
                  {expandedTeamId === team._id ? "▲" : "▼"}
                </span>
              </div>

              {expandedTeamId === team._id && (
                <div className="mt-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Coach:</strong> {team.coach}
                    </p>
                    <p>
                      <strong>Formation:</strong> {team.formation}
                    </p>
                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-700">
                        Achievements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {team.achievements && team.achievements.length > 0 ? (
                          team.achievements.map((achievement, i) => (
                            <li key={i} className="mt-2">
                              <p>
                                <strong>Title:</strong> {achievement.title}
                              </p>
                              <p>
                                <strong>Year:</strong> {achievement.year}
                              </p>
                              <p>
                                <strong>Description:</strong>{" "}
                                {achievement.description}
                              </p>
                            </li>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">
                            No achievements listed.
                          </p>
                        )}
                      </ul>
                    </div>
                    <div className="mt-3">
                      <p>
                        <strong>Display on Frontend:</strong>{" "}
                        {team.display ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
                      onClick={() => handleEditClick(team._id)}
                    >
                      Edit Team
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end mt-8">
        <Link
          to="/admin/teams/create-team"
          className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow focus:outline-none focus:ring focus:ring-green-300"
        >
          + Create New Team
        </Link>
      </div>
    </div>
  );
};

export default DisplayTeams;
