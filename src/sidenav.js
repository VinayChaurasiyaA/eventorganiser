import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/logo.png";
// import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

// BUG: if the path is "/" then the active class is not removed from the previous active link
export default function Sidenav() {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set the active state based on the current path
    setActive(location.pathname);
  }, [location.pathname]);

  const handleActive = (path) => {
    setActive(path);
  };
  return (
    <div className="bg-black text-white p-4 lg:pg-6 font-semibold">
      <nav className="flex items-center justify-between px-4 py-2 lg:px-8">
        {/* Logo Section */}
        <NavLink to="/">
          <div className="logo flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
        </NavLink>

        {/* Center Links Section */}
        {/* Center Links Section */}
        <div className="hidden lg:flex space-x-6">
          {[
            { path: "/about-us", label: "About Us" },
            { path: "/topevents", label: "Top Events" },
            { path: "/allevents", label: "All Events" },
            { path: "/prdesk", label: "PR Desk" },
            { path: "/result", label: "Result" },
          ].map((link) => (
            <NavLink
              key={link.path}
              className={`hover:text-blue-500 ${
                active === link.path ? "text-blue-500" : "text-gray-400"
              }`}
              onClick={() => handleActive(link.path)}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Signup and Login Section */}
        <div className="flex space-x-4">
          <NavLink
            className="hover:text-blue-500 text-gray-400"
            to="/signup"
            onClick={() => handleActive("/signup")}
          >
            {active === "/signup" ? (
              <span className="text-blue-500">Signup</span>
            ) : (
              "Signup"
            )}
          </NavLink>
          <NavLink
            className="hover:text-blue-500 text-gray-400"
            to="/login"
            onClick={() => handleActive("/login")}
          >
            {active === "/login" ? (
              <span className="text-blue-500">Login</span>
            ) : (
              "Login"
            )}
          </NavLink>
        </div>
      </nav>

      <div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex text-white items-center justify-between px-4 py-2">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Collapsed Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden space-y-2 p-4 bg-black">
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/about-us"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/topevents"
              onClick={() => setIsOpen(false)}
            >
              Top Events
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/allevents"
              onClick={() => setIsOpen(false)}
            >
              All Events
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/prdesk"
              onClick={() => setIsOpen(false)}
            >
              PR Desk
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/result"
              onClick={() => setIsOpen(false)}
            >
              Result
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/signup"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </NavLink>
            <NavLink
              className="block hover:text-blue-500 text-gray-400"
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
