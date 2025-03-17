import useApi from "./useApi";
import { getAllTransactions, createTransaction } from "../api/transactionApi";
import {
  TransactionResponse,
  TransactionRequest,
} from "../interfaces/TransactionInterface";

const useTransaction = () => {
  const {
    data: transactions,
    loading,
    error,
    success,
    fetchData,
  } = useApi<TransactionResponse[]>();
  const {
    data: addedTransaction,
    loading: adding,
    error: addError,
    success: addSuccess,
    fetchData: addTransaction,
  } = useApi<TransactionRequest>();

  return {
    transactions,
    loading,
    error,
    success,
    fetchTransactions: () => fetchData(getAllTransactions),
    addTransaction: (data: TransactionRequest) =>
      addTransaction(() => createTransaction(data)),
    adding,
    addError,
    addSuccess,
  };
};

export default useTransaction;
