import { createContext, useContext, useEffect, useState } from "react";
// import { getAllGroups } from "./requests";
import Loader from "../../../../../../components/Loader";
import { getAllSizeCategories } from "../../../../sizes/SizeCategories/AllSizeCategories/core/requests";
import { getAllGroups } from "../../../groups/AllGroup/core/requests";

const AddCategoryContext = createContext({});

export const AddCategoryProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);
  const [allSizeCategories, setAllSizeCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllSizeCategories()
      .then((res) => {
        setAllSizeCategories(res.data.sizeCategories);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllGroups()
      .then((res) => {
        setAllGroups(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsLoading(false);
  }, []);

  return (
    <AddCategoryContext.Provider
      value={{ allGroups, allSizeCategories, isLoading, setIsLoading }}
    >
      {isLoading && <Loader />}
      {children}
    </AddCategoryContext.Provider>
  );
};

export default AddCategoryContext;
