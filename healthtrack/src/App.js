// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'; // <-- This must be correctly spelled and file should exist
import PatientDashboard from './pages/PatientDashboard';
import LogEntryForm from './components/LogEntryForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogEntryForm />} />
        <Route path="/PatientDashboard" element={<PatientDashboard/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
