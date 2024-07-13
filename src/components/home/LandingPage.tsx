import React from "react";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mt-10">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Welcome to Vehicle Rental Management System
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Your ultimate solution for managing vehicle rentals.
              </p>
              <Link
                to="/about"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium"
              >
                Learn More
              </Link>
            </div>
            <div className="ml-10">
              {/* Replace with SVG icon or any other icon component */}
              <House className="w-40 h-40 text-gray-700" />
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Easy Booking
                </h2>
                <p className="text-lg text-gray-700">
                  Effortless vehicle booking process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Customer Support
                </h2>
                <p className="text-lg text-gray-700">
                  24/7 customer support available.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Secure Payments
                </h2>
                <p className="text-lg text-gray-700">
                  Secure payments with Stripe integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
