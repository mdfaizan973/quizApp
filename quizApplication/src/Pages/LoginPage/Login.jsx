import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registrationUrl } from "../../Components/AllRoutes/RoutesUrl";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🔐 Login Attempt:", credentials);
    alert("Check console for login data");
    // You can later add actual login/auth logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
            Welcome Back 👋
          </h1>
          <p className="text-gray-600">Login to your QuizLand account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Login 🚀
            </button>
          </div>
        </form>

        {/* Link to registration */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to={registrationUrl}>
            <a
              // href="/registration"
              className="text-purple-600 font-medium hover:underline"
            >
              Register here
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
