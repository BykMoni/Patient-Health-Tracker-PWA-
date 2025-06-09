import React from 'react';

function HealthLinkInsights() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">HealthLink Insights</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced health monitoring system connecting patients and healthcare workers through intelligent
          monitoring, real-time alerts, and comprehensive care management
        </p>
      </div>

      {/* Portals Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
        {/* Patient Portal */}
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 border-2 border-green-500 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Portal</h2>
          <p className="text-gray-600 mb-6">Comprehensive health tracking and care coordination</p>
          <ul className="text-left text-gray-700 space-y-3 mb-8">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Daily vital signs monitoring with progress charts
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Symptom tracking and medication management
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Emergency SOS alerts and video consultations
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h.01M12 15h.01M12 19h.01M6 18H4a2 2 0 01-2-2V7h16v9a2 2 0 01-2 2h-2" />
              </svg>
              Medical History access and appointment scheduling
            </li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Enter Patient Portal
          </button>
        </div>

        {/* Health Worker Portal */}
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center p-3 border-2 border-blue-500 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2zm2-16v4a1 1 0 001 1h4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Health Worker Portal</h2>
          <p className="text-gray-600 mb-6">Advanced patient monitoring and care management</p>
          <ul className="text-left text-gray-700 space-y-3 mb-8">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-5m3 5v-5m3 5v-5M9 21h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Real-time patient dashboards and health analytics
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17v-5m3-1v8m-12-8v8m-3-1v8M4 17h16" />
              </svg>
              Critical alerts and abnormal reading notifications
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Video consultations and patient communication
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              Medical history updates and care plan management
            </li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Enter Health Worker Portal
          </button>
        </div>
      </div>

      {/* System Features Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">System Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Real-time Monitoring */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-3 border-2 border-red-500 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600">
              Continuous vital signs tracking with intelligent alerts for abnormal readings
            </p>
          </div>

          {/* Secure Authentication */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-3 border-2 border-blue-500 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.071 12.071 0 003 12c0 2.893 1.146 5.513 3.003 7.424M12 21v-8m-4-4h8"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Role-based access control ensuring patient privacy and data security
            </p>
          </div>

          {/* Remote Consultations */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center p-3 border-2 border-green-500 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Consultations</h3>
            <p className="text-gray-600">
              Video calls and messaging for continuous patient-provider communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthLinkInsights;