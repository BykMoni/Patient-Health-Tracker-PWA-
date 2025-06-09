// src/pages/Medications.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const Medications = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Medications</h1>
            <p className="text-gray-600">Manage your prescriptions and medication schedule</p>
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
            Add Medication
          </button>
        </header>

        {/* Main Grid Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column: Today's Medication Schedule */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Today's Medication Schedule</h2>
            <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Lisinopril 10mg</p>
                    <p className="text-sm text-gray-600">Once daily</p>
                  </div>
                </div>
                <span className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded-full">Taken</span>
              </div>
              <p className="text-xs text-gray-500 text-right">Scheduled: 09:00</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-800 text-lg">Metformin 500mg</p>
                    <p className="text-sm text-gray-600">Twice daily</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-600 border border-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 transition-colors duration-200">
                    Snooze
                  </button>
                  <button className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded-md hover:bg-red-50 transition-colors duration-200">
                    Skip
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-500 text-right">Scheduled: 09:00</p>
            </div>
          </div>

          {/* Right Column: Summary, Reminders, Quick Actions */}
          <div className="space-y-6">
            {/* Medication Summary Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Medication Summary</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-gray-600">Active Medications</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">1</p>
                  <p className="text-sm text-gray-600">Taken Today</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">1</p>
                  <p className="text-sm text-gray-600">Pending Today</p>
                </div>
              </div>
            </div>

            {/* Reminders Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Reminders</h2>
              <div className="space-y-3">
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md">
                  <p className="font-semibold text-yellow-800">Refill Due Soon</p>
                  <p className="text-sm text-yellow-700">Nexium - 7 days remaining</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                  <p className="font-semibold text-blue-800">Next Dose</p>
                  <p className="text-sm text-blue-700">Metformin 500mg in 2 hours</p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors duration-200">
                  Add Medication
                </button>
                <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full hover:bg-gray-200 transition-colors duration-200">
                  Request Refill
                </button>
                <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full hover:bg-gray-200 transition-colors duration-200">
                  Set Reminder
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Medications Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">All Medications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medication Item 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <p className="font-semibold text-gray-800 text-lg">Lisinopril</p>
                </div>
                <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">Active</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">5mg</p>
              <p className="text-sm text-gray-700 mb-1">Frequency: Once daily</p>
              <p className="text-sm text-gray-700 mb-1">Prescribed by: Dr. Michael Chen</p>
              <p className="text-sm text-gray-700 mb-3">Started: 2/2/2024</p>
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                  <span>Active</span>
                </label>
                <button className="text-blue-600 text-sm hover:underline">Edit</button>
              </div>
            </div>

            {/* Medication Item 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <p className="font-semibold text-gray-800 text-lg">Metformin</p>
                </div>
                <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">Active</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">500mg</p>
              <p className="text-sm text-gray-700 mb-1">Frequency: Twice daily</p>
              <p className="text-sm text-gray-700 mb-1">Prescribed by: Dr. Lucia Rodriguez</p>
              <p className="text-sm text-gray-700 mb-3">Started: 2/2/2024</p>
              <div className="flex justify-between items-center">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                  <input type="checkbox" className="form-checkbox text-blue-600" defaultChecked />
                  <span>Active</span>
                </label>
                <button className="text-blue-600 text-sm hover:underline">Edit</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Medications;