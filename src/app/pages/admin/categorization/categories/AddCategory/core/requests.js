import api from "../../../../../../api/api";

const addCategory = async (data) => {
  return await api.post("/categorization/categories", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export { addCategory };
