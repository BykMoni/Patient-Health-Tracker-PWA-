// src/pages/PatientDashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <h1 className="text-2xl font-bold">Patient Dashboard</h1>
      </header>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards (placeholders for now) */}
        <Link to="/log-health" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Log Health Data</h2>
          <p>Record your daily symptoms, vitals, and medications.</p>
        </Link>

        <Link to="/goals" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Track Goals</h2>
          <p>View and update your health goals and progress.</p>
        </Link>

        <Link to="/reminders" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Reminders</h2>
          <p>Set medication or activity reminders.</p>
        </Link>

        <Link to="/charts" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Health Charts</h2>
          <p>View weekly or monthly graphs of your vitals.</p>
        </Link>

        <Link to="/share" className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-lg font-semibold mb-2">Share with Doctor</h2>
          <p>Allow your doctor to access your health logs.</p>
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HealthTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default PatientDashboard;
