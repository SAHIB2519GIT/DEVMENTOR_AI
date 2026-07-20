import { useState } from "react";
import { generateInterview } from "../services/interviewService";

export default function Interview() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  async function handleGenerate() {
    if (!role || !skills) {
      alert("Please enter role and skills.");
      return;
    }

    try {
      setLoading(true);

      const data = await generateInterview({
        role,
        skills: skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      setQuestions(data.interview.questions || []);

    } catch (err) {
      console.error(err);
      alert("Failed to generate interview.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#09090b] text-white p-10">

      <h1 className="text-5xl font-black">
        AI Interview Generator
      </h1>

      <p className="mt-3 text-gray-400">
        Generate AI interview questions for your target role.
      </p>

      <div className="mt-10 max-w-3xl space-y-5">

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Frontend Developer"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <input
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="React, Node.js, MongoDB"
          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="rounded-xl bg-violet-600 hover:bg-violet-700 px-8 py-4 font-bold disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Questions"}
        </button>

      </div>

      {questions.length > 0 && (

        <div className="mt-12 space-y-5">

          {questions.map((question, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >

              <h2 className="font-semibold text-lg">

                Question {index + 1}

              </h2>

              <p className="mt-3 text-gray-300">

                {question}

              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}