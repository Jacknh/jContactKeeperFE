import axios from "../utils/axios";

export const register = async (payload) =>
  await axios.post("/auth/register", { ...payload });

export const login = async (payload) =>
  await axios.post("/auth/login", { ...payload });

export const getMe = async () =>
  await axios.get("/auth/getMe", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
