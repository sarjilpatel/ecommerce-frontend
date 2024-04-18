import React from "react";
import PageTitle from "../../../../components/Pageatitle/PageTitle";
import AllBrands from "./AllBrands";
import { AllBrandsProvider } from "./core/AllBrandsProvider";
import { Link } from "react-router-dom";

const AllBrandsWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/brands/add" className="btn btn-dark ">
            Add Brand
          </Link>
        }
      >
        All Brands
      </PageTitle>
      <AllBrandsProvider>
        <AllBrands />
      </AllBrandsProvider>
    </div>
  );
};

export default AllBrandsWrapper;
