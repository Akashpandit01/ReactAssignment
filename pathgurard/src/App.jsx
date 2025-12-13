import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import AppRouter from "./router";
import { AuthProvider, useAuth } from "../context/AuthContext";
import LoaderOverlay from "../components/LoaderOverlay";
import Navbar from "../components/Navbar";

/* -------------------------------------------
   App Content (inside Auth Context)
-------------------------------------------- */
function AppContent() {
  const { user, loading } = useAuth();

  // Restore last opened route after refresh
  useEffect(() => {
    if (user) {
      const lastPath = localStorage.getItem("lastPath");
      if (lastPath && window.location.pathname === "/") {
        window.history.replaceState(null, "", lastPath);
      }
    }
  }, [user]);

  if (loading) return null; // auth loader (initial)

  return (
    <>
      <LoaderOverlay />
      {user && <Navbar />}
      <AppRouter />
    </>
  );
}

/* -------------------------------------------
   Root App
-------------------------------------------- */
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
