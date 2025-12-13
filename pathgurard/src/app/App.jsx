import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Notes from "../pages/Notes";
import NoteDetail from "../pages/NoteDetail";
import Profile from "../pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
      <Route path="/projects/:projectId" element={<ProtectedRoute><ProjectDetail /></ProtectedRoute>} />
      <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />
      <Route path="/notes/:noteId" element={<ProtectedRoute><NoteDetail /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    </Routes>
  );
}
