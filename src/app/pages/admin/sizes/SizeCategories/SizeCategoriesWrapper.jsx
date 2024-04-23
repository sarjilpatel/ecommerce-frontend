import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const AddSizeCategoryWrapper = lazy(() =>
  import("./AddSizeCategory/AddSizeCategoryWrapper")
);
const AllSizeCategoriesWrapper = lazy(() =>
  import("./AllSizeCategories/AllSizeCategoriesWrapper")
);

const SizeCategoriesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<AllSizeCategoriesWrapper />} />
      <Route path="/add" element={<AddSizeCategoryWrapper />} />
    </Routes>
  );
};

export default SizeCategoriesWrapper;
