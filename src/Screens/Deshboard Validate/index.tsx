import React from "react";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }
  return (
    <>
      <h1 style={{ color: "#000" }}>Os cara kk</h1>
      <button onClick={handleLogout}> os cara</button>
    </>
  );
};

export default Dashboard;
