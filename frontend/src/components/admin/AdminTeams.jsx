import React from 'react';

const AdminTeams = () => {
  // Sample customer data
  const customers = [
    { id: 1, fullName: 'Alyvia Kelley', status: 'Approved', email: 'a.kelley@gmail.com', dob: '06/18/1978' },
    { id: 2, fullName: 'Jaiden Nixon', status: 'Approved', email: 'jaiden.n@gmail.com', dob: '09/30/1963' },
    { id: 3, fullName: 'Ace Foley', status: 'Blocked', email: 'ace.foley@yahoo.com', dob: '12/09/1985' },
    { id: 4, fullName: 'Nikolai Schmidt', status: 'Rejected', email: 'nikolai.schmidt1964@outlook.com', dob: '03/22/1956' },
    { id: 5, fullName: 'Clayton Charles', status: 'Approved', email: 'me@clayton.com', dob: '10/14/1971' },
  ];

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Customers List</h1>
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          + NEW CUSTOMER
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Full Name</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">E-Mail</th>
              <th className="py-3 px-6 text-left">Date of Birth</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{customer.id}</td>
                <td className="py-3 px-6 text-left">{customer.fullName}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`px-2 py-1 rounded-full text-xs ${customer.status === 'Approved' ? 'bg-green-200 text-green-600' : customer.status === 'Blocked' ? 'bg-red-200 text-red-600' : 'bg-yellow-200 text-yellow-600'}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">{customer.email}</td>
                <td className="py-3 px-6 text-left">{customer.dob}</td>
                <td className="py-3 px-6 text-center">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-red-500 hover:text-red-700 ml-4">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTeams;
