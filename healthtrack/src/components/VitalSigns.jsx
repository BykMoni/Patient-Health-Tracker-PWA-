// src/pages/VitalSigns.jsx
import React from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Removed unused imports
import Navbar from '../components/Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const VitalSigns = () => {
  // const location = useLocation(); // Removed unused variable and its hook call

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Vital Signs</h1>
            <p className="text-gray-600">Monitor and track your health metrics</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Record Vitals
          </button>
        </header>

        {/* Vital Signs Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Heart Rate Card */}
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border-l-4 border-green-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-600 text-sm font-medium">Heart Rate</h3>
              <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Normal</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              72 <span className="text-lg font-normal text-gray-500">bpm</span>
            </div>
            <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
          </div>

          {/* Blood Pressure Card */}
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border-l-4 border-orange-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-600 text-sm font-medium">Blood Pressure</h3>
              <span className="text-xs text-orange-700 bg-orange-100 px-2 py-1 rounded-full">Elevated</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              145/92 <span className="text-lg font-normal text-gray-500">mmHg</span>
            </div>
            <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
          </div>

          {/* Temperature Card */}
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border-l-4 border-green-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-600 text-sm font-medium">Temperature</h3>
              <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Normal</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              98.6 <span className="text-lg font-normal text-gray-500">°F</span>
            </div>
            <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
          </div>

          {/* Oxygen Level Card */}
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border-l-4 border-green-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-600 text-sm font-medium">Oxygen Level</h3>
              <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">Normal</span>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">
              98% <span className="text-lg font-normal text-gray-500"></span>
            </div>
            <p className="text-xs text-gray-500">Last updated 2 hours ago</p>
          </div>
        </section>

        {/* Vital Trends Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Heart Rate & Blood Pressure Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Heart Rate & Blood Pressure Trends</h2>
            {/* Placeholder for the chart */}
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
                <img src="https://i.imgur.com/gK9pW2O.png" alt="Heart Rate & Blood Pressure Trends" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Temperature & Oxygen Level Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Temperature & Oxygen Level Trends</h2>
            {/* Placeholder for the chart */}
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
                <img src="https://i.imgur.com/0iT7uY4.png" alt="Temperature & Oxygen Level Trends" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Vital Signs History Table */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Vital Signs History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Heart Rate
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blood Pressure
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Temperature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Oxygen
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6/7/2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">72 bpm</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">145/92 mmHg</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">98.6°F</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">98%</td>
                </tr>
                {/* Add more rows here for additional history */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VitalSigns;