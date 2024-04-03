import React, { useContext, useState } from "react";
import "./SidebarItem.css";
import { Link } from "react-router-dom";
import SidebarContext from "../SideBarProvider";

const SidebarItem = ({ item, level, indexKey }) => {
  // const dispatch = useDispatch();
  // const { active } = useSelector((state) => state.sidebarState);

  const { active, setActive, setTempActive } = useContext(SidebarContext);

  const handleClick = () => {
    setActive(indexKey);
    setTempActive(indexKey);
  };
  return (
    <div
      className={`sidebaritem ${open ? "active" : ""}`}
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
