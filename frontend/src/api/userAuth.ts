import { registerUserRequest } from "../interfaces/registerUserRequest";
import axiosInstance from "./axiosInstance";

export const registerUser = async (user: registerUserRequest) => {
  const response = await axiosInstance.post("/auth/register", user);
  return response.data;
};
