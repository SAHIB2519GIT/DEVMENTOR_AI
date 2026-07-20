import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import Interview from "./pages/Interview";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* Public Routes */}

          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume"
            element={
              <ProtectedRoute>
                <ResumeAnalyzer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview"
            element={
              <ProtectedRoute>
                <Interview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/roadmap"
            element={
              <ProtectedRoute>
                <Roadmap />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* 404 */}

          <Route
            path="*"
            element={
              <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center text-3xl font-bold">
                404 | Page Not Found
              </div>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;