import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [urlData, setUrlData] = useState("");
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("user"));

    setEmail(users.value.email);
    const { displayName, email, phoneNumber, photoURL } =
      users.value.providerData[0];

    setUrlData({ displayName, email, phoneNumber, photoURL });
  }, []);
  return (
    <section className="h-screen  flex items-center justify-center">
      <main className=" flex-1 gap-5 flex bg-[#16003B] h-[73vh] w-[66vw] rounded-lg text-white p-2 pl-20">
        <section>
          <div>
            {data && (
              <div>
                <h1 className="text-xl font-bold p-2 text-left">
                  {data} profile
                </h1>
                <h1 className="text-sm font-thin text-gray-300 ">
                  personal Details
                </h1>

                <div className="md:flex  md:justify-around">
                  <div className="flex-1">
                    <h1 className="p-2">
                      <h1>Name:</h1>
                      <span className="font-semibold">
                        {urlData?.displayName}
                      </span>
                    </h1>
                    <h1 className="p-2">
                      <h1>Email:</h1>
                      <span className="font-semibold">{urlData?.email}</span>
                    </h1>
                    <h1 className="p-2">
                      <h1>Phone Number:</h1>
                      <span className="font-semibold">
                        {urlData?.phoneNumber}
                      </span>
                    </h1>
                  </div>
                  <div>
                    <h1 className="p-2">
                      <span>
                        <img src={urlData?.photoURL} alt="" />
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2 px-2 md:p- bg-white text-[#16003B] md:w-2/3 w-2/3 
          mt-2"
          >
            {" "}
            Go Back
          </button>
        </section>
      </main>
    </section>
  );
};

export default Profile;
