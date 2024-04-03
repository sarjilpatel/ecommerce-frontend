import { createContext, useState } from "react";

const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [active, setActive] = useState("");
  const [tempActive, setTempActive] = useState("");

  return (
    <SidebarContext.Provider value={{ active, setActive }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
