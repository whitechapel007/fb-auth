import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const { createUser, signInWithGoogle, alert, setAltert } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password === confirmpassword) {
        await createUser(email, password);
        navigate("/dashboard");
        setPassword("");
        setEmail("");
      } else {
        setAltert("passwords Dont match");
      }
    } catch (error) {
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
        <h1 className="text-2xl font-bold py-2"> create a free account here</h1>
        <p className="py-2">
          Aleady have an account ?{" "}
          <Link to="/signin" className="underline">
            {" "}
            Sign in.{" "}
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
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">confirm password</label>
            <input
              type="password"
              className="border p-3 border-slate-300"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="border  border-blue-500 hover:bg-blue-600 bg-blue-700 w-full p-4 my-2 text-white">
            Sign up
          </button>
        </form>
        <div className="text-center">
          <h2 className="text-center"> or </h2>
          <button
            className="text-center mb-3 p-3 bg-blue-600  text-white"
            onClick={signInWithGoogle}
          >
            sign in with google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
