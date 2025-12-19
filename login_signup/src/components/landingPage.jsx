import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 shadow-sm bg-white">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <span className="text-2xl">🦉</span>
          <span className="text-xl font-bold text-purple-600">Cognizant</span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow hover:opacity-90 transition"
          >
            Signup
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-6 mt-8 rounded-3xl bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 shadow-lg px-6 md:px-16 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Welcome to Vibe Coding
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl mb-10">
          Vibe coding is writing code by intuition and flow—less overthinking,
          more momentum, and letting creativity guide the logic.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => navigate("/courses")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Browse Courses
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-4 rounded-full border-2 border-purple-500 text-purple-600 text-lg font-semibold hover:bg-purple-50 transition"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 py-16">
        <blockquote className="max-w-3xl text-xl md:text-2xl italic text-gray-700">
          “Vibe coding is itself a vibe.”
          <footer className="mt-4 text-base font-medium text-gray-600">
            — Ansh
          </footer>
        </blockquote>
      </section>

    </div>
  );
}
