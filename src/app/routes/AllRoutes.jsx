import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPageWrapper from "../pages/auth/login/LoginPageWrapper";
import SignUpPageWrapper from "../pages/auth/signup/SignUpPageWrapper";
import RequireAuth from "./RequireAuth";
import AdminDashboard from "../pages/admin/admindashboard/AdminDashboard";
import NotFound from "../pages/NotFound/NotFound";
import AddBrand from "../pages/admin/brands/AddBrand/AddBrand";
import AllBrandsWrapper from "../pages/admin/brands/AllBrands/AllBrandsWrapper";
import AddBrandsWrapper from "../pages/admin/brands/AddBrand/AddBrandsWrapper";
import AddGroupWrapper from "../pages/admin/categorization/groups/AddGroup/AddGroupWrapper";
import AllGroupsWrapper from "../pages/admin/categorization/groups/AllGroup/AllGroupsWrapper";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPageWrapper />} />
      <Route path="/signup" element={<SignUpPageWrapper />} />

      <Route element={<RequireAuth allowedRole="admin" />}>
        <Route path="admin/">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="brands/">
            <Route path="add" element={<AddBrandsWrapper />} />
            <Route path="all" element={<AllBrandsWrapper />} />
          </Route>
          <Route path="categorization/">
            <Route path="groups/">
              <Route path="add" element={<AddGroupWrapper />} />
              <Route path="all" element={<AllGroupsWrapper />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
