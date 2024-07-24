import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerLoginApi } from "../../redux/RegisterLoginAPI";
import { TLogin } from "../../types";
import { getErrorMessage } from "../../utils/errorUtils";
import { login as loginAction } from "../../redux/slices/authSlice"; // Import the login action

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { isLoading, isError, error }] =
    registerLoginApi.useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize the useDispatch hook

  const handleAdminLogin = () => {
    // Handle admin login logic
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const user: TLogin = {
      email,
      password,
    };

    try {
      const response = await login(user).unwrap();
      dispatch(loginAction({ user: response.user, token: response.token })); // Dispatch the login action with the response data
      navigate("/user-dashboard");
    } catch (err) {
      console.error("Failed to login: ", err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Submit"}
          </button>
        </form>
        {isError && (
          <p className="mt-4 text-center text-sm text-red-500">
            Error: {getErrorMessage(error)}
          </p>
        )}
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
            Go Back to home:{" "}
            <Link
              to="/"
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={handleAdminLogin}
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
