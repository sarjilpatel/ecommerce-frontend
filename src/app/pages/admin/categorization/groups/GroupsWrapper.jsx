import React from "react";
import { Route, Routes } from "react-router-dom";
import AllGroupsWrapper from "./AllGroup/AllGroupsWrapper";
import AddGroup from "./AddGroup/AddGroup";

const GroupsWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<AllGroupsWrapper />} />
      <Route path="/add" element={<AddGroup />} />
      <Route path="/edit" element={<AddGroup />} />
    </Routes>
  );
};

export default GroupsWrapper;
