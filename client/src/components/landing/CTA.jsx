import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "AI Resume Analysis",
  "ATS Score Improvement",
  "Interview Question Generator",
  "Personalized Career Roadmap",
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">

      {/* Background Glow */}

      <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="relative max-w-7xl mx-auto"
      >

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-violet-700 via-indigo-700 to-slate-900 p-12 lg:p-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2">

                <Sparkles size={18} />

                <span className="text-sm font-medium">
                  Start Your AI Career Journey
                </span>

              </div>

              <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">

                Ready To

                <span className="block text-cyan-300">

                  Crack Every Interview?

                </span>

              </h2>

              <p className="mt-8 text-lg text-gray-200 leading-8">

                DevMentor AI helps students and developers prepare
                smarter using Artificial Intelligence.

                Analyze resumes, practice interviews,
                improve ATS score and receive personalized
                career roadmaps.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Button
                  size="lg"
                  className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-xl"
                >
                  Get Started

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-xl border-white/30 text-white hover:bg-white/10"
                >
                  Live Demo
                </Button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-10">

              <h3 className="text-3xl font-bold mb-8">

                Everything Included

              </h3>

              <div className="space-y-6">

                {benefits.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * .12
                    }}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle2 className="text-green-400 h-6 w-6" />

                    <span className="text-lg">

                      {item}

                    </span>

                  </motion.div>

                ))}

              </div>

              <div className="mt-10 rounded-2xl bg-black/25 p-6">

                <div className="flex justify-between">

                  <span className="text-gray-300">
                    ATS Score
                  </span>

                  <span className="font-bold text-green-400">
                    92%
                  </span>

                </div>

                <div className="mt-4 h-3 rounded-full bg-gray-700">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}