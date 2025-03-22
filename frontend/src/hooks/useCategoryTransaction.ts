import { useState, useEffect } from "react";
import {
  CategoryTransactionRequest,
  CategoryTransactionResponse,
} from "../interfaces/CategoryTransactionInterface";
import {
  getCategoriesByUser,
  createCategoryTransaction,
} from "../api/categoryTransactionApi";

const useCategoryTransaction = () => {
  const [categoriesTransaction, setCategoriesTransaction] = useState<
    CategoryTransactionResponse[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategoriesTransaction();
  }, []);

  const fetchCategoriesTransaction = async () => {
    setLoading(true);
    try {
      const data = await getCategoriesByUser();
      setCategoriesTransaction(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error fetching user categories");
    } finally {
      setLoading(false);
    }
  };

  const addCategoryTransaction = async (
    categoryTransaction: CategoryTransactionRequest
  ) => {
    setLoading(true);
    try {
      const data = await createCategoryTransaction(categoryTransaction);
      setCategoriesTransaction((prev) => [...prev, data]);
    } catch (err: any) {
      setError(err.response?.data?.message || "Error fetching user categories");
    } finally {
      setLoading(false);
    }
  };

  return {
    categoriesTransaction,
    state: { loading, error },
    fetchCategoriesTransaction,
    addCategoryTransaction,
  };
};

export default useCategoryTransaction;
