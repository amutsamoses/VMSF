// authentication/Register.tsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerLoginApi } from "../../redux/RegisterLoginAPI";
import { TRegister } from "../../types";
import { getErrorMessage } from "../../utils/errorUtils";

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [address, setAddress] = useState("");
  const [register, { isLoading, isError, error }] =
    registerLoginApi.useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: TRegister = {
      full_name: fullName,
      email,
      contact_phone: contactPhone,
      address,
      password: "password", // Default password for new users
      role: "user", // Default role for new users
    };

    try {
      await register(newUser).unwrap();
      navigate("/login"); // Redirect to login page on successful registration
    } catch (err) {
      console.error("Failed to register: ", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="contact_phone"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Phone
            </label>
            <input
              type="tel"
              id="contact_phone"
              name="contact_phone"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Enter contact phone"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        {isError && (
          <p className="mt-4 text-center text-sm text-red-500">
            Error: {getErrorMessage(error)}
          </p>
        )}
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
