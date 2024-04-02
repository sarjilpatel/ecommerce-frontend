import React, { useEffect } from "react";

const PageTitle = ({ children, breadcums }) => {
  useEffect(() => {
    document.title = children ? `${children} | ESHOP` : "ESHOP";
  }, [children]);

  return <div>{breadcums ? breadcums : ""}</div>;
};

export default PageTitle;
