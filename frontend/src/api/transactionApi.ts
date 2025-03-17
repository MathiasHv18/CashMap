import axiosInstance from "./axiosInstance";
import { TransactionRequest } from "../interfaces/TransactionInterface";

export const getAllTransactions = async () => {
  const response = await axiosInstance.get("/transaction");
  return response.data;
};

export const createTransaction = async (transaction: TransactionRequest) => {
  const response = await axiosInstance.post("/transaction", transaction);
  return response.data;
};
