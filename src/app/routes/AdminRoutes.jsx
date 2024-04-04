import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../pages/admin/admindashboard/AdminDashboard";
import RequireAuth from "./RequireAuth";

const AdminRoutes = () => {
  return (
    <Route element={<RequireAuth allowedRole="admin" />}>
      <Routes path="admin/">
        <Route path="dashboard" element={<AdminDashboard />} />
      </Routes>
    </Route>
  );
};

export default AdminRoutes;
