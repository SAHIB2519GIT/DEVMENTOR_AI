import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {

  // Get login function from AuthContext
  const { login } = useAuth();

  // Used to move the user to another page
  const navigate = useNavigate();

  // Store email and password entered by the user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Runs when the login form is submitted
  async function handleSubmit(e) {

    // Prevent page refresh
    e.preventDefault();

    try {

      // Send email and password to backend
      await login(email, password);

      // Login successful → go to dashboard
      navigate("/dashboard");

    } catch (error) {

      // Show error in console
      console.log(error);

      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-white flex items-center justify-center px-5">

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8"
      >

        {/* Heading */}
        <h1 className="text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-400">
          Sign in to continue to DevMentor AI.
        </p>


        {/* Email */}
        <div className="mt-8">

          <label className="block mb-2 text-sm text-gray-300">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-violet-500"
          />

        </div>


        {/* Password */}
        <div className="mt-5">

          <label className="block mb-2 text-sm text-gray-300">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-violet-500"
          />

        </div>


        {/* Login Button */}
        <button
          type="submit"
          className="w-full mt-7 h-12 rounded-lg bg-violet-600 hover:bg-violet-700 font-semibold"
        >
          Login
        </button>


        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-400">

          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-violet-400 hover:text-violet-300"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}