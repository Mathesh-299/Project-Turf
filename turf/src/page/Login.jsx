// src/pages/Login.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for link functionality

const Login = () => {
    const [selectedRole, setSelectedRole] = useState(null); // State to keep track of the selected role (Admin or User)

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-400">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">TurfHub</h2>

                {/* Buttons for Admin and User login as Links */}
                <div className="flex justify-center space-x-4 mb-8">
                    <NavLink
                        to="/adminlogin" // Navigate to AdminLogin page
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${selectedRole === 'admin'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-500'
                        }`}
                        onClick={() => setSelectedRole('admin')} // Update the role when clicked
                    >
                        Admin Login
                    </NavLink>
                    <NavLink
                        to="/userlogin" // Navigate to UserLogin page
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${selectedRole === 'user'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-green-500'
                        }`}
                        onClick={() => setSelectedRole('user')} // Update the role when clicked
                    >
                        User Login
                    </NavLink>
                </div>

                {/* Conditional content based on selected role */}
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    {selectedRole === 'admin' ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Admin Login</h3>
                            <p className="text-lg text-gray-600">You will be redirected to the admin login page.</p>
                        </div>
                    ) : selectedRole === 'user' ? (
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">User Login</h3>
                            <p className="text-lg text-gray-600">You will be redirected to the user login page.</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-xl text-gray-600 mb-4">Select a role to log in.</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
