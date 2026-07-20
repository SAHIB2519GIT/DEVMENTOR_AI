import { useState } from "react";
import {
  Target,
  BookOpen,
  CheckCircle,
  Clock,
} from "lucide-react";

import { generateRoadmap } from "../services/roadmapService";

export default function Roadmap() {

  const [role, setRole] = useState("");

  const [loading, setLoading] = useState(false);

  const [roadmap, setRoadmap] = useState([]);

  async function handleGenerate() {

    if (!role) {
      alert("Please enter your target role.");
      return;
    }

    try {

      setLoading(true);

      const data = await generateRoadmap({
        role,
        experience: "Beginner",
      });

      setRoadmap(data.roadmap.steps || []);

    } catch (err) {

      console.log(err);

      alert("Failed to generate roadmap.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="min-h-screen bg-[#09090b] text-white p-10">

      <h1 className="text-5xl font-black">

        AI Career Roadmap

      </h1>

      <p className="mt-3 text-gray-400">

        Generate a personalized roadmap to achieve your career goals.

      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-5 max-w-4xl">

        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Frontend Developer"
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="rounded-xl bg-violet-600 hover:bg-violet-700 px-8 py-4 font-semibold disabled:opacity-50"
        >

          {loading ? "Generating..." : "Generate Roadmap"}

        </button>

      </div>

      {roadmap.length > 0 && (

        <div className="mt-14 space-y-8">

          {roadmap.map((step, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="flex items-center gap-3 text-2xl font-bold">

                    <Target />

                    {step.title}

                  </h2>

                  <p className="mt-3 text-gray-400">

                    {step.description}

                  </p>

                </div>

                <Clock />

              </div>

              <div className="mt-8">

                <h3 className="mb-4 text-xl font-bold">

                  Topics

                </h3>

                <div className="grid md:grid-cols-2 gap-4">

                  {step.topics?.map((topic, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-xl bg-black/30 p-4"
                    >

                      <BookOpen />

                      {topic}

                    </div>

                  ))}

                </div>

              </div>

              <div className="mt-8">

                <h3 className="mb-4 text-xl font-bold">

                  Projects

                </h3>

                <div className="space-y-3">

                  {step.projects?.map((project, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle className="text-green-400" />

                      {project}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}