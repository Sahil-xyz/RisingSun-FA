import React from 'react'
import { useState } from 'react';
const Girls =()=>{
  const under13 = [
    { name: 'Player 1 (U13)', dob: '15/05/2010', age: 13, position: 'Midfielder' },
    { name: 'Player 2 (U13)', dob: '25/08/2010', age: 13, position: 'Defender' },
    { name: 'Player 3 (U13)', dob: '05/12/2011', age: 12, position: 'Striker' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    // Add more players for Under 13
  ];

  const under15 = [
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },{ name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },{ name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },{ name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    // Add more players for Under 15
  ];

  const under17_19 = [
    { name: 'Aizaan Shaikh', dob: '11/12/2006', age: 17, position: 'Midfielder' },
    { name: 'Atharv Narayan Ghadi', dob: '24/01/2005', age: 19, position: 'Defender' },
    { name: 'Bikram Sen', dob: '17/03/2006', age: 17, position: 'Striker' },
    { name: 'Caiden Estrocio', dob: '24/09/2006', age: 17, position: 'Goalkeeper' },
    { name: 'Clarison Maron Fernandes', dob: '01/02/2005', age: 19, position: 'Defender' },
    { name: 'DS Zimik Maring', dob: '25/11/2007', age: 16, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    { name: 'Player 1 (U15)', dob: '18/07/2008', age: 15, position: 'Goalkeeper' },
    { name: 'Player 2 (U15)', dob: '12/11/2008', age: 15, position: 'Defender' },
    { name: 'Player 3 (U15)', dob: '23/09/2009', age: 14, position: 'Midfielder' },
    // Add more players for Under 17/19
  ];

  // State for active tab and player data
  const [activeTab, setActiveTab] = useState('Under 17/19');
  const [players, setPlayers] = useState(under17_19);

  // Handler to switch teams when tab is clicked
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Under 13':
        setPlayers(under13);
        break;
      case 'Under 15':
        setPlayers(under15);
        break;
      case 'Under 17/19':
        setPlayers(under17_19);
        break;
      default:
        setPlayers(under17_19);
    }
  };


  return(
<>
<div className="relative">
      {/* Background Image */}
      <img
        src="https://sesafootballacademy.in/wp-content/uploads/2022/04/team-1.jpg"
        alt="Junior Football Match"
        className="w-full h-96 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-white">
          {/* Title */}
          <h1 className="text-4xl font-bold">Girls</h1>

          {/* Breadcrumb */}
          <p className="text-sm">
            <a href="/" className="hover:underline">Home</a> / <a href="/team" className="hover:underline">Team</a> /Girls
          </p>
        </div>
      </div>

      {/* Volunteer button on the side */}
      <a
        href="/volunteer"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white py-2 rotate-90 hover:bg-blue-600"
        
      >
        Volunteer With Us
      </a>
    </div>
 
    <div className="bg-gray-100 min-h-screen  " style={{
        backgroundImage: `url('https://sesafootballacademy.in/wp-content/themes/sfa-home/images/story-leaders.jpg')`,
        backgroundSize: 'cover', // This makes the image cover the entire div
        backgroundPosition: 'center', // Center the image
        height: '100%', // Set height as needed
        width: '100%', // Set width as needed
      }}>

<div className='pb-10'>
      {/* Header section with tabs */}
      <div className="relative  text-white ">
        <img
          src="/path/to/stadium-image.png"
          alt="Stadium"
          className="w-full h-64 object-cover opacity-50"
        />
        <div className="absolute top-0 left-0 w-full h-64 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold"> Girls Team</h1>
          <p className="text-lg mt-2">Under {activeTab}</p>

          {/* Tab Navigation */}
          <div className="mt-4 flex space-x-4">
            {['Under 13', 'Under 15', 'Under 17/19'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  activeTab === tab ? 'bg-blue-600' : 'bg-blue-500'
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="container mx-auto mt-8 ">
        
        <div className="bg-white shadow-md rounded" >
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name of the Player</th>
                <th className="py-2 px-4 text-left">Date of Birth</th>
                <th className="py-2 px-4 text-left">Age</th>
                <th className="py-2 px-4 text-left">Playing Position</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr
                  key={index}
                  className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td className="py-2 px-4">{player.name}</td>
                  <td className="py-2 px-4">{player.dob}</td>
                  <td className="py-2 px-4">{player.age}</td>
                  <td className="py-2 px-4">{player.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
    
</>
  );
}
export default Girls;
