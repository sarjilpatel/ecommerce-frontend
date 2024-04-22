import api from "../../../../../../api/api";

const getAllSizeCategories = async () => {
  return await api.get("/sizes/sizecategories", { withCredentials: true });
};

export { getAllSizeCategories };
