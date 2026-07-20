import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(email, password);

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] flex justify-center items-center px-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10"
      >
        <h1 className="text-4xl font-black text-white">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 rounded-xl bg-black/30 p-4 text-white outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 rounded-xl bg-black/30 p-4 text-white outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full mt-8 rounded-xl bg-violet-600 hover:bg-violet-700 py-4 font-bold text-white"
        >
          Login
        </button>

        <p className="mt-6 text-gray-400">
          Don't have an account?

          <Link
            to="/register"
            className="ml-2 text-violet-400"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}