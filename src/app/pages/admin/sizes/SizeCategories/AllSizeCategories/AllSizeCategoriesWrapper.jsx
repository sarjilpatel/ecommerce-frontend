import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";

const AllSizeCategoriesWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/brands/add" className="btn btn-dark ">
            All Groups
          </Link>
        }
      >
        All Groups
      </PageTitle>
      <AllGroupsProvider>
        <AllGroups />
      </AllGroupsProvider>
    </div>
  );
};

export default AllSizeCategoriesWrapper;
