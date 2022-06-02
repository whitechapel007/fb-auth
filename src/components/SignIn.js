import React, { useState, useEffect } from "react";

import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, alert, setAltert,setLoading } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      if (email == "" || password == "") {
        setAltert("empty username and password ");
      }
      setLoading(true)
      await signin(email, password);
      navigate("/dashboard");
      setLoading(false)
    } catch (error) {
      console.log(error.message);
      setAltert(error.message);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAltert("");
    }, 3000);
    return () => clearTimeout(timeout);
  });
  return (
    <>
      {alert && <div className="text-center p-3 text-red-800">{alert} </div>}
      <div className="max-w-[700px] mx-auto my-16 p-4 ">
        <h1 className="text-2xl font-bold py-2"> sign in to your account</h1>
        <p className="py-2">
          Dont have an account yet ?{" "}
          <Link to="/signup" className="underline">
            {" "}
            Sign up.{" "}
          </Link>{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email Address</label>
            <input
              type="email"
              className="border p-3 border-slate-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">password</label>
            <input
              type="password"
              className="border p-3 border-slate-300"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="border  border-blue-500 hover:bg-blue-600 bg-blue-700 w-full p-4 my-2 text-white">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
