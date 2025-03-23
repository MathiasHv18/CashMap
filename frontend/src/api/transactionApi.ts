import axiosInstance from "./axiosInstance";
import {
  TransactionResponse,
  TransactionRequest,
} from "../interfaces/TransactionInterface";

export const getAllTransactions = async (): Promise<TransactionResponse[]> => {
  const { data } = await axiosInstance.get("/transaction");
  return data;
};

export const createTransaction = async (
  transaction: TransactionRequest
): Promise<TransactionResponse> => {
  const { data } = await axiosInstance.post("/transaction", transaction);
  return data;
};
