import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {

  // Get register function from AuthContext
  const { register } = useAuth();

  // Used to navigate after successful registration
  const navigate = useNavigate();

  // Store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Runs when registration form is submitted
  async function handleSubmit(e) {

    // Prevent page refresh
    e.preventDefault();

    try {

      // Send user information to backend
      await register(name, email, password);

      // Registration successful → go to dashboard
      navigate("/dashboard");

    } catch (error) {

      // Show error in console
      console.log(error);

      // Show backend error message if available
      alert(
        error.response?.data?.message ||
        error.message ||
        "Registration Failed"
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-white flex items-center justify-center px-5">

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8"
      >

        {/* Heading */}
        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-gray-400">
          Create your DevMentor AI account.
        </p>


        {/* Name */}
        <div className="mt-8">

          <label className="block mb-2 text-sm text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-violet-500"
          />

        </div>


        {/* Email */}
        <div className="mt-5">

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
            placeholder="Create a password"
            className="w-full h-12 rounded-lg border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-violet-500"
          />

        </div>


        {/* Register Button */}
        <button
          type="submit"
          className="w-full mt-7 h-12 rounded-lg bg-violet-600 hover:bg-violet-700 font-semibold"
        >
          Create Account
        </button>


        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="ml-2 text-violet-400 hover:text-violet-300"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
}