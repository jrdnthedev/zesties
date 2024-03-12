import { useAuth } from "@/app/context/AuthContext";

export default function Logout() {
  const { logout } = useAuth();
  return <button onClick={logout}>Logout</button>;
}
