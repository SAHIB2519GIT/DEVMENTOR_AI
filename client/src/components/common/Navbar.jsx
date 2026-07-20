import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold gradient-text"
        >
          DevMentor AI
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#pricing" className="hover:text-white">
            Pricing
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

        </div>

        <div className="flex gap-3">

          <Link to="/login">
            <button
              className="px-5 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              className="px-5 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition"
            >
              Get Started
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}