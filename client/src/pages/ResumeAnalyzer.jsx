import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { analyzeResume } from "../services/resumeService";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function handleUpload() {
    if (!file) {
      alert("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const data = await analyzeResume(formData);

      // Backend returns:
      // { success:true, resume:{...} }
      setResult(data.resume);
    } catch (err) {
      console.error(err);
      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-10">

      <h1 className="text-5xl font-black">
        Resume Analyzer
      </h1>

      <p className="mt-3 text-gray-400">
        Upload your resume and get an AI-powered ATS analysis.
      </p>

      <div className="mt-12 rounded-3xl border border-dashed border-violet-500 bg-white/5 p-16 text-center">

        <UploadCloud
          size={70}
          className="mx-auto mb-6 text-violet-400"
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mx-auto"
        />

        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-8 rounded-xl bg-violet-600 hover:bg-violet-700 px-8 py-4 font-bold disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

      </div>

      {loading && (
        <div className="mt-10 rounded-3xl bg-white/5 animate-pulse h-64" />
      )}

      {result && (
        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          <div className="rounded-3xl bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              ATS Score
            </h2>

            <div className="mt-8 text-7xl font-black text-green-400">
              {result.atsScore}%
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              Strengths
            </h2>

            <ul className="mt-6 space-y-3">
              {result.strengths?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              Weaknesses
            </h2>

            <ul className="mt-6 space-y-3">
              {result.weaknesses?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              Missing Skills
            </h2>

            <ul className="mt-6 space-y-3">
              {result.missingSkills?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-white/5 p-8">
            <h2 className="text-3xl font-bold">
              Suggestions
            </h2>

            <ul className="mt-6 space-y-3">
              {result.suggestions?.map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}