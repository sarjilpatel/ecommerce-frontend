import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import sidebarData from "./sidebarData";
import SidebarItem from "../SidebarItem/SidebarItem";
import SidebarItemCollapse from "../SidebarItemCollapse/SidebarItemCollapse";
import "./UserSidebar.css";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import useClickOutside from "../../../hooks/useClickOutSide";

const UserSidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarRef = useClickOutside(() => {
    setOpen(false);
  });
  return (
    <div className="sidebarwrapper">
      <IoIosMenu
        className="sidebarMenubtn"
        onClick={() => setOpen((open) => !open)}
      />
      <div className={`usersidebar ${open ? "active" : ""}`} ref={sidebarRef}>
        <IoMdClose
          className="sidebarclosebtn"
          onClick={() => setOpen((open) => !open)}
        />
        <Accordion flush>
          {sidebarData.map((item, index) =>
            item.childrens ? (
              <SidebarItemCollapse
                item={item}
                level={1}
                key={index}
                indexKey={index + ""}
              />
            ) : (
              <SidebarItem
                item={item}
                key={index}
                isChild={false}
                level={1}
                indexKey={index + ""}
              />
            )
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default UserSidebar;
