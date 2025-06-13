// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components from the 'components' directory
import PatientDashboard from './pages/patient/PatientDashboard';
import VitalSigns from './pages/patient/VitalSigns';
import Symptoms from './pages/patient/Symptoms';
import MedicalHistory from './pages/patient/MedicalHistory';
import Appointments from './pages/patient/Appointments';
import Medications from './pages/patient/Medications';
import HealthReport from './pages/patient/Report'; // Assuming you named this HealthReport.jsx

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
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/vitalsigns" element={<VitalSigns />} />
        <Route path="/patient/symptoms" element={<Symptoms />} />
        <Route path="/patient/medicalhistory" element={<MedicalHistory />} />
        <Route path="/patient/appointments" element={<Appointments />} />
        <Route path="/patient/medications" element={<Medications />} />
        <Route path="/patient/reports" element={<HealthReport />} />

        {/* Uncomment and add routes for other components if you have them */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;