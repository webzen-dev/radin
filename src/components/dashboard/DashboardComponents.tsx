// /components/dashboard/DashboardComponents.tsx
import React from "react";
import SideBar from "./SideBar";

const DashboardComponents = ({ children }: any) => {
  return (
    <div className="dashboard-layout">
      <SideBar/>
      <main className="dashboard-content">{children}</main>
    </div>
  );
};

export default DashboardComponents;
