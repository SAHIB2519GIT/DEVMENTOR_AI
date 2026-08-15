import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { week: "Mon", ats: 62 },
  { week: "Tue", ats: 70 },
  { week: "Wed", ats: 76 },
  { week: "Thu", ats: 81 },
  { week: "Fri", ats: 86 },
  { week: "Sat", ats: 90 },
  { week: "Sun", ats: 92 },
];

export default function ProgressChart() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111118] p-6 md:p-8 shadow-xl">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">

        <div>
          <p className="text-sm font-medium text-violet-400">
            PERFORMANCE
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            ATS Score Progress
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your score improvement over the last 7 days
          </p>
        </div>

        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
          <span className="text-sm font-semibold text-emerald-400">
            +30%
          </span>
        </div>

      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              stroke="#ffffff"
              strokeOpacity={0.06}
              vertical={false}
            />

            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6b7280",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#18181f",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
              labelStyle={{
                color: "#9ca3af",
              }}
              formatter={(value) => [`${value}%`, "ATS Score"]}
            />

            <Line
              type="monotone"
              dataKey="ats"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#8b5cf6",
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}