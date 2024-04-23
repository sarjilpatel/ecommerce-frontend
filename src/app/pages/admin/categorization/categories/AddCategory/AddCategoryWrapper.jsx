import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link, useLocation } from "react-router-dom";
import AddCategory from "./AddCategory";
import { AddCategoryProvider } from "./core/AddCategoryProvider";

const AddCategoryWrapper = () => {
  const location = useLocation();
  const isEditMode =
    location.pathname == "/admin/categorization/categories/edit" ? true : false;
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/categorization/categories" className="btn btn-dark ">
            All Categories
          </Link>
        }
      >
        {isEditMode ? "Edit" : "Add"} Category
      </PageTitle>
      <AddCategoryProvider>
        <AddCategory isEditMode={isEditMode} />
      </AddCategoryProvider>
    </div>
  );
};

export default AddCategoryWrapper;
