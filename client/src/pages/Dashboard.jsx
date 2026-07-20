import { useEffect, useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import StatCard from "../components/dashboard/StatCard";
import ProgressChart from "../components/dashboard/ProgressChart";
import Activity from "../components/dashboard/Activity";
import ResumeHistory from "../components/dashboard/ResumeHistory";

import { getDashboard } from "../services/dashboardService";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchDashboard() {

      try {

        const data = await getDashboard();

        setDashboard(data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    fetchDashboard();

  }, []);

  if (loading) {

    return (

      <div className="min-h-screen bg-[#09090b] flex items-center justify-center text-white text-3xl">

        Loading Dashboard...

      </div>

    );

  }

  return (

    <div className="flex min-h-screen bg-[#09090b] text-white">

      <Sidebar />

      <main className="flex-1">

        <Topbar />

        <div className="p-10">

          <h1 className="text-5xl font-black">

            Dashboard

          </h1>

          <p className="mt-2 text-gray-400">

            Welcome back to DevMentor AI

          </p>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">

            <StatCard
              title="Resumes"
              value={dashboard.statistics.totalResumes}
              color="text-green-400"
            />

            <StatCard
              title="Interviews"
              value={dashboard.statistics.totalInterviews}
              color="text-violet-400"
            />

            <StatCard
              title="Roadmaps"
              value={dashboard.statistics.totalRoadmaps}
              color="text-cyan-400"
            />

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">

            <div className="lg:col-span-2">

              <ProgressChart />

            </div>

            <Activity activities={dashboard.activities} />

          </div>

          <div className="mt-10">

            <ResumeHistory resume={dashboard.latestResume} />

          </div>

        </div>

      </main>

    </div>

  );

}