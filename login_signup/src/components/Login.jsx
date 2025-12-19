import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authAPI";
import { loginUser } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await login({ email, password });
      loginUser(user.role.toLowerCase());
      if (user.role === "MENTOR") {
        navigate("/mentor/dashboard");
      } else {
        navigate("/pat/dashboard");
      }
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[520px] bg-white rounded-3xl shadow-lg flex overflow-hidden">
        <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center rounded-r-[120px]">
          <h2 className="text-4xl font-bold mb-4">Hello, Welcome!</h2>
          <p className="mb-8">Don't have an account?</p>
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-500 transition"
          >
            Register
          </button>
        </div>

        <div className="w-1/2 flex flex-col justify-center px-12">
          <h2 className="text-3xl font-semibold mb-8 text-center">Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 px-4 py-3 rounded-lg bg-gray-100 outline-none"
          />

          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
