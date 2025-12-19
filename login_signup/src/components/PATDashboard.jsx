import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function PatDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">PAT Dashboard</h1>

      <button
        onClick={() => {
          logoutUser();
          navigate("/login");
        }}
        className="bg-red-500 text-white px-6 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
