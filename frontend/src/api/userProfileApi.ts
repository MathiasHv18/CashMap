import axiosInstance from "./axiosInstance";

export const getUserProfile = async () => {
  const response = await axiosInstance.get("/user/profile");
  return response.data;
};
