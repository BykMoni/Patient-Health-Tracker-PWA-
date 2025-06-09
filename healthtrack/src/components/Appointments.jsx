// src/pages/Appointments.jsx
import React from 'react';
import Navbar from './Navbar'; // Adjust path if your Navbar.jsx is elsewhere

const Appointments = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Navbar component */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Appointments</h1>
            <p className="text-gray-600">Manage your healthcare appointments</p>
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
            Schedule Appointment
          </button>
        </header>

        {/* Main Grid Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column: Upcoming Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
            {/* Appointment Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-500">
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-800">Dr. Michael Chen</p>
                <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Specialty:</span> Cardiology
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Date & Time:</span> 6/28/2025 at 10:30 PM
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Duration:</span> 30 minutes
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Type:</span> Checkup
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Regular blood pressure check
              </p>
              <div className="flex justify-end space-x-3">
                <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-50 transition-colors duration-200">
                  Reschedule
                </button>
                <button className="text-red-600 border border-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-50 transition-colors duration-200">
                  Cancel
                </button>
              </div>
            </div>

            {/* Appointment Card 2 */}
            <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-blue-500">
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-gray-800">Dr. Lisa Rodriguez</p>
                <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-full">Scheduled</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Specialty:</span> Internal Medicine
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Date & Time:</span> 6/24/2025 at 10:00 AM
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Duration:</span> 60 minutes
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Type:</span> Annual Physical
              </p>
              <p className="text-sm text-gray-700 mb-4">
                Annual physical examination
              </p>
              <div className="flex justify-end space-x-3">
                <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded-md text-sm hover:bg-blue-50 transition-colors duration-200">
                  Reschedule
                </button>
                <button className="text-red-600 border border-red-600 px-3 py-1 rounded-md text-sm hover:bg-red-50 transition-colors duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Actions & Appointment Summary & Next Appointment */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md w-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
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
                  Schedule Appointment
                </button>
                <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Doctor's Office
                </button>
                <button className="bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.553-.894L9 7m0 10l4 2 5.447-2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.553-.894L15 7m-6 10V7m0 10a2 2 0 100 4m0-4a2 2 0 110 4m0 0H9m-6 0h6" />
                  </svg>
                  Get Directions
                </button>
              </div>
            </div>

            {/* Appointment Summary Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment Summary</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">2</p>
                  <p className="text-sm text-gray-600">Upcoming Appointments</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">0</p>
                  <p className="text-sm text-gray-600">Completed This Year</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">2</p>
                  <p className="text-sm text-gray-600">Total Appointments</p>
                </div>
              </div>
            </div>

            {/* Next Appointment Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Next Appointment</h2>
              <p className="font-semibold text-gray-800">Dr. Michael Chen</p>
              <p className="text-sm text-gray-600">Cardiology</p>
              <p className="text-sm text-gray-600">6/28/2025</p>
              <p className="text-sm text-blue-600 font-medium">10:30 PM</p>
            </div>
          </div>
        </section>

        {/* Appointment History Table */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Appointment History</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Doctor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Specialty
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* History Row 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Michael Chen</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cardiology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Checkup</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>6/28/2025</div>
                    <div>10:30 PM</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full text-xs font-medium">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Regular blood pressure check</td>
                </tr>
                {/* History Row 2 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Dr. Lisa Rodriguez</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Internal Medicine</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Annual Physical</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>6/24/2025</div>
                    <div>10:00 AM</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full text-xs font-medium">Scheduled</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Annual physical examination</td>
                </tr>
                {/* Add more history rows here as needed */}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appointments;