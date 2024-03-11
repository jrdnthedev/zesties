import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getUsers from "@/app/services/users/users";

export default function Login() {
  // Local state for form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState([]);
  const [foundUser, setFoundUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  function findUser(data: any, email: string, password: string) {
    for (const user of data) {
      if (user.email === email && user.password === password) {
        setFoundUser(true);
        return user;
      }
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform authentication logic here
    // For simplicity, let's just log the credentials for now
    const user = findUser(users, email, password);

    if (foundUser) {
      console.log(user);
      //add user to app state as logged in

      //redirect user to product page
      router.push("/pages/product_catalog");
    }
  };

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
