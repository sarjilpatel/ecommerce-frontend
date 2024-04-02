import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import SidebarItem from "../SidebarItem/SidebarItem";
import { useDispatch, useSelector } from "react-redux";
// import { setSidebarTempActive } from "../../../redux/features/sidebarSlice";
import "./SidebarItemCollapse.css";
import { setSidebarTempActive } from "../../../redux/features/sidebarSlice";
import SidebarItem from "../SidebarItem/SidebarItem";
import { Accordion } from "react-bootstrap";
import { MdOutlineExpandMore } from "react-icons/md";

const SidebarItemCollapse = ({ item, level, indexKey }) => {
  const dispatch = useDispatch();
  const { active, tempActive } = useSelector((state) => state.sidebarState);

  const handleClick = () => {
    dispatch(setSidebarTempActive(indexKey));
  };
  return (
    <Accordion.Item eventKey={indexKey}>
      <Accordion.Button
        style={{ paddingLeft: level * 16 + "px" }}
        className={`indexKey ${
          active.startsWith(indexKey) ? "activelink" : ""
        } ${tempActive.startsWith(indexKey) ? "tempactivelink" : ""}`}
        onClick={handleClick}
      >
        <span>
          {item.icon}
          {item.displayText}
        </span>
        <MdOutlineExpandMore className="accordionexpandmoreicon" />
      </Accordion.Button>

      <Accordion.Body>
        <Accordion flush>
          {item.childrens.map((child, index) =>
            child.childrens ? (
              <SidebarItemCollapse
                item={child}
                level={level + 1}
                indexKey={indexKey + "" + index}
                key={index}
              />
            ) : (
              <SidebarItem
                item={child}
                level={level + 1}
                key={index}
                indexKey={indexKey + "" + index}
              />
            )
          )}
        </Accordion>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SidebarItemCollapse;
