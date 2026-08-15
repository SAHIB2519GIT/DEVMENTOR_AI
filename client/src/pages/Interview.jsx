import { useState } from "react";
import { Sparkles, BrainCircuit, Loader2 } from "lucide-react";
import { generateInterview } from "../services/interviewService";

export default function Interview() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function handleGenerate() {
    if (!role.trim() || !skills.trim()) {
      alert("Please enter your target role and skills.");
      return;
    }

    try {
      setLoading(true);
      setQuestions([]);

      const data = await generateInterview({
        role: role.trim(),
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      setQuestions(data?.interview?.questions || []);
    } catch (error) {
      console.error("Interview generation error:", error);
      alert("Failed to generate interview questions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
      </div>

      <div className="relative min-h-screen px-6 py-12 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">

          {/* Header */}
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-400">
              <Sparkles size={16} />
              AI Interview Preparation
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Interview Generator
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Generate targeted interview questions based on your role and
              technical skill set.
            </p>
          </div>

          {/* Main Card */}
          <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">

            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <BrainCircuit size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Tell us about your target role
                </h2>

                <p className="text-sm text-zinc-500">
                  We'll create questions tailored to your profile.
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Target role
                </label>

                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Frontend Developer"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Technical skills
                </label>

                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

            </div>

            {/* Button */}
            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={17} />
                    Generate Questions
                  </>
                )}
              </button>
            </div>
          </section>

          {/* Questions */}
          {questions.length > 0 && (
            <section className="mt-10">

              <div className="mb-5">
                <h2 className="text-xl font-semibold text-white">
                  Generated Questions
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Practice these questions for your upcoming interview.
                </p>
              </div>

              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition hover:border-violet-500/20"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-semibold text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-6 text-zinc-300">
                        {question}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          )}

        </div>
      </div>
    </main>
  );
}