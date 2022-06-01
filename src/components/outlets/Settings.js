import React from "react";

import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <section className="h-screen  flex items-center justify-center">
      <main className="flex-col flex-1 gap-5 flex bg-[#16003B] h-[73vh] w-[66vw] rounded-lg text-white justify-center p-2 pl-20">
        <div className="text-3xl">Coming soon</div>
        <button
          onClick={() => navigate(-1)}
          className=" p-2 px-2 md:p-2 bg-white text-[#16003B] md:w-1/3 w-2/3 mt-2"
        >
          {" "}
          Go Back
        </button>
      </main>
    </section>
  );
};

export default Settings;
