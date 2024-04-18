import api from "../../../../../../api/api";

const addSizeCategory = async (data) => {
  return await api.post("/sizecategories", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export { addSizeCategory };
