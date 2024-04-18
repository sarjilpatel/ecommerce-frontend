import api from "../../../../../../api/api";

const getAllGroups = async () => {
  return await api.get("/groups", { withCredentials: true });
};

export { getAllGroups };
