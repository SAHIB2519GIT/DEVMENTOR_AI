import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const { data } = await API.get("/auth/profile");

        setUser(data.user || data);
      } catch (err) {
        console.log(err);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function login(email, password) {
    const { data } = await API.post("/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setUser(data.user);
  }

  async function register(name, email, password) {
    const { data } = await API.post("/auth/register", {
      name,
      email,
      password,
    });

    localStorage.setItem("token", data.token);

    setUser(data.user);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}