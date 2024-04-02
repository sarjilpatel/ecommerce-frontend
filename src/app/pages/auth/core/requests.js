import api from "../../../api/api";

const signup = async (data) => {
  return await api.post("/auth/signup", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });
};

const login = async (data) => {
  return await api.post("/auth/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
export { signup, login };
