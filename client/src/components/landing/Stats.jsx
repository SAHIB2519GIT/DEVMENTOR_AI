const stats = [
  {
    value: "12K+",
    title: "Students",
  },
  {
    value: "50K+",
    title: "Resumes Analyzed",
  },
  {
    value: "100K+",
    title: "AI Questions",
  },
  {
    value: "95%",
    title: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-[#0b0b10]">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid grid-cols-2 sm:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`py-7 text-center ${
                index > 0 ? "border-l border-white/5" : ""
              }`}
            >
              <p className="text-2xl font-bold text-white">
                {item.value}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}