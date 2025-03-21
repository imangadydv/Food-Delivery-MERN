import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:4000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
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
          Create your Food<span className="text-yellow-600">KALASH</span>{" "}
          Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
