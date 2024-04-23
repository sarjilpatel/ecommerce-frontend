import React from "react";
import { Route, Routes } from "react-router-dom";
import AllBrandsWrapper from "./AllBrands/AllBrandsWrapper";
import AddBrandsWrapper from "./AddBrand/AddBrandsWrapper";

const BrandsWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<AllBrandsWrapper />} />
      <Route path="/add" element={<AddBrandsWrapper />} />
    </Routes>
  );
};

export default BrandsWrapper;
