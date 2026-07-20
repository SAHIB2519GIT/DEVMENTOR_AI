import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
 Brain,
  Route,
 User,
 Settings,
 LogOut,
 GraduationCap,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Resume Analyzer",
    icon: FileText,
    path: "/resume",
  },
  {
    name: "Interview Generator",
    icon: Brain,
    path: "/interview",
  },
  {
    name: "Career Roadmap",
    icon: Route,
    path: "/roadmap",
  },
  {
    name: "Learning Progress",
    icon: GraduationCap,
    path: "/progress",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen sticky top-0 bg-[#0b1120] border-r border-white/10 flex flex-col">

      {/* Logo */}

      <div className="h-24 flex items-center px-8 border-b border-white/10">

        <h1 className="text-3xl font-black gradient-text">
          DevMentor AI
        </h1>

      </div>

      {/* Navigation */}

      <div className="flex-1 p-5">

        {menu.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-2xl px-5 py-4 mb-3 transition-all duration-300 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-gray-400 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}

      </div>

      {/* Bottom */}

      <div className="p-5 border-t border-white/10">

        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-5 mb-5">

          <h3 className="font-bold text-lg">
            AI Assistant
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Complete today's roadmap and improve your ATS score.
          </p>

        </div>

        <button className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-500/20 py-4 text-red-400 hover:bg-red-500 hover:text-white transition">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}