import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginForm/LoginPageForm';
import HomePage from './components/HomePage/HomePage';
import EmployeeFormPage from './pages/EmployeeFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/employees" element={<EmployeeFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
