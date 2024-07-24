import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerLoginApi } from "../../redux/RegisterLoginAPI";
import { TLogin } from "../../types";
import { getErrorMessage } from "../../utils/errorUtils";
import { login as loginAction } from "../../redux/slices/authSlice"; // Import the login action
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [login, { isLoading, isError, error }] =
    registerLoginApi.useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize the useDispatch hook

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
      toast.success("Successful Login");
    } catch (err) {
      console.error("Failed to login: ", err);
      toast.error("Failed to Login");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 flex flex-col items-center justify-center">
        <h1 className="text-white text-6xl font-bold">Welcome Back!</h1>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Login</h2>
          <p className="text-gray-600 mb-6">
            Welcome back! Please login to your account.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="username@gmail.com"
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
                placeholder="Enter your password"
                className="form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {isError && (
            <p className="mt-4 text-center text-sm text-red-500">
              Error: {getErrorMessage(error)}
            </p>
          )}
          <div className="mt-4 text-center">
            <p className="text-sm">
              New User?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">
              <Link to="/" className="text-blue-500 hover:underline">
                Home Page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
