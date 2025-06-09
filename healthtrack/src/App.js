// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components from the 'components' directory
import PatientDashboard from './pages/PatientDashboard';
import VitalSigns from './components/VitalSigns';
import Symptoms from './components/Symptoms';
import MedicalHistory from './components/MedicalHistory';
import Appointments from './components/Appointments';
import Medications from './components/Medications';
import HealthReport from './components/Report'; // Assuming you named this HealthReport.jsx

// You might also have these, but they are commented out in your original request
// import LandingPage from './components/LandingPage';
// import Login from './components/Login';
// import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Set a default route, e.g., to the Dashboard */}
        <Route path="/" element={<PatientDashboard />} />

        {/* Routes for all the components */}
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/vitalsigns" element={<VitalSigns />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/medicalhistory" element={<MedicalHistory />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/reports" element={<HealthReport />} />

        {/* Uncomment and add routes for other components if you have them */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;