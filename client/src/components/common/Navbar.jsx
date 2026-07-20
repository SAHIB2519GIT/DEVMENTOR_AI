import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold gradient-text">
          DevMentor AI
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

        </div>

        <div className="flex gap-3">

          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>

        </div>

      </div>
    </nav>
  );
}