import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const AllCategoriesWrapper = lazy(() =>
  import("./AllCategories/AllCategoriesWrapper")
);
const AddCategoryWrapper = lazy(() =>
  import("./AddCategory/AddCategoryWrapper")
);

const CategoriesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCategoriesWrapper />} />
      <Route path="/add" element={<AddCategoryWrapper />} />
      <Route path="/edit" element={<AddCategoryWrapper />} />
    </Routes>
  );
};

export default CategoriesWrapper;
