import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { useRouter } from "next/router";
import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from "../services/auth/authService";
import api from "../services/api/apiService";

interface User {
  username: string;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();

    if (token) {
      // Retrieve user information from the backend using the token
      api
        .get("/api/users")
        .then((response) => setUser(response.data))
        .catch((error) => {
          console.error("Error retrieving user data:", error);
          logout();
        });
    }
  }, []);

  const login = (token: string) => {
    setAuthToken(token);
    // Assuming you have a route that returns user information based on the token
    api
      .get("/api/users")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error retrieving user data:", error));
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
    router.push("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
