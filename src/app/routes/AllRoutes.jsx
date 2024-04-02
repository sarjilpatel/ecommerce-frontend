import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import LoginPageWrapper from "../pages/auth/login/LoginPageWrapper";
import SignUpPageWrapper from "../pages/auth/signup/SignUpPageWrapper";
import AdminRoutes from "./AdminRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPageWrapper />} />
      <Route path="/signup" element={<SignUpPageWrapper />} />

      <Route path="/admin" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AllRoutes;
