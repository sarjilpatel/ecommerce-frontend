import api from "../../../../../../api/api";

const getAllGroups = async () => {
  return await api.get("/categorization/groups", { withCredentials: true });
};

export { getAllGroups };
