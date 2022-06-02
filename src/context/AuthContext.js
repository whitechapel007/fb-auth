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
  const [loading, setLoading] = useState("");
  const [data, setData] = useState("");

  const [alert, setAltert] = useState("");

  useEffect(() => {
    const getLocalStorage = () => {
      let fetchData = localStorage.getItem("user");
      if (fetchData) {
        fetchData = JSON.parse(localStorage.getItem("user"));
        setData(fetchData);
      } else {
        return {};
      }
      // console.log(users?.value.email);
      //  setData(users?.value.email);
      // const { displayName, email, phoneNumber, photoURL } =
      //   users.value.providerData[0];

      // let name = email.split("@")[0];
      // let name = users.value.email.split("@")[0];
    };

    getLocalStorage();
  }, []);
  const createUser = (email, password) => {
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const {
          displayName: name,
          email,
          photoURL: src,
          accessToken: token,
        } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem("user", JSON.stringify(user));

        // const now = new Date();
        // const item = {
        //   value: createUser,
        //   expiry: now.getTime() + 360,
        // };

        navigate("/dashboard");
      })
      .catch((error) => {
        setAltert(error.message);
      });
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
  const signin = (email, password) => {
    setLoading(true);

    const result = signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const {
          displayName: name,
          email,
          photoURL: src,
          accessToken: token,
        } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);

        setAltert(error.message);
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const {
          displayName: name,
          email,
          photoURL: src,
          accessToken: token,
        } = res.user;
        const user = { name, email, src, token };
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setAltert(error.message);
      });
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
        loading,
        setLoading,
        data,
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
