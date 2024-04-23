import React, { useContext } from "react";

import "./AllCategories.css";
import DataTable from "../../../../../components/DataTable/DataTable";
import AllCategoriesContext from "./core/AllCategoriesProvider";
import { AllCategoriesColumns } from "./components/columns";

const AllCategories = () => {
  const { allCategories } = useContext(AllCategoriesContext);
  return (
    <div className=" regularpadding">
      <div className="cardcustom p-2">
        <div className=" p-5 table-responsive d-flex flex-column gap-5">
          <h2>All Categories</h2>
          <DataTable
            inputData={allCategories}
            inputColumns={AllCategoriesColumns}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCategories;
