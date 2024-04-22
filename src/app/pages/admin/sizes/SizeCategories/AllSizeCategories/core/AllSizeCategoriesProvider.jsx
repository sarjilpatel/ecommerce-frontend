import React, { createContext, useEffect, useState } from "react";
import { getAllSizeCategories } from "./requests";
import Loader from "../../../../../../components/Loader";

const AllSizeCategoriesContext = createContext({});

export const AllSizeCategoriesProvider = ({ children }) => {
  const [allSizeCategories, setAllSizeCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    getAllSizeCategories()
      .then((res) => {
        setAllSizeCategories(res.data.sizeCategories);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AllSizeCategoriesContext.Provider
      value={{ allSizeCategories, setAllSizeCategories }}
    >
      {isLoading && <Loader />}
      {children}
    </AllSizeCategoriesContext.Provider>
  );
};

export default AllSizeCategoriesContext;
