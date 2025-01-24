import axiosInstance from "./axiosInstance";

export const getAllTransactions = async () => {
  const response = await axiosInstance.get("/transaction");
  return response.data;
};
