import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";
import { AllCategoriesProvider } from "./core/AllCategoriesProvider";
import AllCategories from "./AllCategories";

const AllCategoriesWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link
            to="/admin/categorization/categories/add"
            className="btn btn-dark "
          >
            Add Categories
          </Link>
        }
      >
        All Categories
      </PageTitle>
      <AllCategoriesProvider>
        <AllCategories />
      </AllCategoriesProvider>
    </div>
  );
};

export default AllCategoriesWrapper;
