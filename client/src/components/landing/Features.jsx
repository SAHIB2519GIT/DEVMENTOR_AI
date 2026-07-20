import { motion } from "framer-motion";
import {
  FileText,
  Brain,
  Target,
  BarChart3,
  Route,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Resume Analysis",
    description:
      "Upload your resume and instantly receive ATS score, strengths, weaknesses and personalized improvements.",
  },
  {
    icon: Brain,
    title: "Interview Generator",
    description:
      "Generate realistic interview questions with AI based on your role and technical skills.",
  },
  {
    icon: Route,
    title: "Career Roadmap",
    description:
      "Receive a personalized roadmap with technologies, projects and learning resources.",
  },
  {
    icon: Target,
    title: "Skill Gap Detection",
    description:
      "Know exactly which skills are missing for your dream company and role.",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description:
      "Track ATS score improvements, interview preparation and roadmap completion.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Ready",
    description:
      "Prepare with industry-standard interview patterns used by top product companies.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28 bg-[#0d1117]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >

          <span className="text-violet-400 uppercase tracking-widest font-semibold">
            Features
          </span>

          <h2 className="text-5xl font-bold mt-5">

            Everything You Need

            <span className="gradient-text">
              {" "}To Get Hired
            </span>

          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">

            DevMentor AI combines resume analysis, AI interviews,
            learning roadmaps and analytics into one powerful platform.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{ duration: .3 }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-violet-500/50 duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-violet-600/20 flex items-center justify-center mb-8 group-hover:rotate-6 transition">

                  <Icon className="w-8 h-8 text-violet-400" />

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {feature.title}

                </h3>

                <p className="text-gray-400 leading-7">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}