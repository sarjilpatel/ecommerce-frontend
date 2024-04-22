import React, { useContext } from "react";
import DataTable from "../../../../../components/DataTable/DataTable";
import AllSizeCategoriesContext from "./core/AllSizeCategoriesProvider";
import { AllSizeCategoriesColumns } from "./components/columns";

const AllSizeCategories = () => {
  const { allSizeCategories } = useContext(AllSizeCategoriesContext);

  return (
    <div className=" regularpadding">
      <div className="cardcustom p-2">
        <div className=" p-5 table-responsive d-flex flex-column gap-5">
          <h2>All SizeCategories</h2>
          <DataTable
            inputData={allSizeCategories}
            inputColumns={AllSizeCategoriesColumns}
          />
        </div>
      </div>
    </div>
  );
};

export default AllSizeCategories;
