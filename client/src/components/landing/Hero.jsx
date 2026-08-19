import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#09090b] pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="max-w-3xl">

          <p className="mb-4 text-sm font-medium text-violet-400">
            AI-powered career intelligence
          </p>

          <h1 className="font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build a career
            <span className="block text-violet-400">
              that gets noticed.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Analyze your resume, identify skill gaps, prepare for interviews,
            and build a smarter path toward your career goals.
          </p>

          <div className="mt-7 flex gap-3">

            <Link
              to="/register"
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
            >
              Sign In
            </Link>

          </div>


        </div>

      </div>
    </section>
  );
}