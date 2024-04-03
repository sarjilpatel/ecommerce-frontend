import api from "../app/api/api";

const getUserDetails = async () => {
  return await api.get("/user/me", { withCredentials: true });
};

export { getUserDetails };
