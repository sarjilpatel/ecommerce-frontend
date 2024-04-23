import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import CategoriesWrapper from "./categories/CategoriesWrapper";

const CategoriesWrapper = lazy(() => {
  return import("./categories/CategoriesWrapper");
});

const CategorizationWrapper = () => {
  return (
    <Routes>
      <Route path="/categories/*" element={<CategoriesWrapper />} />
      <Route path="/groups/*" element={<CategoriesWrapper />} />
    </Routes>
  );
};

export default CategorizationWrapper;
