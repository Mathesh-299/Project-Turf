import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    // Handle login form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        navigate('/home');
    };

    // Handle register form submission
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        alert("Registered successfully!");
        navigate('/home');
    };

    // Close form and navigate to the login page
    const closeForm = () => {
        setIsLogin(true); // Set the form to Login
        navigate('/login'); // Redirect to the login page
    };

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

                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">TurfHub</h2>
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-500'}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 transform ${!isLogin ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-green-500'}`}
                    >
                        Register
                    </button>
                </div>
                <div className="p-6 rounded-lg shadow-md bg-gray-50">
                    {isLogin ? (
                        <form onSubmit={handleLoginSubmit}>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Login</h3>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg font-semibold"
                            >
                                Login
                            </button>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">Don't have an account? <button onClick={() => setIsLogin(false)} className="text-blue-500 hover:text-blue-700">Register here</button></p>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} >
                            <h3 className="text-2xl font-semibold text-green-600 mb-4">Register</h3>
                            <div className="mb-3"> {/* Reduced margin for spacing between inputs */}
                                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label> */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" // Reduced padding for a shorter field
                                />
                            </div>
                            <div className="mb-3"> {/* Reduced margin for spacing between inputs */}
                                {/* <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label> */}
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" // Reduced padding for a shorter field
                                />
                            </div>
                            <div className="mb-3"> {/* Reduced margin for spacing between inputs */}
                                {/* <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm Password</label> */}
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    placeholder="Confirm your password"
                                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg" // Reduced padding for a shorter field
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 mt-3 bg-green-600 text-white rounded-lg font-semibold" // Reduced padding for a smaller button
                            >
                                Register
                            </button>
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-500 hover:text-blue-700">Login here</button></p>
                            </div>
                        </form>

                    )}
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
