import { createContext, useContext, useEffect, useState } from "react";
import { getAllGroups } from "./requests";
import Loader from "../../../../../../components/Loader";

const AllGroupsContext = createContext({});

export const AllGroupsProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    getAllGroups()
      .then((res) => {
        setAllGroups(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AllGroupsContext.Provider value={{ allGroups, setAllGroups }}>
      {isLoading && <Loader />}
      {children}
    </AllGroupsContext.Provider>
  );
};

export default AllGroupsContext;
