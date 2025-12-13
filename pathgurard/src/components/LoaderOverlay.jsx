import { useAuth } from "../context/AuthContext";

export default function LoaderOverlay() {
  const { routeLoading } = useAuth();
  if (!routeLoading) return null;

  return (
    <div className="overlay">
      <div className="spinner">Loading...</div>
    </div>
  );
}
