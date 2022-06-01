import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/undraw_education_f8ru.svg";
const User = () => {
  const [data, setData] = useState("user");
  useEffect(() => {
    let fetchData = localStorage.getItem("user");
    if (fetchData) {
      const users = JSON.parse(fetchData);

      setData(users.value.email);
      // const { displayName, email, phoneNumber, photoURL } =
      //   users.value.providerData[0];

      // let name = email.split("@")[0];
      // let name = users.value.email.split("@")[0];
    }
  }, []);
  const navigate = useNavigate();

  return (
    <section className="h-screen  flex items-center justify-center">
      <main className="flex-col flex-1 gap-5 flex bg-[#16003B] h-[73vh] w-[66vw] rounded-lg text-white justify-center p-2 pl-20">
        <div>
          {data && (
            <>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center text-lg">
                  welcome{" "}
                  <span className=" font-bold px-1 uppercase"> {data}</span>{" "}
                </div>
                <div className="p-3">
                  <img src={img} alt="" className="w-[400px]" />
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
  );
};

export default User;
