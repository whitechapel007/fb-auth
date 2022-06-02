import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <nav className="px-5 bg-[#16003B] scroll-smooth">
        <div className="flex items-center ">
          <Link to="/" className="flex-1">
            <img src={logo} alt="" className="" />
          </Link>
          {location.pathname == "/" || location.pathname === "/fb-auth" ? (
            <Link
              to="/signup"
              className=" border rounded-md bg-white text-[#290464] py-2 px-5 font-bold capitalize"
            >
              {" "}
              SIGN UP
            </Link>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Header;
