import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex gap-4 flex-wrap text-sm md:flex-col items-center font-mono font-medium  h-full justify-around pt-10 md:text-xl">
        <div>
          {" "}
          <Link
            className={
              location.pathname === "/dashboard/user"
                ? "bg-[#16003B] p-2  px-4 md:px-8 w-full text-white border"
                : "border p-1 border-[#16003B] md:border-0"
            }
            to={"/dashboard/user"}
          >
            User
          </Link>
        </div>
        <div>
          <Link
            className={
              location.pathname === "/dashboard/courses"
                ? "bg-[#16003B] p-2 px-4 md:px-8 w-full text-white"
                : "border p-1 border-[#16003B] md:border-0"
            }
            to="/dashboard/courses"
          >
            Courses
          </Link>
        </div>
        <div>
          {" "}
          <Link
            className={
              location.pathname === "/dashboard/profile"
                ? "bg-[#16003B] p-2 px-4 md:px-8 w-full text-white"
                : "border p-1 border-[#16003B] md:border-0"
            }
            to="/dashboard/profile"
          >
            Profile
          </Link>
        </div>
        <div>
          {" "}
          <Link
            className={
              location.pathname === "/dashboard/settings"
                ? "bg-[#16003B] p-2 px-4 md:px-8 w-full text-white"
                : "border p-1 border-[#16003B] md:border-0"
            }
            to="/dashboard/settings"
          >
            settings
          </Link>
        </div>
        <div>
          <Link
            className={
              location.pathname === "/dashboard/logout"
                ? "bg-[#16003B] p-2 px-4 md:px-8 w-full text-white"
                : "border p-1 border-[#16003B] md:border-0"
            }
            to="/dashboard/logout"
          >
            Logout
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
