import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <section className="md:flex h-screen">
        <div className=" md:w-2/12  border-r border-r-[#d3d3d3]">
          <Sidebar />
        </div>
        <div className=" md:flex-1 ">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
