import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsOpen(false);
  };

  const guestLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/register" }
  ];

  const authLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "My Order", path: "/myorder" },
    { name: "Donate", path: "/donate" },
    { name: "About", path: "/about" },
    // { name: "Testimonials", path: "/testimonials" }
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">
          Food<span className="text-yellow-500">KALASH</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {(isAuthenticated ? authLinks : guestLinks).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-green-600 hover:text-yellow-500 font-medium transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="text-green-600 hover:text-red-700 font-medium transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-600 border border-green-600 px-3 py-1 rounded-md font-medium"
          >
            {isOpen ? "Close ✕" : "Menu ☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-md">
          {(isAuthenticated ? authLinks : guestLinks).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-green-600 hover:text-yellow-500 font-medium transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {isAuthenticated && (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-green-600 hover:text-red-700 font-medium transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
