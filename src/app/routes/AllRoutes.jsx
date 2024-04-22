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
import AddSizeCategoryWrapper from "../pages/admin/sizes/SizeCategories/AddSizeCategory/AddSizeCategoryWrapper";
import AllSizeCategoriesWrapper from "../pages/admin/sizes/SizeCategories/AllSizeCategories/AllSizeCategoriesWrapper";
import AddCategoryWrapper from "../pages/admin/categorization/categories/AddCategory/AddCategoryWrapper";

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
            <Route path="categories/">
              <Route path="add" element={<AddCategoryWrapper />} />
              <Route path="all" element={<AllGroupsWrapper />} />
            </Route>
            <Route path="subcategories/">
              <Route path="add" element={<AddGroupWrapper />} />
              <Route path="all" element={<AllGroupsWrapper />} />
            </Route>
          </Route>
          {/* Sizes */}
          <Route path="sizes/">
            <Route path="sizecategories/">
              <Route path="add" element={<AddSizeCategoryWrapper />} />
              <Route path="all" element={<AllSizeCategoriesWrapper />} />
            </Route>
            <Route path="sizeoptions/">
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
