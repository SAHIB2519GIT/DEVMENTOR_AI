import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <h4 className="text-gray-400">
        {title}
      </h4>

      <h2
        className={`mt-4 text-5xl font-black ${color}`}
      >
        {value}
      </h2>
    </motion.div>
  );
}