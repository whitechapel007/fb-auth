import React, { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/undraw_education_f8ru.svg";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { loading, setLoading, data } = useAuth();
  const navigate = useNavigate();

  console.log(data);
  if (loading) {
    return <div>LOADING..</div>;
  }

  return (
    <Suspense fallback={<div>loading...</div>}>
      <section className="h-screen  flex items-center justify-center">
        <main className="flex-col flex-1 gap-5 flex bg-[#16003B] h-[73vh] w-[66vw] rounded-lg text-white justify-center p-2 pl-20">
          <div>
            {data && (
              <>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-left text-lg">
                    PERSONAL INFORMATION
                    <span className=" font-bold px-1 uppercase">
                      {" "}
                      <div>
                        <span>name: </span>
                        {data.value.displayName}
                      </div>
                      <div>
                        <span>email: </span>
                        {data.value.email}
                      </div>
                    </span>{" "}
                  </div>
                  <div className="p-3">
                    <img
                      src={data.value.photoURL}
                      alt=""
                      className="w-[100px]"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-white text-[#16003B] w-1/3 mt-2"
          >
            {" "}
            Go Back
          </button>
        </main>
      </section>
    </Suspense>
  );
};

export default Profile;
