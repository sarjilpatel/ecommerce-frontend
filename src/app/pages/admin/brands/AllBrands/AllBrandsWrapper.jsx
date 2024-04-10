import React from "react";
import PageTitle from "../../../../components/Pageatitle/PageTitle";
import AllBrands from "./AllBrands";

const AllBrandsWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle display={true}>All Brands</PageTitle>
      <AllBrands />
    </div>
  );
};

export default AllBrandsWrapper;
