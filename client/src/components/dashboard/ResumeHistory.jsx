const history = [
  {
    name: "Frontend Resume",
    score: 92,
    date: "20 Jul",
  },
  {
    name: "Backend Resume",
    score: 87,
    date: "17 Jul",
  },
  {
    name: "Full Stack Resume",
    score: 84,
    date: "15 Jul",
  },
];

export default function ResumeHistory() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="text-2xl font-bold mb-8">

        Resume History

      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400">

            <th>Resume</th>

            <th>ATS</th>

            <th>Date</th>

          </tr>

        </thead>

        <tbody>

          {history.map((item, index) => (

            <tr
              key={index}
              className="border-t border-white/10"
            >

              <td className="py-5">

                {item.name}

              </td>

              <td className="text-green-400 font-bold">

                {item.score}%

              </td>

              <td>

                {item.date}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}