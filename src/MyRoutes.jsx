import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import RepositoriesPage from './pages/RepositoriesPage';

export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/:login/repositories" element={<RepositoriesPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}
