import api from "../../../../../../api/api";

const getAllSizeCategories = async () => {
  return await api.get("/groups", { withCredentials: true });
};

export { getAllSizeCategories };
