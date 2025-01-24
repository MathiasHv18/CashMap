import { useState } from "react";
import { Transaction } from "../interfaces/transactionInterface";
import { getAllTransactions } from "../api/transactionApi";

const useTransaction = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<Transaction[] | null>(null);

  const getTransactions = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await getAllTransactions();
      setResponse(res);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { getTransactions, loading, error, success, response };
};

export default useTransaction;