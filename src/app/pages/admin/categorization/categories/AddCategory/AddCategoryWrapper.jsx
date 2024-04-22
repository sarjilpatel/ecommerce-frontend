import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";
import AddCategory from "./AddCategory";
import { AddCategoryProvider } from "./core/AddCategoryProvider";

const AddCategoryWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/categorization/groups/all" className="btn btn-dark ">
            All Groups
          </Link>
        }
      >
        Add Category
      </PageTitle>
      <AddCategoryProvider>
        <AddCategory />
      </AddCategoryProvider>
    </div>
  );
};

export default AddCategoryWrapper;
