
// importing the reacte router here
import { Navigate } from "react-router-dom";

// impoeritng that authcontext custom hook
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}