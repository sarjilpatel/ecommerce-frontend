import api from "../../../../../../api/api";

const addGroup = async (data) => {
  return await api.post("/groups", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export { addGroup };
