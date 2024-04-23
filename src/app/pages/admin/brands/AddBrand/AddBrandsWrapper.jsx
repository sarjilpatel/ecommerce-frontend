import React from "react";
import PageTitle from "../../../../components/Pageatitle/PageTitle";
import AddBrand from "./AddBrand";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddBrandsWrapper = () => {
  return (
    <div className="wrappercomponent">
      <PageTitle
        display={true}
        content={
          <Link to="/admin/brands" className="btn btn-dark ">
            All Brands
          </Link>
        }
      >
        Add Brand
      </PageTitle>
      <AddBrand />
    </div>
  );
};

export default AddBrandsWrapper;
