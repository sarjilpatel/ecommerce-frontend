import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import sidebarData from "./adminSidebarData";
import SidebarItem from "../SidebarItem/SidebarItem";
import SidebarItemCollapse from "../SidebarItemCollapse/SidebarItemCollapse";
import { IoMdClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import useClickOutside from "../../../hooks/useClickOutSide";
import { SidebarProvider } from "../SideBarProvider";
import "../sidebar.css";

const AdminSidebar = () => {
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
      <div className={`sidebar ${open ? "active" : ""}`} ref={sidebarRef}>
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

const AdminSidebarWrapper = () => {
  return (
    <SidebarProvider>
      <AdminSidebar />
    </SidebarProvider>
  );
};

export default AdminSidebarWrapper;
