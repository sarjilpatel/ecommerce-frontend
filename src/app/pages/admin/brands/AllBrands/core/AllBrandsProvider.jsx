import { createContext, useContext, useEffect, useState } from "react";
import { getAllBrands } from "./requests";
import LoadingContext from "../../../../../../core/LoadingProvider";
import Loader from "../../../../../components/Loader";

const AllBrandContext = createContext({});

export const AllBrandsProvider = ({ children }) => {
  const [allBrands, setAllBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    getAllBrands()
      .then((res) => {
        setAllBrands(res.data.brands);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AllBrandContext.Provider value={{ allBrands, setAllBrands }}>
      {isLoading && <Loader />}
      {children}
    </AllBrandContext.Provider>
  );
};

export default AllBrandContext;
