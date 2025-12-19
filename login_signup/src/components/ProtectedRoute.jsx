import { Navigate } from "react-router-dom";
import { isAuthenticated, getRole } from "../utils/auth";

export default function ProtectedRoute({ children, allowedRole }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && getRole() !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
