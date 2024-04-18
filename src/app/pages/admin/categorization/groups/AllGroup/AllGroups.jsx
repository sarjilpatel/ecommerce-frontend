import React, { useContext } from "react";
import DataTable from "../../../../../components/DataTable/DataTable";
import AllGroupsContext from "./core/AllGroupsProvider";
import { AllGroupsColumns } from "./components/columns";

const AllGroups = () => {
  const { allGroups } = useContext(AllGroupsContext);

  return (
    <div className=" regularpadding">
      <div className="cardcustom p-2">
        <div className=" p-5 table-responsive d-flex flex-column gap-5">
          <h2>All Groups</h2>
          <DataTable inputData={allGroups} inputColumns={AllGroupsColumns} />
        </div>
      </div>
    </div>
  );
};

export default AllGroups;
