import { createContext, useContext, useEffect, useState } from "react";
import { getAllCategories } from "./requests";
import Loader from "../../../../../../components/Loader";
import { getAllGroups } from "../../../groups/AllGroup/core/requests";
import { getAllSizeCategories } from "../../../../sizes/SizeCategories/AllSizeCategories/core/requests";

const AllCategoriesContext = createContext({});

export const AllCategoriesProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [allSizeCategories, setAllSizeCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    getAllCategories()
      .then((res) => {
        setAllCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    getAllGroups()
      .then((res) => {
        setAllGroups(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllSizeCategories()
      .then((res) => {
        setAllSizeCategories(res.data.sizeCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AllCategoriesContext.Provider
      value={{ allCategories, setAllCategories, allGroups, allSizeCategories }}
    >
      {isLoading && <Loader />}
      {children}
    </AllCategoriesContext.Provider>
  );
};

export default AllCategoriesContext;
