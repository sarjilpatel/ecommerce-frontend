import React, { useContext } from "react";
import SidebarItem from "../SidebarItem/SidebarItem";
import { Accordion } from "react-bootstrap";
import { MdOutlineExpandMore } from "react-icons/md";
import SidebarContext from "../SideBarProvider";
import "./SidebarItemCollapse.css";

const SidebarItemCollapse = ({ item, level, indexKey }) => {
  const { active, tempActive, setTempActive } = useContext(SidebarContext);

  const handleClick = () => {
    setTempActive(indexKey);
  };
  return (
    <Accordion.Item eventKey={indexKey}>
      <Accordion.Button
        style={{ paddingLeft: level * 16 + "px" }}
        className={`indexKey ${
          active?.startsWith(indexKey) ? "activelink" : ""
        } ${tempActive?.startsWith(indexKey) ? "tempactivelink" : ""}`}
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
