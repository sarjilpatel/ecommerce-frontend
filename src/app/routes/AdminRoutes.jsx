import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AdminDashboard from "../pages/admin/admindashboard/AdminDashboard";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const userState = useSelector((state) => state.userState);

  return userState.isLoggedIn && userState.userState.eRole == "admin" ? (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
    </Routes>
  ) : (
    <Navigate to={`/login?refer=${useLocation().pathname}`} />
  );
};

export default AdminRoutes;
