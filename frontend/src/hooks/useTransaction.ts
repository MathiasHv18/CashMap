import { useState } from "react";
import { TransactionResponse } from "../interfaces/TransactionResponseInterface";
import { TransactionRequest } from "../interfaces/TransactionRequestInterface";
import {
  getAllTransactions,
  createTransaction as apiCreateTransaction,
} from "../api/transactionApi";

const useTransaction = () => {
  const [loadingT, setLoading] = useState(false);
  const [errorT, setError] = useState<string | null>(null);
  const [successT, setSuccess] = useState(false);
  const [responseT, setResponse] = useState<TransactionResponse[] | null>(null);

  const [loadingTR, setLoadingTR] = useState(false);
  const [errorTR, setErrorTR] = useState<string | null>(null);
  const [successTR, setSuccessTR] = useState(false);
  const [responseTR, setResponseTR] = useState<TransactionResponse | null>(null);

  const fetchTransactions = async () => {
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

  const addTransaction = async (transaction: TransactionRequest) => {
    setLoadingTR(true);
    setErrorTR(null);
    setSuccessTR(false);
    try {
      const res = await apiCreateTransaction(transaction);
      setResponseTR(res);
      setSuccessTR(true);
    } catch (err: any) {
      setErrorTR(err.response?.data?.message || "An error occurred");
    } finally {
      setLoadingTR(false);
    }
  };

  return {
    fetchTransactions,
    loadingT,
    errorT,
    successT,
    responseT,
    addTransaction,
    loadingTR,
    errorTR,
    successTR,
    responseTR,
  };
};

export default useTransaction;
