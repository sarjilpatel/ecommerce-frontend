import api from "../../../../../../api/api";

const addGroup = async (data) => {
  return await api.post("/categorization/groups", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export { addGroup };
