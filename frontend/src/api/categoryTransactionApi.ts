import axiosInstance from "./axiosInstance";
import { CategoryTransactionRequest } from "../interfaces/CategoryTransactionRequestInterface";

export const getCategoriesByUser = async (userId: number) => {
  const response = await axiosInstance.get(`/categoryTransaction/${userId}`);
  return response.data;
};

export const createCategoryTransaction = async (
  userId: number,
  categoryTransactionRequest: CategoryTransactionRequest
) => {
  const response = await axiosInstance.post(
    `/categoryTransaction/${userId}`,
    categoryTransactionRequest
  );
  return response.data;
};
