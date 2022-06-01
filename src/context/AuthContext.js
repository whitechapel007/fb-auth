import db from "../db";
import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
const UserContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [alert, setAltert] = useState("");
  const createUser = async (email, password) => {
    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const now = new Date();
      const item = {
        value: createUser,
        expiry: now.getTime() + 360,
      };
      localStorage.setItem("user", JSON.stringify(item));

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      setAltert(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      const now = new Date();
      const item = {
        value: currUser,
        expiry: now.getTime() + 360,
      };
      localStorage.setItem("user", JSON.stringify(item));
    });
  }, []);

  const logout = () => {
    return signOut(auth);
  };
  const signin = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const now = new Date();
      const item = {
        value: result,
        expiry: now.getTime() + 360,
      };
      localStorage.setItem("user", JSON.stringify(item));

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);

      setAltert(error.message);
    }
  };
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      let result = await signInWithPopup(auth, provider);

      const now = new Date();
      const item = {
        value: result,
        expiry: now.getTime() + 360,
      };
      localStorage.setItem("user", JSON.stringify(item));

      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      setAltert(error.message);
    }
  };
  return (
    <UserContext.Provider
      value={{
        createUser,
        user,
        logout,
        signin,
        signInWithGoogle,
        db,
        alert,
        setAltert,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => {
  return useContext(UserContext);
};
export { UserContext, AuthContextProvider, useAuth };
