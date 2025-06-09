// src/pages/Symptoms.jsx
import React, { useState } from 'react';
import Navbar from './Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const Symptoms = () => {
  const [painLevel, setPainLevel] = useState(3); // Default pain level based on image
  const [selectedMood, setSelectedMood] = useState('Okay'); // Default mood based on image

  const moods = [
    { name: 'Great', emoji: '😊' },
    { name: 'Good', emoji: '🙂' },
    { name: 'Okay', emoji: '😐' },
    { name: 'Poor', emoji: '😟' },
    // Note: The image only shows Great, Good, Okay, Poor. "Bad" is not present.
    // { name: 'Bad', emoji: '😞' }, // If you need 'Bad', uncomment this.
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Symptom Monitoring</h1>
            <p className="text-gray-600">Track your symptoms and how you're feeling</p>
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
            Record Symptoms
          </button>
        </header>

        {/* Today's Symptoms & Pain Level Trend Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Today's Symptoms Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Today's Symptoms</h2>

            <p className="text-sm text-gray-700 mb-2">Pain Level</p>
            <div className="flex items-center space-x-1 mb-6">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium border ${
                    painLevel === num
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                  }`}
                  onClick={() => setPainLevel(num)}
                >
                  {num}
                </button>
              ))}
              <span className="ml-2 text-lg font-bold text-gray-800">{painLevel}/10</span>
            </div>

            <p className="text-sm text-gray-700 mb-2">Mood</p>
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

            <p className="text-sm text-gray-700 mb-2">Notes</p>
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-4">
              <p className="text-gray-700 text-sm">Mild headache, feeling okay overall</p>
            </div>

            <p className="text-xs text-gray-500 text-right">Recorded at 2:36:56 AM</p>
          </div>

          {/* Pain Level Trend (Last 7 Days) Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Pain Level Trend (Last 7 Days)</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-600">6/7/2025</p> {/* Example date */}
              <div className="flex items-center">
                {/* Visual representation of pain level, based on the image's bar */}
                <div className="h-2 w-24 bg-blue-200 rounded-full mr-2">
                    <div className="h-full w-3/10 bg-blue-600 rounded-full"></div> {/* 3/10 filled */}
                </div>
                <span className="text-sm text-gray-800">3/10</span>
              </div>
            </div>
            {/* Placeholder for the chart */}
            <div className="w-full h-64 bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-200 rounded-md overflow-hidden">
              <img src="https://i.imgur.com/9n9s1kZ.png" alt="Pain Level Trend Chart" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>

        {/* Symptoms History Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Symptoms History</h2>
          <div className="space-y-4">
            {/* Example History Entry */}
            <div className="border border-gray-200 rounded-md p-4 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-800 mb-2">6/7/2025</p>
                <div className="flex items-center mb-2">
                  <p className="text-sm text-gray-700 mr-2">Pain Level:</p>
                  {/* Replicating the pain level circles */}
                  <div className="flex space-x-0.5">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <span
                        key={num}
                        className={`w-3 h-3 rounded-full ${
                          num <= 3 ? 'bg-blue-600' : 'bg-gray-200' // Assuming 3 is the recorded level
                        }`}
                      ></span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-800 ml-2">3/10</span>
                </div>
                <p className="text-sm text-gray-700">Notes: Mild headache, feeling okay overall</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">2:36:56 AM</p>
                <div className="flex items-center text-sm text-gray-700 mt-2">
                  <span className="text-xl mr-1">😐</span>
                  <span>Okay</span>
                </div>
              </div>
            </div>
            {/* Add more history entries here if needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Symptoms;