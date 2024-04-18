import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";
import AddSizeCategory from "./AddSizeCategory";

const AddSizeCategoryWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/sizes/sizecategories/all" className="btn btn-dark ">
            All SizeCategories
          </Link>
        }
      >
        Add SizeCategory
      </PageTitle>
      <AddSizeCategory />
    </div>
  );
};

export default AddSizeCategoryWrapper;
