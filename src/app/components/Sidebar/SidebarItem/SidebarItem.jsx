import React, { useState } from "react";
import "./SidebarItem.css";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  setSidebarActive,
  setSidebarTempActive,
} from "../../../redux/features/sidebarSlice";

const SidebarItem = ({ item, level, indexKey }) => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.sidebarState);

  const themeState = useSelector((state) => state.themeState);

  const handleClick = () => {
    console.log(indexKey);
    dispatch(setSidebarActive(indexKey));
    dispatch(setSidebarTempActive(indexKey));
  };
  return (
    <div
      className={`sidebaritem ${
        themeState.theme == "light" ? "light" : "dark"
      } ${open ? "active" : ""}`}
      onClick={handleClick}
    >
      <Link
        to={item.path}
        className={`sidebaritemtitle ${active == indexKey ? "activelink" : ""}`}
        style={{ paddingLeft: level * 16 + "px" }}
      >
        <span>
          {item.icon}
          {item.displayText}
        </span>
      </Link>
    </div>
  );
};

export default SidebarItem;
