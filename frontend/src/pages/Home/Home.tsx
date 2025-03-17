import { useState, useEffect } from "react";
import useTransaction from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import styles from "./Home.module.css";
import { TransactionRequest } from "../../interfaces/TransactionInterface";
import { useCategoryTransaction } from "../../hooks/useCategoryTransaction";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionInterface";

function Home() {
  const {
    fetchTransactions,
    transactions,
    loading,
    error,
    success,
    addTransaction,
    adding,
    addError,
    addSuccess,
  } = useTransaction();
  const {
    getUser,
    user,
    loading: loadingU,
    error: errorU,
    success: successU,
  } = useUserProfile();
  const { fetchCategories, responseGC, successGC } = useCategoryTransaction();

  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  useEffect(() => {
    getUser();
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (user) {
      fetchCategories(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (addSuccess) {
      fetchTransactions();
    }
  }, [addSuccess]);

  const handleAddTransaction = async () => {
    if (!concept || !amount || !date || !categoryDescription) {
      alert("All fields are required.");
      return;
    }

    const dataTransaction: TransactionRequest = {
      amount,
      concept,
      date,
      userId: user?.id || 0,
      categoryTransaction: categoryDescription,
      idTypeTran: 1,
    };

    await addTransaction(dataTransaction);
  };

  return (
    <div className={styles.outerBox}>
      <h1 className={styles.tittle}>{user?.name}'s Expense Analysis</h1>
      <div className={styles.inputBox}>
        <h2 className={styles.subtittle}>Insert your income</h2>
        <h3 className={styles.h3}>Concept</h3>
        <input
          className={styles.input}
          type="text"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          required
        />
        <h3 className={styles.h3}>Amount</h3>
        <input
          className={styles.input}
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <h3 className={styles.h3}>Date</h3>
        <input
          className={styles.input}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <h3 className={styles.h3}>Category</h3>
        <select
          className={styles.input}
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        >
          <option value="">Select a category</option>
          {responseGC?.map((category: CategoryTransactionResponse) => (
            <option
              key={category.idCategoryTransaction}
              value={category.categoryTransaction}
            >
              {category.categoryTransaction}
            </option>
          ))}
        </select>
        <br />
        <button
          className={styles.button}
          onClick={handleAddTransaction}
          disabled={adding}
        >
          {adding ? "Adding..." : "Add"}
        </button>
      </div>

      <div className={styles.historyBox}>
        <h2 className={styles.subtittle}>History</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.idTransaction}>
                <td>{transaction.concept}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.categoryDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
