import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const setLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="h-screen  flex items-center justify-center">
      <main className="flex-col flex-1 gap-5 flex bg-[#16003B] h-[73vh] w-[66vw] rounded-lg text-white justify-center p-2 pl-20">
        <div className="text-3xl">Good bye</div>

        <div>Are you sure You want to leave ?</div>
        <div className="gap-4 flex">
          <button
            className=" p-2 px-4 md:p-2 bg-red-400 text-white md:w-1/3 mt-2 "
            onClick={setLogout}
          >
            yes
          </button>
          <button
            onClick={() => navigate(-1)}
            className=" p-2 px-4 md:p-2 bg-white text-[#16003B] md:w-1/3 mt-2"
          >
            {" "}
            Go Back
          </button>
        </div>
      </main>
    </section>
  );
};

export default Logout;
