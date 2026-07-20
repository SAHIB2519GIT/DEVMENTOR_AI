import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-24">

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-600/30 blur-[140px]" />
      <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 mb-8">
            <Sparkles size={18} />
            <span className="text-sm">
              AI Powered Career Platform
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Land Your
            <span className="gradient-text block">
              Dream Tech Job
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-400 max-w-xl">
            Analyze resumes, improve ATS score, generate AI interviews,
            build personalized learning roadmaps and prepare like never before.
          </p>

          <div className="flex gap-5 mt-10">

            <Link to="/register">
              <button className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-700 px-8 h-14 text-lg font-semibold text-white transition">
                Get Started
                <ArrowRight size={20} />
              </button>
            </Link>

            <Link to="/login">
              <button className="rounded-xl border border-white/20 hover:bg-white/10 px-8 h-14 text-lg font-semibold text-white transition">
                Live Demo
              </button>
            </Link>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                Resume Analysis
              </h2>

              <span className="rounded-full bg-green-500/20 px-4 py-1 text-green-400">
                ATS 92%
              </span>
            </div>

            <div className="space-y-6">

              <div>
                <div className="flex justify-between mb-2">
                  <span>React</span>
                  <span>95%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-700">
                  <div className="h-3 w-[95%] rounded-full bg-purple-600"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>Node.js</span>
                  <span>90%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-700">
                  <div className="h-3 w-[90%] rounded-full bg-blue-500"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span>AWS</span>
                  <span>65%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-700">
                  <div className="h-3 w-[65%] rounded-full bg-cyan-500"></div>
                </div>
              </div>

            </div>

            <div className="mt-10 rounded-xl bg-purple-500/10 border border-purple-500/20 p-5">
              <h3 className="font-semibold mb-3">
                AI Recommendation
              </h3>

              <p className="text-gray-400">
                Improve AWS, Docker and System Design to increase your ATS score above 97%.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}