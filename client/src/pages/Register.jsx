import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {

  const { register } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      await register(name, email, password);

      navigate("/dashboard");

    } catch {

      alert("Registration Failed");

    }

  }

  return (

    <div className="min-h-screen bg-[#09090b] flex justify-center items-center">

      <form
        onSubmit={handleSubmit}
        className="w-[430px] rounded-3xl bg-white/5 border border-white/10 p-10"
      >

        <h1 className="text-4xl font-black text-white">

          Create Account

        </h1>

        <input
          placeholder="Full Name"
          className="w-full mt-8 rounded-xl bg-black/30 p-4 text-white"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full mt-5 rounded-xl bg-black/30 p-4 text-white"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 rounded-xl bg-black/30 p-4 text-white"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full mt-8 rounded-xl bg-violet-600 py-4 font-bold text-white">

          Register

        </button>

        <p className="text-gray-400 mt-5">

          Already have an account?

          <Link
            className="text-violet-400 ml-2"
            to="/login"
          >

            Login

          </Link>

        </p>

      </form>

    </div>

  );

}