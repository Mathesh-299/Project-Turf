// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
                <div className="text-center px-6 md:px-12 lg:px-24 text-white">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                        <span className="text-green-500">Welcome to</span>
                        <span className="text-red-500">Turf</span><span className="text-yellow-500">Hub</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-cyan-700">
                        Book your favorite turfs and enjoy seamless sports experiences.
                    </p>
                    <Link to="/booking" className="px-8 py-3 text-lg font-semibold text-gray-900 bg-yellow-500 rounded hover:bg-yellow-600 transition duration-300">
                        Book Now
                    </Link>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose TurfHub?</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    At TurfHub, we provide top-tier facilities and flexible booking options tailored for all your sports needs.
                </p>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 bg-white shadow-md rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Premium Facilities</h3>
                        <p className="text-gray-600">
                            Our turfs are equipped with high-quality amenities to give you the best sports experience.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-md rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Easy Booking</h3>
                        <p className="text-gray-600">
                            Book your slot in just a few clicks, without any hassle or long waits.
                        </p>
                    </div>
                    <div className="p-8 bg-white shadow-md rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Flexible Timings</h3>
                        <p className="text-gray-600">
                            We offer flexible booking hours to fit your schedule, any day of the week.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-16 bg-yellow-500 text-white text-center px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Play?</h2>
                <p className="text-lg md:text-xl mb-8">
                    Secure your booking now and start your sports journey with TurfHub.
                </p>
                <Link to="/booking" className="px-8 py-3 text-lg font-semibold bg-gray-900 rounded hover:bg-gray-800 transition duration-300">
                    Book a Turf
                </Link>
            </section>
        </div>
    );
};

export default Home;
