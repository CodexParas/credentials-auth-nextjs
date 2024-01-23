"use client";
import { getSession } from "next-auth/react";
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
    </div>
  );
}

export default Dashboard;
