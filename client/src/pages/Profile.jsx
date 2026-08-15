import { useEffect, useRef, useState } from "react";
import {
  Edit3,
  Save,
  Camera,
  ShieldCheck,
  FileText,
  Brain,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  const fileInputRef = useRef(null);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setName(user?.name || "Your Name");
    setEmail(user?.email || "your@email.com");
    setRole(user?.role || "Frontend Developer");

    if (user?.avatar) {
      setAvatar(user.avatar);
    }
  }, [user]);

  function handleAvatarChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function handleSave() {
    setEditing(false);
  }

  const initials =
    name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[30%] top-[-250px] h-[500px] w-[500px] rounded-full bg-violet-600/[0.045] blur-[150px]" />
      </div>

      <main className="relative mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10 lg:px-14 xl:px-16">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-10 flex flex-col gap-6 border-b border-white/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
              Account
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Profile
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              Manage your personal information and career preferences.
            </p>
          </div>

          <button
            onClick={() => {
              if (editing) {
                handleSave();
              } else {
                setEditing(true);
              }
            }}
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 text-sm font-semibold shadow-lg shadow-violet-600/10 transition hover:bg-violet-500"
          >
            {editing ? <Save size={17} /> : <Edit3 size={17} />}

            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* =====================================================
            PROFILE HEADER
        ====================================================== */}

        <section className="rounded-3xl border border-white/[0.08] bg-[#0d0d10]">
          <div className="p-7 sm:p-9 lg:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* LEFT */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* AVATAR */}
                <div className="relative mx-auto shrink-0 sm:mx-0">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Profile"
                      className="h-28 w-28 rounded-3xl border border-white/10 object-cover shadow-2xl"
                    />
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 text-3xl font-bold shadow-2xl">
                      {initials}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#0d0d10] bg-zinc-800 text-zinc-300 shadow-lg transition hover:bg-violet-600 hover:text-white"
                    title="Change profile picture"
                  >
                    <Camera size={17} />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>

                {/* USER */}
                <div className="text-center sm:text-left">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <h2 className="text-3xl font-bold tracking-tight">
                      {name}
                    </h2>

                    <span className="mx-auto flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-400 sm:mx-0">
                      <ShieldCheck size={14} />
                      Active
                    </span>
                  </div>

                  <p className="mt-2 text-base text-zinc-400">
                    {role}
                  </p>

                  <p className="mt-1 text-sm text-zinc-600">
                    {email}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="border-t border-white/[0.06] pt-6 text-center lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-left">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
                  Target Career
                </p>

                <p className="mt-2 text-lg font-semibold text-zinc-300">
                  {role}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="mt-8 grid gap-8 xl:grid-cols-2">
          {/* PERSONAL INFORMATION */}

          <section className="rounded-3xl border border-white/[0.08] bg-[#0d0d10] p-7 sm:p-9">
            <div className="mb-8">
              <h2 className="text-xl font-bold">
                Personal Information
              </h2>

              <p className="mt-2 text-sm text-zinc-600">
                Your basic account details.
              </p>
            </div>

            <div className="space-y-7">
              {/* NAME */}

              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-400">
                  Full Name
                </label>

                <input
                  value={name}
                  disabled={!editing}
                  onChange={(e) => setName(e.target.value)}
                  className="h-14 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none transition focus:border-violet-500/50 disabled:cursor-default disabled:text-zinc-400"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-400">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  disabled={!editing}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none transition focus:border-violet-500/50 disabled:cursor-default disabled:text-zinc-400"
                />
              </div>

              {/* CAREER */}

              <div>
                <label className="mb-3 block text-sm font-medium text-zinc-400">
                  Target Career
                </label>

                <input
                  value={role}
                  disabled={!editing}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-14 w-full rounded-xl border border-white/[0.08] bg-black/20 px-4 text-sm text-white outline-none transition focus:border-violet-500/50 disabled:cursor-default disabled:text-zinc-400"
                />
              </div>
            </div>
          </section>

          {/* DEVMENTOR ACTIVITY */}

          <section className="rounded-3xl border border-white/[0.08] bg-[#0d0d10] p-7 sm:p-9">
            <div className="mb-8">
              <h2 className="text-xl font-bold">
                DevMentor Activity
              </h2>

              <p className="mt-2 text-sm text-zinc-600">
                Your current preparation status.
              </p>
            </div>

            <div className="space-y-4">
              <ActivityRow
                icon={<FileText size={18} />}
                iconClass="bg-violet-500/[0.08] text-violet-400"
                title="Resume Analysis"
                description="Resume readiness"
                status="Ready"
                statusClass="text-violet-400"
              />

              <ActivityRow
                icon={<Brain size={18} />}
                iconClass="bg-blue-500/[0.08] text-blue-400"
                title="Interview Preparation"
                description="AI interview practice"
                status="Active"
                statusClass="text-blue-400"
              />

              <ActivityRow
                icon={<Target size={18} />}
                iconClass="bg-emerald-500/[0.08] text-emerald-400"
                title="Career Roadmap"
                description="Personalized learning path"
                status="Active"
                statusClass="text-emerald-400"
              />
            </div>
          </section>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Profile Status"
            value="Active"
            icon={<CheckCircle2 size={18} />}
            iconClass="text-emerald-400"
          />

          <StatCard
            label="Resume"
            value="Ready"
            description="Latest version available"
          />

          <StatCard
            label="Interview Prep"
            value="Active"
            description="Keep practicing"
          />

          <StatCard
            label="Career Goal"
            value={role}
          />
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="mt-8 rounded-3xl border border-violet-500/[0.12] bg-gradient-to-r from-violet-950/30 to-blue-950/20 p-7 sm:p-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
                Keep progressing
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Build the career you want.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                Analyze your resume, practice interviews, and follow your
                personalized roadmap with DevMentor AI.
              </p>
            </div>

            <button
              onClick={() => {
                window.location.href = "/dashboard";
              }}
              className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Go to Dashboard
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   ACTIVITY ROW
========================================================= */

function ActivityRow({
  icon,
  iconClass,
  title,
  description,
  status,
  statusClass,
}) {
  return (
    <div className="flex min-h-[76px] items-center justify-between gap-5 rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-4">
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">
            {title}
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            {description}
          </p>
        </div>
      </div>

      <span className={`shrink-0 text-xs font-semibold ${statusClass}`}>
        {status}
      </span>
    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  label,
  value,
  description,
  icon,
  iconClass = "",
}) {
  return (
    <div className="min-h-[135px] rounded-2xl border border-white/[0.08] bg-[#0d0d10] p-6">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-600">
          {label}
        </p>

        {icon && (
          <span className={iconClass}>
            {icon}
          </span>
        )}
      </div>

      <p className="mt-5 truncate text-xl font-bold">
        {value}
      </p>

      {description && (
        <p className="mt-2 text-xs text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}