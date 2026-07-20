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
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold mb-8">
        ATS Score Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid stroke="#1f2937" />

          <XAxis dataKey="week" />

          <YAxis />

          <Tooltip />

          <Line
            dataKey="ats"
            stroke="#8b5cf6"
            strokeWidth={4}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}