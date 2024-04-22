import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";
import { AllSizeCategoriesProvider } from "./core/AllSizeCategoriesProvider";
import AllSizeCategories from "./AllSizeCategories";

const AllSizeCategoriesWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/brands/add" className="btn btn-dark ">
            All Sizecategories
          </Link>
        }
      >
        All Groups
      </PageTitle>
      <AllSizeCategoriesProvider>
        <AllSizeCategories />
      </AllSizeCategoriesProvider>
    </div>
  );
};

export default AllSizeCategoriesWrapper;
