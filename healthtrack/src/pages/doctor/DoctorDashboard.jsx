import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { fetchPatients } from '../api'; // Placeholder for actual API call

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data (replace with real fetch from backend)
  useEffect(() => {
    const dummyPatients = [
      {
        id: '1',
        name: 'John Doe',
        lastEntry: '2025-07-19',
        symptoms: ['Cough', 'Fatigue'],
      },
      {
        id: '2',
        name: 'Jane Smith',
        lastEntry: '2025-07-18',
        symptoms: ['Fever'],
      },
    ];
    setPatients(dummyPatients);
  }, []);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
          <nav className="space-x-4">
            <Link to="/profile" className="hover:underline">Profile</Link>
            <Link to="/logout" className="hover:underline">Logout</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex flex-col gap-6">
        {/* Search */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Patients</h2>
          <input
            type="text"
            placeholder="Search by name..."
            className="border px-4 py-2 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Patient List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPatients.map((patient) => (
            <div
              key={patient.id}
              className="bg-white shadow rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-bold text-lg">{patient.name}</h3>
              <p className="text-sm text-gray-600">
                Last Entry: {patient.lastEntry}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Symptoms: {patient.symptoms.join(', ')}
              </p>
              <Link
                to={`/patients/${patient.id}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Logs →
              </Link>
            </div>
          ))}
        </div>

        {/* Placeholder: Alerts or Comments */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <div className="bg-white p-4 rounded shadow border">
            <p className="text-gray-600 italic">No recent comments yet.</p>
            {/* Optionally map over recent comments/feedback here */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DoctorDashboard;
