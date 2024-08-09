// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import CourseCatalog from './components/CourseCatalog';
import LabWorkCatalog from './components/LabWorkCatalog';
import LabWorkDetail from './components/LabWorkDetail';
import GameCatalog from './components/GameCatalog';
import GameDetail from './components/GameDetail';
import FavoritesList from './components/FavoritesList';
import ProfileInfo from './components/ProfileInfo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ThemeDetail from './components/ThemeDetail';
import ThemeList from './components/ThemeList';
import LabExperimentDetail from './components/LabExperiment';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses/:themeId" element={<ThemeList />} />
          <Route path="/themes/:themeId" element={<ThemeDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/lab-works" element={<LabWorkCatalog />} />
          <Route path="/lab-works/:labWorkId" element={<LabWorkDetail />} />
          <Route path="/games" element={<GameCatalog />} />
          <Route path="/games/:gameId" element={<GameDetail />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path="/lab-works/:gradeId/:labWorkId" element={<LabExperimentDetail />} />
         
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;
