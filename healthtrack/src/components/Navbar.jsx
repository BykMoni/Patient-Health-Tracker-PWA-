// src/components/Navbar.jsx
import React, { useState } from 'react'; // Import useState
import { Link, useLocation } from 'react-router-dom';
import EmergencyModal from '../pages/patient/EmergencyModal'; // Import the EmergencyModal component

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleSOSClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = () => {
    // Here you would add logic to actually trigger an emergency alert (e.g., API call)
    alert("Emergency confirmed! Sending alerts...");
    setIsModalOpen(false); // Close modal after confirming
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3a1 1 0 001-1v-8a1 1 0 00-1-1h-3a1 1 0 00-1 1v8zm-6 2h18' },
    { name: 'Vital Signs', path: '/vitalsigns', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { name: 'Symptoms', path: '/symptoms', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.071 12.071 0 003 12c0 2.893 1.146 5.513 3.003 7.424M12 21v-8m-4-4h8' },
    { name: 'Medical History', path: '/medicalhistory', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { name: 'Appointments', path: '/appointments', icon: 'M8 7V3m8 4V3m-9 8h.01M12 15h.01M12 19h.01M6 18H4a2 2 0 01-2-2V7h16v9a2 2 0 01-2 2h-2' },
    { name: 'Medications', path: '/medications', icon: 'M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Reports', path: '/reports', icon: 'M9 17v-5m3 5v-5m3 5v-5M9 21h6a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z' },
  ];

  return (
    <aside className="w-64 bg-white p-6 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span className="text-xl font-semibold text-gray-800">HealthTracker</span>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center py-2 px-4 rounded-md transition-colors duration-200 ${
                currentPath === item.path || (currentPath === '/' && item.path === '/dashboard')
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Emergency SOS */}
      <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
        <p className="text-sm font-semibold text-red-700 mb-2">Emergency SOS</p>
        <button
          onClick={handleSOSClick} // Attach click handler
          className="bg-red-500 text-white py-2 px-4 rounded-md w-full hover:bg-red-600 transition-colors duration-200"
        >
          SOS Alert
        </button>
        <p className="text-xs text-red-600 mt-2">For medical emergencies only</p>
      </div>

      {/* Emergency Modal */}
      <EmergencyModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
      />
    </aside>
  );
};

export default Navbar;