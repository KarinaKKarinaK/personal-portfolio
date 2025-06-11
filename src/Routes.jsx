// filepath: /Users/karina/Documents/react/portfolio/personal-portfolio/src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}