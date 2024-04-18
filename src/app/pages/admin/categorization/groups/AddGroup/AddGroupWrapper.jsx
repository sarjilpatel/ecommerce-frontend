import React from "react";
import PageTitle from "../../../../../components/Pageatitle/PageTitle";
import { Link } from "react-router-dom";
import AddGroup from "./AddGroup";

const AddGroupWrapper = () => {
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
        Add Group
      </PageTitle>
      <AddGroup />
    </div>
  );
};

export default AddGroupWrapper;
