import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authAPI";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pat");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup({
        name,
        email,
        password,
        role: role.toUpperCase()
      });
      navigate("/login");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[560px] bg-white rounded-3xl shadow-lg flex overflow-hidden">
        <div className="w-1/2 flex flex-col justify-center px-12">
          <h2 className="text-3xl font-semibold mb-6">Registration</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 px-4 py-3 rounded-lg bg-gray-100 outline-none"
          />

          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setRole("mentor")}
              className={`flex-1 py-2 rounded-lg ${
                role === "mentor" ? "bg-slate-800 text-white" : "border"
              }`}
            >
              Mentor
            </button>

            <button
              onClick={() => setRole("pat")}
              className={`flex-1 py-2 rounded-lg ${
                role === "pat" ? "bg-slate-800 text-white" : "border"
              }`}
            >
              PAT
            </button>
          </div>

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
            onClick={handleSignup}
            className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Register
          </button>
        </div>

        <div className="w-1/2 bg-blue-500 text-white flex flex-col items-center justify-center rounded-l-[120px]">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="mb-8">Already have an account?</p>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-500 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
