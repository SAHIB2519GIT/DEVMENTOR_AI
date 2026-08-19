import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed  left-0 right-0 z-10 border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          DevMentor <span className="text-violet-400">AI</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#pricing" className="transition hover:text-white">Pricing</a>
          <a href="#about" className="transition hover:text-white">About</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white">
            Login
          </Link>
          <Link to="/register" className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}