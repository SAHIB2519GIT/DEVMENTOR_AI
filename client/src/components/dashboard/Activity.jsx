import {
  FileText,
  Brain,
  Route,
  CheckCircle,
} from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "Resume analyzed",
    time: "2 mins ago",
  },
  {
    icon: Brain,
    title: "Interview generated",
    time: "20 mins ago",
  },
  {
    icon: Route,
    title: "Roadmap created",
    time: "Yesterday",
  },
  {
    icon: CheckCircle,
    title: "ATS improved to 92%",
    time: "Yesterday",
  },
];

export default function Activity() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold mb-8">
        Recent Activity
      </h2>

      <div className="space-y-6">

        {activities.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="flex items-center gap-5"
            >

              <div className="h-12 w-12 rounded-xl bg-violet-600/20 flex items-center justify-center">

                <Icon
                  className="text-violet-400"
                  size={22}
                />

              </div>

              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.time}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}