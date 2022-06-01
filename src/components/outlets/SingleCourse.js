import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
const SingleCourse = () => {
  const { db } = useAuth();
  const { id } = useParams();
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let result = db.find((item) => item.id === +id);
    setData(result);
  }, [id]);
  console.log(data);
  return (
    <div>
      {data && (
        <>
          <section className="h-screen  flex items-center justify-center">
            <main className="flex-col flex-1 gap-3 md:gap-5 flex bg-[#16003B] h-[82vh] md:h-[73vh] md:w-[66vw] rounded-lg text-white justify-center p-2 md:pl-20">
              <div className=" text-[12px] md:text-4xl capitalize font-mono font-bold">
                {data.name}
              </div>
              <div className="text-[10px] md:w-[73%] font-mono md:text-base">
                {data.details.intro}
              </div>
              <div className="gap-2 flex md:gap-4 flex-wrap">
                {data.details.branches.map((branch) => (
                  <div className="text-xs p-2 bg-white text-[#16003B] rounded-md font-mono md:text-base flex-wrap">
                    {branch}
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate(-1)}
                className="md:p-2 bg-white text-[#16003B] w-1/3 md:mt-2"
              >
                {" "}
                Go Back
              </button>
            </main>
          </section>
        </>
      )}
    </div>
  );
};

export default SingleCourse;
