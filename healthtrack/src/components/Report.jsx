 // src/pages/HealthReport.jsx
import React from 'react';
import {} from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const HealthReport = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Health Reports</h1>
            <p className="text-gray-600">Overview of your health data over time</p>
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
            Export Report
          </button>
        </header>

        {/* Overview Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-sm text-gray-500">Days without vital readings</p>
            <p className="text-3xl font-bold text-gray-800">1</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-sm text-gray-500">Average daily vital signs readings</p>
            <p className="text-3xl font-bold text-gray-800">72</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-sm text-gray-500">Medication adherence success</p>
            <p className="text-3xl font-bold text-gray-800">150%</p>
          </div>
        </section>

        {/* Trends Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Vital Signs Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Vital Signs Trends</h2>
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
              <img src="https://i.imgur.com/gK9pW2O.png" alt="Vital Signs Trends Chart" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Temperature & Oxygen Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Temperature & Oxygen Trends</h2>
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
              <img src="https://i.imgur.com/0iT7uY4.png" alt="Temperature & Oxygen Trends Chart" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Pain Level Trends */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Pain Level Trends</h2>
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
              <img src="https://i.imgur.com/9n9s1kZ.png" alt="Pain Level Trends Chart" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Medication Adherence */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Medication Adherence</h2>
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
              <img src="https://i.imgur.com/x0Z8Z5Q.png" alt="Medication Adherence Chart" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Summary and Export Options */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Vital Signs Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Vital Signs Summary</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex justify-between"><span>Heart Rate</span><span>72 bpm</span></p>
              <p className="flex justify-between"><span>Blood Pressure</span><span>145/92 mmHg</span></p>
              <p className="flex justify-between"><span>Temperature</span><span>98.6°F</span></p>
              <p className="flex justify-between"><span>Oxygen Level</span><span>98%</span></p>
              <p className="text-xs text-gray-500 mt-2">Last updated 2 hours ago</p>
            </div>
          </div>

          {/* Symptoms Overview */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Symptoms Overview</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex justify-between"><span>Pain Level</span><span>1-10</span></p>
              <p className="flex justify-between"><span>Mood</span><span>Normal mood</span></p>
              <p className="flex justify-between"><span>Symptoms logged</span><span>5</span></p>
              <p className="text-xs text-gray-500 mt-2">Last logged 1 hour ago</p>
            </div>
          </div>

          {/* Export Options */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Export Options</h2>
            <div className="space-y-3">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors duration-200">
                Download PDF Report
              </button>
              <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full hover:bg-gray-200 transition-colors duration-200">
                Export CSV Data
              </button>
              <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full hover:bg-gray-200 transition-colors duration-200">
                Export XML File
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">Please note data can be custom selected per period</p>
          </div>
        </section>

        {/* Health Insights */}
        <section className="bg-white rounded-lg shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-md">
            <p className="font-semibold text-green-800 mb-1">Positive Trend</p>
            <p className="text-sm text-green-700">Your heartrate has been consistently within normal range this week.</p>
          </div>
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
            <p className="font-semibold text-yellow-800 mb-1">Attention Needed</p>
            <p className="text-sm text-yellow-700">Blood pressure readings show slight increase. Consider discussing with your doctor.</p>
          </div>
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-md">
            <p className="font-semibold text-blue-800 mb-1">Recommendation</p>
            <p className="text-sm text-blue-700">Monitor your current medication adherence. Adherence has been inconsistent.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HealthReport;