// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const AdminLogin = () => {
    const [isClosed, setIsClosed] = useState(false); // State to handle closing the form
    const navigate = useNavigate(); // Initialize navigate function

    const closeForm = () => {
        setIsClosed(true); // Close the form
        navigate('/login'); // Navigate to the login page when the form is closed
    };

    if (isClosed) return null; // If closed, render nothing

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative">
                {/* Close icon */}
                <button 
                    onClick={closeForm} 
                    className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-800"
                >
                    <FaTimes />
                </button>

                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Admin Login</h2>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-lg font-medium mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                    Login as Admin
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
