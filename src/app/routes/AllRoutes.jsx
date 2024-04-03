import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPageWrapper from "../pages/auth/login/LoginPageWrapper";
import SignUpPageWrapper from "../pages/auth/signup/SignUpPageWrapper";
import RequireAuth from "./RequireAuth";
import AdminDashboard from "../pages/admin/admindashboard/AdminDashboard";
import NotFound from "../pages/notfound/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPageWrapper />} />
      <Route path="/signup" element={<SignUpPageWrapper />} />

      <Route element={<RequireAuth allowedRole="admin" />}>
        <Route path="admin/">
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
