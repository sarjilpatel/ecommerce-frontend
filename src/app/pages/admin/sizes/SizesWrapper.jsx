import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SizeCategoriesWrapper = lazy(() =>
  import("./SizeCategories/SizeCategoriesWrapper")
);

const SizesWrapper = () => {
  return (
    <Routes>
      <Route path="sizecategories/*" element={<SizeCategoriesWrapper />} />
    </Routes>
  );
};

export default SizesWrapper;
