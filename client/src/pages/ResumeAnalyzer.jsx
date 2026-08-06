import { useState } from "react";
import {
  UploadCloud,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Target,
  Lightbulb,
} from "lucide-react";

import { analyzeResume } from "../services/resumeService";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [targetRole, setTargetRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleUpload() {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    if (!targetRole.trim()) {
      alert("Please enter your target role.");
      return;
    }

    if (!jobDescription.trim()) {
      alert("Please paste the job description.");
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
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
        "Resume analysis failed."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-6 md:p-10">

      {/* HEADER */}

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-black">
          Job Readiness Analyzer
        </h1>

        <p className="mt-3 text-gray-400 max-w-3xl">
          Compare your resume against a specific job and discover
          your strengths, skill gaps, missing requirements, and
          next steps.
        </p>

        {/* INPUT SECTION */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">

          <h2 className="text-2xl font-bold mb-6">
            Tell us about your target job
          </h2>

          {/* TARGET ROLE */}

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-300">
              Target Role
            </label>

            <input
              type="text"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Frontend Developer"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>

          {/* JOB DESCRIPTION */}

          <div className="mt-6">
            <label className="block mb-2 text-sm font-semibold text-gray-300">
              Job Description
            </label>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the company's job description here..."
              rows={8}
              className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
            />
          </div>

          {/* RESUME UPLOAD */}

          <div className="mt-6 rounded-2xl border border-dashed border-violet-500/50 bg-violet-500/5 p-8 text-center">

            <UploadCloud
              size={55}
              className="mx-auto mb-4 text-violet-400"
            />

            <p className="font-semibold">
              Upload your resume
            </p>

            <p className="mt-2 text-sm text-gray-500">
              PDF format recommended
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(e.target.files?.[0] || null)
              }
              className="mx-auto mt-5 block w-full max-w-sm text-sm text-gray-400"
            />

            {file && (
              <p className="mt-3 text-sm text-violet-300">
                Selected: {file.name}
              </p>
            )}

          </div>

          {/* BUTTON */}

          <button
            onClick={handleUpload}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-violet-600 hover:bg-violet-700 px-8 py-4 font-bold transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Analyzing Job Readiness..."
              : "Analyze Job Readiness"}
          </button>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 animate-pulse">

            <div className="h-8 w-48 rounded bg-white/10" />

            <div className="mt-6 h-4 w-full rounded bg-white/10" />

            <div className="mt-3 h-4 w-4/5 rounded bg-white/10" />

            <div className="mt-8 h-32 rounded bg-white/10" />

          </div>
        )}

        {/* RESULTS */}

        {result && !loading && (

          <div className="mt-12 space-y-8">

            {/* SCORE */}

            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                <p className="text-gray-400">
                  General ATS Score
                </p>

                <div className="mt-4 text-6xl font-black text-green-400">
                  {result.atsScore ?? 0}%
                </div>

                <p className="mt-3 text-sm text-gray-500">
                  Overall resume compatibility and quality.
                </p>

              </div>

              <div className="rounded-3xl border border-violet-500/30 bg-violet-500/10 p-8">

                <div className="flex items-center gap-3">
                  <Target className="text-violet-400" />

                  <p className="text-gray-300">
                    Job Readiness
                  </p>
                </div>

                <div className="mt-4 text-6xl font-black text-violet-400">
                  {result.readinessScore ?? 0}%
                </div>

                <p className="mt-3 text-sm text-gray-400">
                  How prepared your profile is for this specific role.
                </p>

              </div>

            </div>

            {/* MATCHED SKILLS */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="flex items-center gap-3 text-2xl font-bold">
                <CheckCircle className="text-green-400" />
                Matched Skills
              </h2>

              {result.matchedSkills?.length > 0 ? (

                <div className="mt-6 flex flex-wrap gap-3">

                  {result.matchedSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-green-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              ) : (

                <p className="mt-5 text-gray-500">
                  No strong matching skills detected.
                </p>

              )}

            </div>

            {/* SKILL GAPS */}

            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-8">

                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <AlertTriangle className="text-yellow-400" />
                  Skill Gaps
                </h2>

                <ul className="mt-6 space-y-3">

                  {result.skillGaps?.length > 0 ? (

                    result.skillGaps.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-xl bg-black/20 p-4"
                      >
                        {skill}
                      </li>
                    ))

                  ) : (

                    <li className="text-gray-500">
                      No major skill gaps detected.
                    </li>

                  )}

                </ul>

              </div>

              {/* MISSING */}

              <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">

                <h2 className="flex items-center gap-3 text-2xl font-bold">
                  <XCircle className="text-red-400" />
                  Missing Skills
                </h2>

                <ul className="mt-6 space-y-3">

                  {result.missingSkills?.length > 0 ? (

                    result.missingSkills.map((skill, index) => (
                      <li
                        key={index}
                        className="rounded-xl bg-black/20 p-4"
                      >
                        {skill}
                      </li>
                    ))

                  ) : (

                    <li className="text-gray-500">
                      No major missing skills detected.
                    </li>

                  )}

                </ul>

              </div>

            </div>

            {/* EVIDENCE */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-2xl font-bold">
                Skill Evidence
              </h2>

              <p className="mt-2 text-gray-400">
                Why the AI considers each skill strong, weak, or missing.
              </p>

              <div className="mt-6 space-y-4">

                {result.evidence?.length > 0 ? (

                  result.evidence.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-2xl bg-black/20 p-5"
                    >

                      <div className="flex flex-wrap items-center justify-between gap-3">

                        <h3 className="font-bold text-lg">
                          {item.skill}
                        </h3>

                        <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                          {item.status}
                        </span>

                      </div>

                      <p className="mt-3 text-gray-400">
                        {item.evidence}
                      </p>

                    </div>

                  ))

                ) : (

                  <p className="text-gray-500">
                    No evidence analysis available.
                  </p>

                )}

              </div>

            </div>

            {/* PRIORITY ACTIONS */}

            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-8">

              <h2 className="flex items-center gap-3 text-2xl font-bold">

                <Lightbulb className="text-yellow-400" />

                Priority Actions

              </h2>

              <p className="mt-2 text-gray-400">
                The most important things you should work on next.
              </p>

              <div className="mt-6 space-y-4">

                {result.priorityActions?.length > 0 ? (

                  result.priorityActions.map((action, index) => (

                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl bg-black/20 p-5"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 font-bold">
                        {index + 1}
                      </div>

                      <p className="text-gray-300">
                        {action}
                      </p>

                    </div>

                  ))

                ) : (

                  <p className="text-gray-500">
                    No priority actions available.
                  </p>

                )}

              </div>

            </div>

            {/* SUGGESTIONS */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-2xl font-bold">
                AI Recommendations
              </h2>

              <ul className="mt-6 space-y-3">

                {result.suggestions?.map((item, index) => (

                  <li
                    key={index}
                    className="rounded-xl bg-black/20 p-4 text-gray-300"
                  >
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          </div>

        )}

      </div>
    </div>
  );
}