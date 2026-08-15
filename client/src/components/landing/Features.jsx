const features = [
  {
    number: "01",
    title: "AI Resume Analysis",
    description:
      "Upload your resume and get an ATS score, skill gaps, and practical suggestions to improve it.",
  },
  {
    number: "02",
    title: "Interview Preparation",
    description:
      "Generate interview questions based on your target role and prepare for technical and behavioral rounds.",
  },
  {
    number: "03",
    title: "Career Intelligence",
    description:
      "Understand your current skills and discover what you should learn next for your target career.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-white/5 bg-[#09090b] py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-400">
            WHAT DEVMENТOR DOES
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to move forward.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-500">
            One workspace to understand your skills, improve your resume,
            and prepare for your target career.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="border-t border-white/10 pt-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-violet-400">
                  {feature.number}
                </span>

                <span className="text-xs text-zinc-600">
                  DevMentor AI
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}