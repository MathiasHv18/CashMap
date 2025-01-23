import { registerUserRequest } from "../interfaces/registerUser";
import { loginUserRequest } from "../interfaces/loginUser";
import axiosInstance from "./axiosInstance";

export const registerUser = async (user: registerUserRequest) => {
  const response = await axiosInstance.post("/auth/register", user);
  return response.data;
};

export const loginUser = async (user : loginUserRequest) => {
  const response = await axiosInstance.post("/auth/login", user);
  return response.data;
}