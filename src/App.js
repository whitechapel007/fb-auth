import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import HomePage from "./components/HomePage.js";
import Dashboard from "./context/Dashboard.js";
import Header from "./components/Header";
import User from "./components/outlets/User.js";
import Courses from "./components/outlets/Courses.js";
import Profile from "./components/outlets/Profile.js";
import Settings from "./components/outlets/Settings.js";
import Logout from "./components/outlets/Logout.js";
import SingleCourse from "./components/outlets/SingleCourse.js";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/fb-auth" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="user" element={<User />} />
          <Route path="/dashboard" element={<Navigate replace to="user" />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<SingleCourse />} />

          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
