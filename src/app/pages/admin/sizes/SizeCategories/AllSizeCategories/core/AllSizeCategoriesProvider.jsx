import React, { useState } from "react";
import { getAllSizeCategories } from "./requests";

const AllSizeCategoriesContext = createContext({});

const AllSizeCategoriesProvider = () => {
  const [allSizeCategories, setAllSizeCategories] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  const {isLoading,setIsLoading} = 

  useEffect(() => {
    // setIsLoading(true);
    getAllSizeCategories()
      .then((res) => {
        setAllSizeCategories(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AllSizeCategoriesContext.Provider>
      {isLoading && <Loader />}
      {children}
    </AllSizeCategoriesContext.Provider>
  );
};

export default AllSizeCategoriesProvider;
