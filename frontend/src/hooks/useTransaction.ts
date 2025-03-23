import { useEffect, useState } from "react";
import { getAllTransactions, createTransaction } from "../api/transactionApi";
import {
  TransactionResponse,
  TransactionRequest,
} from "../interfaces/TransactionInterface";

const useTransactions = () => {
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const data = await getAllTransactions();
      setTransactions(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error fetching transactions");
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (newTransaction: TransactionRequest) => {
    setIsAdding(true);
    try {
      const addedTransaction = await createTransaction(newTransaction);
      setTransactions((prev) => [...prev, addedTransaction]);
      return { success: true };
    } catch (err: any) {
      console.error(
        "Error adding transaction:",
        err.response?.data?.message || err
      );
      return {
        success: false,
        message: err.response?.data?.message || "Failed to add transaction",
      };
    } finally {
      setIsAdding(false);
    }
  };

  return {
    transactions,
    state: { loading, error, isAdding },
    fetchTransactions,
    addTransaction,
  };
};

export default useTransactions;
