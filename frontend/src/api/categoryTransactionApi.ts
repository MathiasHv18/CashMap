import axiosInstance from "./axiosInstance";
import { CategoryTransactionRequest } from "../interfaces/CategoryTransactionInterface";

export const getCategoriesByUser = async () => {
  const response = await axiosInstance.get(`/categoryTransaction`);
  return response.data;
};

export const createCategoryTransaction = async (
  categoryTransactionRequest: CategoryTransactionRequest
) => {
  const response = await axiosInstance.post(
    `/categoryTransaction`,
    categoryTransactionRequest
  );
  return response.data;
};
