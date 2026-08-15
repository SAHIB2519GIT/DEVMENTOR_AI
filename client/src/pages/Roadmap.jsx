import { useState } from "react";
import {
  Target,
  BookOpen,
  CheckCircle2,
  Clock3,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { generateRoadmap } from "../services/roadmapService";

export default function Roadmap() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState([]);

  async function handleGenerate() {
    if (!role.trim()) {
      alert("Please enter your target role.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateRoadmap({
        role: role.trim(),
        experience: "Beginner",
      });

      setRoadmap(data?.roadmap?.roadmap || []);
    } catch (err) {
      console.error(err);
      alert("Failed to generate roadmap.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-280px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[150px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[450px] w-[450px] rounded-full bg-indigo-600/[0.05] blur-[140px]" />
      </div>

      <div className="relative min-h-screen px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">

          {/* ───────────────── Header ───────────────── */}

          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-violet-400">
              <Sparkles size={15} />
              Career Intelligence
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              AI Career Roadmap
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-400">
              Build a personalized learning path based on the role you want
              to achieve.
            </p>
          </header>

          {/* ───────────────── Generator ───────────────── */}

          <section className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 sm:p-8">

            <div className="mb-7 flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Target size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Define your target career
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Tell us what role you're preparing for.
                </p>
              </div>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <div className="relative flex-1">
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !loading) {
                      handleGenerate();
                    }
                  }}
                  placeholder="e.g. Frontend Developer"
                  className="w-full rounded-xl border border-white/[0.08] bg-black/30 px-4 py-3.5 text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Generate Roadmap
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

            </div>

          </section>

          {/* ───────────────── Empty State ───────────────── */}

          {roadmap.length === 0 && !loading && (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] px-6 py-16 text-center">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] text-zinc-500">
                <Target size={22} />
              </div>

              <h3 className="font-medium text-zinc-300">
                Your roadmap will appear here
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
                Enter your target role above and generate a personalized
                career path with topics and practical projects.
              </p>

            </div>
          )}

          {/* ───────────────── Roadmap ───────────────── */}

          {roadmap.length > 0 && (
            <section className="mt-12">

              {/* Section heading */}

              <div className="mb-7 flex items-end justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                    Your path
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Personalized roadmap
                  </h2>
                </div>

                <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-500 sm:block">
                  {roadmap.length} {roadmap.length === 1 ? "stage" : "stages"}
                </span>

              </div>

              {/* Roadmap stages */}

              <div className="space-y-4">

                {roadmap.map((step, index) => (
                  <article
                    key={index}
                    className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-200 hover:border-violet-500/20 hover:bg-white/[0.035] sm:p-7"
                  >

                    {/* Stage header */}

                    <div className="flex gap-4">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-semibold text-violet-400">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {step.title}
                            </h3>

                            {step.description && (
                              <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
                                {step.description}
                              </p>
                            )}
                          </div>

                          <div className="hidden shrink-0 text-zinc-600 sm:block">
                            <Clock3 size={18} />
                          </div>

                        </div>

                      </div>

                    </div>

                    {/* Content */}

                    <div className="mt-7 grid gap-7 border-t border-white/[0.06] pt-6 lg:grid-cols-2">

                      {/* Topics */}

                      {step.topics?.length > 0 && (
                        <div>

                          <div className="mb-3 flex items-center gap-2">
                            <BookOpen
                              size={15}
                              className="text-violet-400"
                            />

                            <h4 className="text-sm font-medium text-zinc-300">
                              Topics to learn
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {step.topics.map((topic, i) => (
                              <span
                                key={i}
                                className="rounded-lg border border-white/[0.07] bg-black/20 px-3 py-2 text-xs text-zinc-400"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>

                        </div>
                      )}

                      {/* Projects */}

                      {step.projects?.length > 0 && (
                        <div>

                          <div className="mb-3 flex items-center gap-2">
                            <CheckCircle2
                              size={15}
                              className="text-emerald-400"
                            />

                            <h4 className="text-sm font-medium text-zinc-300">
                              Practical projects
                            </h4>
                          </div>

                          <div className="space-y-2">

                            {step.projects.map((project, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                              >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />

                                <span>{project}</span>
                              </div>
                            ))}

                          </div>

                        </div>
                      )}

                    </div>

                  </article>
                ))}

              </div>

            </section>
          )}

        </div>
      </div>
    </main>
  );
}