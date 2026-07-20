import { motion } from "framer-motion";
import { Users, FileCheck, Brain, Trophy } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12,000+",
    title: "Students",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: FileCheck,
    value: "50,000+",
    title: "Resumes Analyzed",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    value: "100,000+",
    title: "AI Questions Generated",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Trophy,
    value: "95%",
    title: "Success Rate",
    color: "from-emerald-500 to-green-500",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#080b17]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white">
            Trusted By{" "}
            <span className="text-violet-400">
              Future Engineers
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Thousands of developers are improving their careers using DevMentor AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
              >
                <div
                  className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color}`}
                >
                  <Icon size={34} className="text-white" />
                </div>

                <h3 className="text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="mt-4 text-gray-400 text-lg">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}