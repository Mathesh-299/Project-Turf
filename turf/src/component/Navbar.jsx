// Navbar.jsx
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed top-0 w-full shadow-md z-20 font-sans">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Logo Centered */}
        <div className="w-1/2 flex justify-center">
          <Link to="/" className="text-3xl font-extrabold flex items-center">
            <span className="text-red-500">Turf</span>
            <span className="text-yellow-500">Hub</span>
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="w-1/2 flex justify-end space-x-8 text-lg">
          <NavLink
            to="/"
            className="hover:text-green-400 transition duration-300 transform hover:scale-105"
            activeClassName="text-green-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-green-400 transition duration-300 transform hover:scale-105"
            activeClassName="text-green-400"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-green-400 transition duration-300 transform hover:scale-105"
            activeClassName="text-green-400"
          >
            Contact
          </NavLink>
          <NavLink
            to="/bookings"
            className="hover:text-green-400 transition duration-300 transform hover:scale-105"
            activeClassName="text-green-400"
          >
            Booking
          </NavLink>
          {/* Login Icon */}
          <NavLink
            to="/login"
            className="hover:text-green-400 transition duration-300 transform hover:scale-105"
            activeClassName="text-green-400"
          >
            <FaUserCircle />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
