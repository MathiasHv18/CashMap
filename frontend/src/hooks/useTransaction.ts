import { useState } from "react";
import { Transaction } from "../interfaces/TransactionInterface";
import { getAllTransactions } from "../api/transactionApi";

const useTransaction = () => {
  const [loadingT, setLoading] = useState(false);
  const [errorT, setError] = useState<string | null>(null);
  const [successT, setSuccess] = useState(false);
  const [responseT, setResponse] = useState<Transaction[] | null>(null);

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

  return { getTransactions, loadingT, errorT, successT, responseT };
};

export default useTransaction;
