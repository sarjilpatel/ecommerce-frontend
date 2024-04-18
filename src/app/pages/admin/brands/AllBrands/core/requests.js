import api from "../../../../../api/api";

const getAllBrands = async () => {
  return await api.get("/brands", { withCredentials: true });
};

export { getAllBrands };
