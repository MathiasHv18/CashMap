import { useState } from "react";
import styles from "./Home.module.css";
//Api hooks
import useTransactions from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import useCategoryTransaction from "../../hooks/useCategoryTransaction";
//Interfaces
import { TransactionRequest } from "../../interfaces/TransactionInterface";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionInterface";

function Home() {
  const {
    transactions, // Lista de transacciones precargadas por useEffect en hook
    state: transactionsState, // Estados (loading, error) de las transacciones
    addTransaction, //Llamar para agregar una transaccion
  } = useTransactions();

  const { user } = useUserProfile();
  const { categoriesTransaction } = useCategoryTransaction();

  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState("");
  const [idCategoryTransaction, setIdCategoryTransaction] = useState(0);

  const handleAddTransaction = async () => {
    if (!concept || !amount || !date || !idCategoryTransaction) {
      alert("All fields are required.");
      return;
    }

    const dataTransaction: TransactionRequest = {
      amount,
      concept,
      date,
      userId: user?.id || 0,
      idCategoryTransaction,
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
          value={idCategoryTransaction}
          onChange={(e) => setIdCategoryTransaction(parseInt(e.target.value))}
        >
          <option value="">Select a category</option>
          {categoriesTransaction?.map(
            (category: CategoryTransactionResponse) => (
              <option
                key={category.idCategoryTransaction}
                value={category.idCategoryTransaction}
              >
                {category.categoryTransaction}
              </option>
            )
          )}
        </select>
        <br />
        <button
          className={styles.button}
          onClick={handleAddTransaction}
          disabled={transactionsState.loading}
        >
          {transactionsState.loading ? "Adding..." : "Add"}
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
                <td>{transaction.categoryDescription.categoryTransaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
