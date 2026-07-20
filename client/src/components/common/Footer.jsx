export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-black text-violet-400">
              DevMentor AI
            </h2>

            <p className="mt-6 text-gray-400 leading-7">
              AI-powered career platform helping students improve resumes,
              prepare interviews, increase ATS scores and build personalized
              career roadmaps.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Product</h3>

            <div className="space-y-3">
              <a href="/resume">Resume Analyzer</a><br />
              <a href="/interview">Interview Generator</a><br />
              <a href="/roadmap">Career Roadmap</a><br />
              <a href="/dashboard">Dashboard</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">Resources</h3>

            <div className="space-y-3">
              <p>Documentation</p>
              <p>FAQs</p>
              <p>Support</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              Stay Updated
            </h3>

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg px-4 py-3 bg-white/10 border border-white/10"
            />

            <button className="mt-4 w-full rounded-lg bg-violet-600 py-3 font-semibold">
              Subscribe
            </button>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500">
          © 2026 DevMentor AI
        </div>

      </div>
    </footer>
  );
}