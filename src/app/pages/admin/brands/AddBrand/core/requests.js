import api from "../../../../../api/api";

const addBrand = async (data) => {
  return await api.post("/brand/add", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export { addBrand };
