"use client";
import React, { useEffect, useState } from "react";
import getUsers from "@/app/services/users/users";
import { useAuth } from "@/app/context/AuthContext";
import LoadingSpinner from "../loading_spinner/loading_spinner";

export default function Login() {
  // Local state for form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState([]);
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  function findUser(users: any, email: string, password: string) {
    for (const user of users) {
      if (user.email === email && user.password === password) {
        //set user to state here
        return user;
      }
    }
    return null;
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform authentication logic here
    await login(email, password, findUser(users, email, password));
  };

  if (!isAuthenticated) {
    <LoadingSpinner />;
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
