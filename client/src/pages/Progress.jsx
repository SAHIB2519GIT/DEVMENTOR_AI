import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  Target,
  TrendingUp,
  Trophy,
  PlayCircle,
} from "lucide-react";

const skills = [
  { name: "JavaScript", progress: 85 },
  { name: "React", progress: 72 },
  { name: "Node.js", progress: 64 },
  { name: "MongoDB", progress: 58 },
  { name: "Express.js", progress: 70 },
  { name: "DSA", progress: 45 },
];

const activities = [
  {
    title: "Completed React fundamentals",
    time: "Today",
    icon: CheckCircle2,
  },
  {
    title: "Finished 5 JavaScript practice questions",
    time: "Yesterday",
    icon: BookOpen,
  },
  {
    title: "Completed Node.js module",
    time: "2 days ago",
    icon: Target,
  },
  {
    title: "Updated career roadmap",
    time: "3 days ago",
    icon: TrendingUp,
  },
];

export default function Progress() {
  return (
    <div className="min-h-screen w-full bg-[#07070a] text-white">

      {/* Page container */}
      <main className="w-full px-6 py-8 md:px-10 lg:px-12">

        {/* Header */}
        <div className="mb-8">

          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Learning Analytics
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Learning Progress
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-400 md:text-lg">
            Track your skills, learning streak, roadmap completion, and
            overall career preparation.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {/* Overall */}
          <div className="rounded-2xl border border-white/10 bg-[#111118] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
                <Target className="h-5 w-5 text-violet-400" />
              </div>

              <span className="text-sm font-medium text-emerald-400">
                +8.4%
              </span>

            </div>

            <p className="text-sm text-gray-500">
              Overall Progress
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              68%
            </h2>

          </div>

          {/* Hours */}
          <div className="rounded-2xl border border-white/10 bg-[#111118] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                <Clock3 className="h-5 w-5 text-blue-400" />
              </div>

              <span className="text-sm text-gray-500">
                This week
              </span>

            </div>

            <p className="text-sm text-gray-500">
              Learning Hours
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              18.5h
            </h2>

          </div>

          {/* Streak */}
          <div className="rounded-2xl border border-white/10 bg-[#111118] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                <Flame className="h-5 w-5 text-orange-400" />
              </div>

              <span className="text-sm font-medium text-orange-400">
                Keep going
              </span>

            </div>

            <p className="text-sm text-gray-500">
              Current Streak
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              7 days
            </h2>

          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-white/10 bg-[#111118] p-6">

            <div className="mb-5 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                <Trophy className="h-5 w-5 text-emerald-400" />
              </div>

              <span className="text-sm text-gray-500">
                Total
              </span>

            </div>

            <p className="text-sm text-gray-500">
              Completed Lessons
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              42
            </h2>

          </div>

        </div>

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

          {/* Skills */}
          <section className="xl:col-span-2 rounded-2xl border border-white/10 bg-[#111118] p-6 md:p-8">

            <div className="mb-8 flex items-start justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
                  Skill Development
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Your skills
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Track your progress across your core technologies.
                </p>
              </div>

              <TrendingUp className="h-6 w-6 text-violet-400" />

            </div>

            <div className="space-y-7">

              {skills.map((skill) => (

                <div key={skill.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </span>

                    <span className="text-sm font-semibold text-violet-400">
                      {skill.progress}%
                    </span>

                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 transition-all duration-700"
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </section>

          {/* Roadmap */}
          <section className="rounded-2xl border border-white/10 bg-[#111118] p-6 md:p-8">

            <div className="mb-7">

              <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
                Career Roadmap
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Your journey
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Keep progressing toward your target role.
              </p>

            </div>

            {/* Circular-style progress */}
            <div className="flex justify-center py-4">

              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-white/10">

                <div
                  className="absolute inset-[-14px] rounded-full"
                  style={{
                    background:
                      "conic-gradient(#8b5cf6 0deg 244deg, transparent 244deg 360deg)",
                    mask:
                      "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 14px), #000 calc(100% - 13px))",
                  }}
                />

                <div className="text-center">

                  <div className="text-4xl font-black">
                    68%
                  </div>

                  <div className="text-xs text-gray-500">
                    completed
                  </div>

                </div>

              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                  <span className="text-sm">
                    Fundamentals
                  </span>

                </div>

                <span className="text-sm text-emerald-400">
                  Done
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <PlayCircle className="h-5 w-5 text-violet-400" />

                  <span className="text-sm">
                    Full Stack Development
                  </span>

                </div>

                <span className="text-sm text-violet-400">
                  72%
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

                <div className="flex items-center gap-3">

                  <Target className="h-5 w-5 text-gray-500" />

                  <span className="text-sm text-gray-400">
                    Interview Preparation
                  </span>

                </div>

                <span className="text-sm text-gray-500">
                  35%
                </span>

              </div>

            </div>

          </section>

        </div>

        {/* Bottom section */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Weekly goal */}
          <section className="rounded-2xl border border-white/10 bg-[#111118] p-6 md:p-8">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
                  Weekly Goal
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  Keep the momentum
                </h2>

              </div>

              <BookOpen className="h-6 w-6 text-violet-400" />

            </div>

            <div className="mt-7">

              <div className="mb-3 flex justify-between text-sm">

                <span className="text-gray-400">
                  18.5 of 25 hours
                </span>

                <span className="font-semibold text-white">
                  74%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500"
                  style={{ width: "74%" }}
                />

              </div>

              <p className="mt-4 text-sm text-gray-500">
                6.5 more hours to complete your weekly learning goal.
              </p>

            </div>

          </section>

          {/* Recent activity */}
          <section className="rounded-2xl border border-white/10 bg-[#111118] p-6 md:p-8">

            <div className="mb-7">

              <p className="text-sm font-semibold uppercase tracking-wider text-violet-400">
                Activity
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                Recent activity
              </h2>

            </div>

            <div className="space-y-5">

              {activities.map((activity, index) => {

                const Icon = activity.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">

                      <Icon className="h-5 w-5 text-violet-400" />

                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-medium text-gray-200">
                        {activity.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {activity.time}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}