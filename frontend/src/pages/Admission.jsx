import React, { useState } from 'react';

function Admission() {
  const [searchTerm, setSearchTerm] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'Alyvia Kelley', mode: 'Offline', Role: 'Attacker', dob: '06/18/1978' },
    { id: 2, name: 'Jaiden Nixon', mode: 'Online', Role: 'Defender', dob: '09/30/1963' },
    { id: 3, name: 'Ace Foley', mode: 'Online', Role: 'Defender', dob: '12/09/1985' },
    { id: 4, name: 'Nikolai Schmidt', mode: 'Offline', Role: 'GoalKeeper', dob: '03/22/1956' },
    { id: 5, name: 'Clayton Charles', mode: 'Online', Role: 'middfielder', dob: '10/14/1971' },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    mode: '',
    role: '',
    dob: ''
  });

  // Handle form submission for adding new student
  const handleAddStudent = (e) => {
    e.preventDefault();
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
    setNewStudent({ name: '', status: '', email: '', dob: '' }); // Reset form
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter students based on search term
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for students..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Students List */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Full Name</th>
              <th className="py-2 px-4 text-left">Mode</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Dob</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      student.status === 'Approved'
                        ? 'bg-green-100 text-green-800'
                        : student.status === 'Blocked'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {student.mode}
                  </span>
                </td>
                <td className="py-2 px-4">{student.Role}</td>
                <td className="py-2 px-4">{student.dob}</td>
                <td className="py-2 px-4 text-blue-600 cursor-pointer">Edit</td>
                <td className="py-2 px-4 text-red-600 cursor-pointer">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* New Student Admission Form */}
      <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">New Admission</h3>
        <form onSubmit={handleAddStudent}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={newStudent.name}
                onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={newStudent.status}
                onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select Role</option>
                <option value="Attacker">Attacker</option>
                <option value="Defender">Defender</option>
                <option value="Middfielder">middfielder</option>
                <option value="Middfielder">Goalkeeper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <input
                type="email"
                value={newStudent.Role}
                onChange={(e) => setNewStudent({ ...newStudent, Role: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                value={newStudent.dob}
                onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admission;