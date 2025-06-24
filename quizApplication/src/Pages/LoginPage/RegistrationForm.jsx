import React, { useState } from "react";
import { loginUrl } from "../../Components/AllRoutes/RoutesUrl";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("🎉 Registration successful! Data saved to localStorage.");
    setFormData({
      username: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-10 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-purple-700 mb-2">
            Join QuizLand 🧠
          </h1>
          <p className="text-gray-600">
            Create your account to explore quizzes, track your scores, and rise
            on the leaderboard!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Gender + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="male">👦 Male</option>
                <option value="female">👧 Female</option>
                <option value="other">⚧️ Other</option>
              </select>
            </div>
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your full address"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Register & Join 🚀
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link to={loginUrl}>
                <a
                  // href={loginUrl}
                  className="text-purple-600 font-medium hover:underline"
                >
                  Login here
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// 🔧 Reusable input field component
const Input = ({ label, type = "text", name, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);
