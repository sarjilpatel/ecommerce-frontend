import api from "../app/api/api";

const getUserDetails = async () => {
  return await api.get("/user/me");
};

export { getUserDetails };
