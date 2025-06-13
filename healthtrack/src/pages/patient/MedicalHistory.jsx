// src/pages/MedicalHistory.jsx
import React from 'react';
import Navbar from '../../components/Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const MedicalHistory = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Medical History</h1>
            <p className="text-gray-600">Your complete medical background and health information</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit History
          </button>
        </header>

        {/* Top Section: Allergies, Chronic Conditions, Surgeries */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Allergies Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Allergies</h2>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-red-50 border border-red-200 p-3 rounded-md">
                <span className="text-gray-700">Penicillin</span>
                <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded-full font-medium">Severe</span>
              </div>
              <div className="flex justify-between items-center bg-red-50 border border-red-200 p-3 rounded-md">
                <span className="text-gray-700">Peanuts</span>
                <span className="text-xs text-red-700 bg-red-100 px-2 py-1 rounded-full font-medium">Severe</span>
              </div>
            </div>
          </div>

          {/* Chronic Conditions Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 0a9 9 0 01-9-9m9 9a9 9 0 00-9 9m9-9c1.657 0 3-4.5 3-9s-1.343-9-3-9V12zm0 0h.01" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Chronic Conditions</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <p className="font-medium text-gray-700">Hypertension</p>
                <p className="text-xs text-gray-500">Diagnosed: March 2020</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <p className="font-medium text-gray-700">Type 2 Diabetes</p>
                <p className="text-xs text-gray-500">Diagnosed: June 2019</p>
              </div>
            </div>
          </div>

          {/* Surgeries Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h2 className="text-lg font-semibold text-gray-800">Surgeries</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 border border-gray-200 p-3 rounded-md">
                <p className="font-medium text-gray-700">Appendectomy</p>
                <p className="text-xs text-gray-500">January 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Family History Section */}
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h2 className="text-lg font-semibold text-gray-800">Family History</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 p-3 rounded-md text-center">
              <p className="font-medium text-green-800">Heart Disease</p>
            </div>
            <div className="bg-green-50 border border-green-200 p-3 rounded-md text-center">
              <p className="font-medium text-green-800">Diabetes</p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-xl font-bold text-red-500">2</p>
            <p className="text-sm text-gray-600">Known Allergies</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-xl font-bold text-blue-500">2</p>
            <p className="text-sm text-gray-600">Chronic Conditions</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-xl font-bold text-gray-800">1</p>
            <p className="text-sm text-gray-600">Past Surgeries</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 text-center">
            <p className="text-xl font-bold text-green-500">2</p>
            <p className="text-sm text-gray-600">Family History Items</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MedicalHistory;