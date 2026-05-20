import React from "react";

export const metadata = {
  title: "Dashboard Layout",
  description: "This is the dashboard layout for our Next.js application.",
};

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>

      {children}
    </div>
  );
};

export default DashboardLayout;