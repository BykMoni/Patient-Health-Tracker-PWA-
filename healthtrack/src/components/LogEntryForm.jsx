import React, { useState } from 'react';
import { db } from '../services/db';
import { getAuth } from '../services/auth';

import { collection, addDoc, Timestamp } from 'firebase/firestore';

const LogEntryForm = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    symptoms: '',
    temperature: '',
    heartRate: '',
    bloodPressure: '',
    glucose: '',
    medications: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert("You must be logged in to submit a log.");
    return;
  }

  try {
    await addDoc(collection(db, "healthLogs"), {
      ...formData,
      userId: user.uid,
      timestamp: Timestamp.now()
    });
    alert("Health log submitted successfully!");
    setFormData({
      date: new Date().toISOString().split('T')[0],
      symptoms: '',
      temperature: '',
      heartRate: '',
      bloodPressure: '',
      glucose: '',
      medications: '',
    });
  } catch (error) {
    console.error("Error submitting log:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">Log Health Data</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded" />
          <textarea name="symptoms" value={formData.symptoms} onChange={handleChange} placeholder="Describe symptoms..." className="w-full border p-2 rounded" />
          <div className="grid grid-cols-2 gap-4">
            <input type="number" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="Temperature (°C)" className="border p-2 rounded" />
            <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} placeholder="Heart Rate (bpm)" className="border p-2 rounded" />
            <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} placeholder="Blood Pressure (e.g. 120/80)" className="border p-2 rounded" />
            <input type="number" name="glucose" value={formData.glucose} onChange={handleChange} placeholder="Glucose (mg/dL)" className="border p-2 rounded" />
          </div>
          <input type="text" name="medications" value={formData.medications} onChange={handleChange} placeholder="Medications (comma-separated)" className="w-full border p-2 rounded" />
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Submit Log
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogEntryForm;
