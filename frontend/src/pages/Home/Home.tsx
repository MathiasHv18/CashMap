import React, { useState, useEffect } from "react";
import useTransaction from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import styles from "./Home.module.css";
import { TransactionRequest } from "../../interfaces/TransactionRequestInterface";
import { TransactionResponse } from "../../interfaces/TransactionResponseInterface";
import { useCategoryTransaction } from "../../hooks/useCategoryTransaction";
import { CategoryTransactionRequest } from "../../interfaces/CategoryTransactionRequestInterface";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionResponseInterface";

function Home() {
  const {
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
  } = useTransaction();
  const { getUser, loadingU, errorU, successU, responseU } = useUserProfile();
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const { fetchCategories, loadingGC, errorGC, successGC, responseGC } =
    useCategoryTransaction();

  useEffect(() => {
    getUser();
    fetchTransactions();
  }, []);

  useEffect(() => {
    fetchCategories(responseU?.id || 0);
  }, [responseU]);

  useEffect(() => {
    if (successGC && responseGC) {
      console.log(responseGC);
    }
  }, [successGC, responseGC]);

  useEffect(() => {
    if (successT && responseT) {
      setTransactions(responseT);
    }
  }, [successT, responseT]);

  useEffect(() => {
    if (successU && responseU) {
      console.log(responseU);
    }
  }, [successU, responseU]);

  useEffect(() => {
    if (successTR && responseTR) {
      console.log(responseTR, "11902191354");
    }
  }, [successTR, responseTR]);

  const handleAddTransaction = async () => {
    if (!concept || !amount || !date || !categoryDescription) {
      alert("All fields are required.");
      return;
    }

    const dataTransaction: TransactionRequest = {
      amount,
      concept,
      date,
      userId: responseU?.id || 0,
      categoryTransaction: categoryDescription,
      idTypeTran: 1,
    };

    console.log("Data Transaction:", dataTransaction);

    await addTransaction(dataTransaction);
    fetchTransactions();
  };

  return (
    <div className={styles.outerBox}>
      <h1 className={styles.tittle}>{responseU?.name}'s expense analysis</h1>
      <div className={styles.inputBox}>
        <h2 className={styles.subtittle}>Insert your income </h2>
        <h5 className={styles.h5}>Add your expenses for analysis</h5>
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
        <button className={styles.button} onClick={handleAddTransaction}>
          Add
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
            {transactions.map((transaction) => (
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
      <div className={styles.statsBox}>
        <h2 className={styles.subtittle}>Stats</h2>
      </div>
    </div>
  );
}

export default Home;
