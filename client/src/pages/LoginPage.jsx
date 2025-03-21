import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
          Login to Food<span className="text-yellow-600">KALASH</span>
        </h2>

        {error && <p className="text-red-600 text-center mb-2">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
