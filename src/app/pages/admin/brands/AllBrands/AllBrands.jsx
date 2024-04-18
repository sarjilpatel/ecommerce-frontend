import React, { useContext } from "react";
import DataTable from "../../../../components/DataTable/DataTable";
import { AllBrandsColumns } from "./components/columns";
import AllBrandContext from "./core/AllBrandsProvider";

const AllBrands = () => {
  const { allBrands } = useContext(AllBrandContext);

  return (
    <div className=" regularpadding">
      <div className="cardcustom p-2">
        <div className=" p-5 table-responsive d-flex flex-column gap-5">
          <h2>All Brands</h2>
          <DataTable inputData={allBrands} inputColumns={AllBrandsColumns} />
        </div>
      </div>
    </div>
  );
};

export default AllBrands;
