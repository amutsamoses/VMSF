// authentication/Login.tsx

import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const handleAdminLogin = () => {
    // Handle admin login logic (navigate to admin login page)
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back!</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
          <p className="mt-2 text-sm">
            Forgot your password?{" "}
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Reset here
            </Link>
          </p>
          <p className="mt-4 text-sm">
            Are you an admin?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={handleAdminLogin}
            >
              Click here to login as admin
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
