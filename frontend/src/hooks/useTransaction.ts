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
    try {
      const addedTransaction = await createTransaction(newTransaction);
      setTransactions((prev) => [...prev, addedTransaction]);
    } catch (err: any) {
      console.error(
        "Error adding transaction:",
        err.response?.data?.message || err
      );
    }
  };

  return {
    transactions,
    state: { loading, error },
    fetchTransactions,
    addTransaction,
  };
};

export default useTransactions;
