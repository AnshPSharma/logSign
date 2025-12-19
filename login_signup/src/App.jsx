import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MentorDashboard from "./components/MentorDashboard";
import PatDashboard from "./components/PATsDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/mentor/dashboard"
          element={
            <ProtectedRoute allowedRole="mentor">
              <MentorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pat/dashboard"
          element={
            <ProtectedRoute allowedRole="pat">
              <PatDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
