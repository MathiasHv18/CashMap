import { useState } from "react";
import { CategoryTransactionRequest } from "../interfaces/CategoryTransactionRequestInterface";
import { CategoryTransactionResponse } from "../interfaces/CategoryTransactionResponseInterface";

import {
  createCategoryTransaction,
  getCategoriesByUser,
} from "../api/categoryTransactionApi";

export const useCategoryTransaction = () => {
  const [loadingGC, setLoading] = useState(false);
  const [errorGC, setError] = useState<string | null>(null);
  const [successGC, setSuccess] = useState(false);
  const [responseGC, setResponse] = useState<
    CategoryTransactionResponse[] | null
  >(null);

  const [loadingSC, setLoadingTR] = useState(false);
  const [errorSC, setErrorTR] = useState<string | null>(null);
  const [successSC, setSuccessTR] = useState(false);
  const [responseSC, setResponseTR] =
    useState<CategoryTransactionResponse | null>(null);

  const fetchCategories = async (userId: number) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await getCategoriesByUser(userId);
      setResponse(res);
      setSuccess(true);
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async (
    userId: number,
    category: CategoryTransactionRequest
  ) => {
    setLoadingTR(true);
    setErrorTR(null);
    setSuccessTR(false);
    try {
      const res = await createCategoryTransaction(userId, category);
      setResponseTR(res);
      setSuccessTR(true);
    } catch (err: any) {
      setErrorTR(err.response?.data?.message || "An error occurred");
    } finally {
      setLoadingTR(false);
    }
  };

    return {
        fetchCategories,
        loadingGC,
        errorGC,
        successGC,
        responseGC,
        addCategory,
        loadingSC,
        errorSC,
        successSC,
        responseSC,
    };
};


export default useCategoryTransaction;