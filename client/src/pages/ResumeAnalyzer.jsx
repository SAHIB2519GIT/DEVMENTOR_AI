import { useState } from "react";
import { toast } from "react-hot-toast";

import {
  UploadCloud,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Target,
  Lightbulb,
  Sparkles,
  Loader2,
} from "lucide-react";

import { analyzeResume } from "../services/resumeService";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [targetRole, setTargetRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Analyze resume
  async function handleUpload(e) {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload a PDF resume.");
      return;
    }

    if (!targetRole.trim()) {
      toast.error("Please enter your target role.");
      return;
    }

    if (!jobDescription.trim()) {
      toast.error("Please paste the job description.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const formData = new FormData();

      formData.append("resume", file);
      formData.append("targetRole", targetRole);
      formData.append("jobDescription", jobDescription);

      const data = await analyzeResume(formData);

      setResult(data.resume);

      toast.success("Resume analysis complete!");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
          "Resume analysis failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-14">

        {/* ================= HEADER ================= */}

        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-medium text-violet-400">
            Resume Intelligence
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Job Readiness Analyzer
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
            Upload your resume and compare it with a target job to discover
            your strengths, skill gaps, and improvement areas.
          </p>
        </div>

        {/* ================= INPUT AREA ================= */}

        <form onSubmit={handleUpload}>
          <div className="grid gap-6 lg:grid-cols-2">

            {/* LEFT CARD */}

            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-7 sm:p-8">

              <div className="mb-8">
                <h2 className="text-xl font-semibold">
                  Target job
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Tell us about the position you are applying for.
                </p>
              </div>

              {/* Target Role */}

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Target role
                </label>

                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  placeholder="e.g. Frontend Developer"
                  className="h-12 w-full rounded-xl border border-white/[0.08] bg-[#09090b] px-4 text-sm text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Job Description */}

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Job description
                </label>

                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the company's job description here..."
                  className="min-h-[300px] w-full resize-none rounded-xl border border-white/[0.08] bg-[#09090b] p-4 text-sm leading-6 text-white outline-none placeholder:text-zinc-600 transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

            </section>

            {/* RIGHT CARD */}

            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-7 sm:p-8">

              <div className="mb-8">
                <h2 className="text-xl font-semibold">
                  Your resume
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Upload your latest PDF resume.
                </p>
              </div>

              {/* Upload */}

              <label
                htmlFor="resume-upload"
                className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.12] bg-[#09090b] px-6 text-center transition hover:border-violet-500/50 hover:bg-violet-500/[0.02]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  {file ? (
                    <CheckCircle size={26} />
                  ) : (
                    <UploadCloud size={26} />
                  )}
                </div>

                {file ? (
                  <>
                    <p className="max-w-full truncate text-sm font-medium text-white">
                      {file.name}
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">
                      {(file.size / 1024).toFixed(1)} KB selected
                    </p>

                    <span className="mt-4 text-xs text-violet-400">
                      Choose another file
                    </span>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-medium text-white">
                      Choose your resume
                    </p>

                    <p className="mt-2 text-xs text-zinc-500">
                      PDF files only • Maximum 10MB
                    </p>

                    <span className="mt-4 rounded-lg border border-white/[0.08] px-4 py-2 text-xs font-medium text-zinc-300">
                      Browse files
                    </span>
                  </>
                )}

                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];

                    if (!selectedFile) return;

                    if (selectedFile.type !== "application/pdf") {
                      toast.error("Only PDF files are allowed.");
                      return;
                    }

                    if (selectedFile.size > 10 * 1024 * 1024) {
                      toast.error("File must be smaller than 10MB.");
                      return;
                    }

                    setFile(selectedFile);
                  }}
                  className="hidden"
                />
              </label>

              {/* Analyze Button */}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />

                    Analyzing resume...
                  </>
                ) : (
                  <>
                    <Sparkles size={17} />

                    Analyze job readiness
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-zinc-600">
                Your resume will be compared against the target role.
              </p>

            </section>

          </div>
        </form>

        {/* ================= LOADING ================= */}

        {loading && (
          <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-8">

            <div className="flex items-center gap-3">
              <Loader2
                size={20}
                className="animate-spin text-violet-400"
              />

              <div>
                <p className="text-sm font-medium text-white">
                  Analyzing your resume
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  Checking ATS compatibility, skills and job fit...
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ================= RESULTS ================= */}

        {result && !loading && (
          <section className="mt-10 space-y-6">

            {/* Result heading */}

            <div>
              <p className="text-sm font-medium text-violet-400">
                Analysis complete
              </p>

              <h2 className="mt-1 text-2xl font-semibold">
                Your job readiness results
              </h2>
            </div>

            {/* Scores */}

            <div className="grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  ATS score
                </p>

                <p className="mt-3 text-5xl font-bold text-emerald-400">
                  {result.atsScore ?? 0}%
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  Resume readability and compatibility with applicant
                  tracking systems.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-6">

                <div className="flex items-center gap-2">
                  <Target
                    size={17}
                    className="text-violet-400"
                  />

                  <p className="text-xs font-medium uppercase tracking-wider text-violet-400">
                    Job match
                  </p>
                </div>

                <p className="mt-3 text-5xl font-bold text-violet-400">
                  {result.readinessScore ?? 0}%
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  How closely your current skills match the target role.
                </p>

              </div>

            </div>

            {/* Matched Skills */}

            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-6">

              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <CheckCircle
                  size={19}
                  className="text-emerald-400"
                />

                Matched skills
              </h3>

              {result.matchedSkills?.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {result.matchedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-1.5 text-xs text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-zinc-500">
                  No strong matching skills detected.
                </p>
              )}

            </div>

            {/* Skill gaps + missing requirements */}

            <div className="grid gap-5 md:grid-cols-2">

              {/* Skill gaps */}

              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-6">

                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <AlertTriangle
                    size={18}
                    className="text-amber-400"
                  />

                  Skill gaps
                </h3>

                <ul className="mt-5 space-y-2">

                  {result.skillGaps?.length > 0 ? (
                    result.skillGaps.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-lg border border-amber-500/10 bg-black/20 p-3 text-sm text-zinc-300"
                      >
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-zinc-500">
                      No major skill gaps detected.
                    </li>
                  )}

                </ul>

              </div>

              {/* Missing requirements */}

              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-6">

                <h3 className="flex items-center gap-2 text-base font-semibold">
                  <XCircle
                    size={18}
                    className="text-rose-400"
                  />

                  Missing requirements
                </h3>

                <ul className="mt-5 space-y-2">

                  {result.missingSkills?.length > 0 ? (
                    result.missingSkills.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-lg border border-rose-500/10 bg-black/20 p-3 text-sm text-zinc-300"
                      >
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-zinc-500">
                      No major missing requirements detected.
                    </li>
                  )}

                </ul>

              </div>

            </div>

            {/* Recommendations */}

            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.03] p-6">

              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Lightbulb
                  size={19}
                  className="text-violet-400"
                />

                Priority action items
              </h3>

              <div className="mt-5 space-y-3">

                {result.priorityActions?.length > 0 ? (
                  result.priorityActions.map((action, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-4"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-semibold">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-zinc-300">
                        {action}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-zinc-500">
                    No priority actions available.
                  </p>
                )}

              </div>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}