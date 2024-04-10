import React, { useEffect } from "react";
import "./PageTitle.css";

const PageTitle = ({ children, breadcums, content, display }) => {
  useEffect(() => {
    document.title = children ? `${children} | ESHOP` : "ESHOP";
  }, [children]);

  return display ? (
    <div className="pagetitlecomponent">
      <p>{breadcums ? breadcums : ""}</p>
      {content ? content : ""}
    </div>
  ) : (
    ""
  );
};

export default PageTitle;
