// src/components/DisplayTeams.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayTeams = () => {
  const [teams, setTeams] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [expandedTeamId, setExpandedTeamId] = useState(null); // Track expanded team
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

        setTeams(response.data.data || []); // Access the correct data structure
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
    setExpandedTeamId((prevId) => (prevId === id ? null : id)); // Toggle team details
  };

  const handleEditClick = (teamId) => {
    navigate(`/admin/teams/${teamId}`); // Redirect to edit page
  };

  if (loading) return <p>Loading teams...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Teams</h2>
      {teams.length === 0 ? (
        <p>No teams available.</p>
      ) : (
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team._id} className="border-b pb-4">
              {/* Team Name with click handler to toggle details */}
              <h3
                className="text-lg font-bold cursor-pointer hover:underline"
                onClick={() => toggleTeamDetails(team._id)}
              >
                {team.name}
              </h3>

              {/* Conditionally display team details */}
              {expandedTeamId === team._id && (
                <div className="mt-2 bg-gray-100 p-4 rounded shadow">
                  <p>
                    <strong>Coach:</strong> {team.coach}
                  </p>
                  <p>
                    <strong>Formation:</strong> {team.formation}
                  </p>
                  <div>
                    <h4 className="font-semibold">Achievements:</h4>
                    <ul className="list-disc list-inside">
                      {team.achievements && team.achievements.length > 0 ? (
                        team.achievements.map((achievement, i) => (
                          <li key={i} className="mt-1">
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
                        <p>No achievements listed.</p>
                      )}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <p>
                      <strong>Display on Frontend:</strong>{" "}
                      {team.display ? "Yes" : "No"}
                    </p>
                  </div>
                  {/* Edit Button */}
                  <button
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => handleEditClick(team._id)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end m-4">
        <Link
          to="/admin/teams/create-team"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New Team
        </Link>
      </div>
    </div>
  );
};

export default DisplayTeams;
