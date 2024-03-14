"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";
import { User } from "../interfaces/user/user";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (username: string, password: string, user: User) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userIsAuthenticated = Cookies.get("token") !== undefined;
    setIsAuthenticated(userIsAuthenticated);
  }, []);

  const login = async (username: string, password: string, user: User) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        null,
        {
          auth: {
            username,
            password,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data.token;
      Cookies.set("token", token);
      setIsAuthenticated(true);
      console.log("logged in ", user);
      router.push("/pages/product_catalog");
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");

    router.push("/");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
