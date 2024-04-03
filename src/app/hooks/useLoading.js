import { useContext } from "react";
import LoadingContext from "../../core/LoadingProvider";

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
