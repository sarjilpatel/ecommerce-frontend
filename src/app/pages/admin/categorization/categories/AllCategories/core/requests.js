import api from "../../../../../../api/api";

const getAllCategories = async () => {
  return await api.get("/categorization/categories", { withCredentials: true });
};

export { getAllCategories };
