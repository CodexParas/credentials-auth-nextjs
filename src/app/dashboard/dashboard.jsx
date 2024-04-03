"use client";
import { getSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    async function getSessionData() {
      const session = await getSession();
      setSession(session);
    }
    getSessionData();
  }, []);
  if (!session) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>You are logged in as {session?.user?.email}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

export default Dashboard;
