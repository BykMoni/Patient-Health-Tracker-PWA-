// src/pages/PatientDashboard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Assuming Navbar.jsx is in src/components/

const PatientDashboard = () => {
  const [painLevel, setPainLevel] = useState(5); // Default pain level
  const [selectedMood, setSelectedMood] = useState(null); // No mood selected by default

  const moods = [
    { name: 'Great', emoji: '😊' },
    { name: 'Good', emoji: '🙂' },
    { name: 'Okay', emoji: '😐' },
    { name: 'Poor', emoji: '😟' },
    { name: 'Bad', emoji: '😞' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar - Now a separate component */}
      <Navbar /> 

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Top Bar (Simplified as not fully visible) */}
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex items-center space-x-4">
            {/* Placeholder for search/other icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hi, Jane!</span>
            <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-bold">
              JD
            </div>
          </div>
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
          <div className="bg-white rounded-lg shadow-sm p-5 flex flex-col justify-between border-l-4 border-yellow-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-gray-600 text-sm font-medium">Blood Pressure</h3>
              <span className="text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">Concerned</span>
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

        {/* Middle Section: Today's Symptoms, Upcoming Appointments, Medication Reminders */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Today's Symptoms */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Today's Symptoms</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-700">Pain Level</p>
              <button className="text-blue-600 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Symptom
              </button>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    painLevel === num
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setPainLevel(num)}
                >
                  {num}
                </button>
              ))}
              <span className="text-sm text-gray-500 ml-2">No pain</span>
              <span className="text-sm text-gray-500 ml-auto">Severe pain</span>
            </div>

            <p className="text-sm text-gray-700 mb-3">Mood</p>
            <div className="flex space-x-4 mb-6">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                    selectedMood === mood.name
                      ? 'bg-blue-100 border border-blue-400'
                      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedMood(mood.name)}
                >
                  <span className="text-2xl">{mood.emoji}</span>
                  <span className="text-xs text-gray-700 mt-1">{mood.name}</span>
                </button>
              ))}
            </div>

            <h3 className="text-md font-semibold text-gray-800 mb-3">Medication Adherence Today</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div>
                  <p className="text-gray-700 font-medium">Lisinopril 20mg</p>
                  <p className="text-sm text-gray-500">Once daily</p>
                </div>
                <span className="text-yellow-600 text-sm font-medium">Pending</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700 font-medium">Metformin 500mg</p>
                  <p className="text-sm text-gray-500">Twice daily</p>
                </div>
                <span className="text-yellow-600 text-sm font-medium">Pending</span>
              </div>
            </div>
          </div>

          {/* Upcoming Appointments & Medication Reminders */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
                <Link to="/appointments/all" className="text-blue-600 text-sm hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-md p-4 flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Dr. Michael Chen</p>
                    <p className="text-sm text-gray-600">Checkup</p>
                    <p className="text-sm text-gray-500">6/25/2025</p>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-md p-4 flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Dr. Luisa Rodriguez</p>
                    <p className="text-sm text-gray-600">Follow-up</p>
                    <p className="text-sm text-gray-500">6/24/2025</p>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full hover:bg-blue-700 transition-colors duration-200">
                Schedule Appointment
              </button>
            </div>

            {/* Medication Reminders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Medication Reminders</h2>
                <Link to="/medications/manage" className="text-blue-600 text-sm hover:underline">
                  Manage
                </Link>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                  <p className="font-semibold text-blue-800">Lisinopril 20mg</p>
                  <p className="text-sm text-blue-700">Once daily</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                  <p className="font-semibold text-blue-800">Metformin 500mg</p>
                  <p className="text-sm text-blue-700">Twice daily</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical History Overview */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Medical History Overview</h2>
            <Link to="/medical-history/full" className="text-blue-600 text-sm hover:underline">
              View Complete History
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Allergies */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-3">Allergies</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-gray-700 text-sm">
                  <span>Penicillin</span>
                  <span className="text-red-700 bg-red-100 px-2 py-0.5 rounded-full text-xs">Severe</span>
                </div>
                <div className="flex justify-between items-center text-gray-700 text-sm">
                  <span>Peanuts</span>
                  <span className="text-red-700 bg-red-100 px-2 py-0.5 rounded-full text-xs">Severe</span>
                </div>
              </div>
            </div>

            {/* Chronic Conditions */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-3">Chronic Conditions</h3>
              <div className="space-y-2">
                <div className="text-gray-700 text-sm">
                  <p>Hypertension</p>
                  <p className="text-xs text-gray-500">Diagnosed: March 2020</p>
                </div>
                <div className="text-gray-700 text-sm">
                  <p>Type 2 Diabetes</p>
                  <p className="text-xs text-gray-500">Diagnosed: June 2019</p>
                </div>
              </div>
            </div>

            {/* Recent Surgeries */}
            <div>
              <h3 className="text-md font-semibold text-gray-800 mb-3">Recent Surgeries</h3>
              <div className="space-y-2">
                <div className="text-gray-700 text-sm">
                  <p>Appendectomy</p>
                  <p className="text-xs text-gray-500">January 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Removed Health Progress - Last 7 Days section */}
      </main>
    </div>
  );
};

export default PatientDashboard;