import { useState } from "react";
import styles from "./Home.module.css";
//Components
import { CardBalanceInfo } from "@/components/layouts/CardBalanceInfo/CardBalanceInfo";
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
    <div className="w-full">
      <nav>
        <h1 className="text-3xl font-bold tracking-wide">
          {user?.name}'s Expense Analysis
        </h1>
      </nav>
      <div className="flex">
        <div className="flex justify-between gap-4 w-full">
          <CardBalanceInfo
            title="Total balance"
            balance={12000}
            footer="desde el mes pasado"
            colorText="text-red-500"
          />
          <CardBalanceInfo
            title="Income"
            balance={12000}
            footer="desde el mes pasado"
            colorText="text-green-500"
          />
          <CardBalanceInfo
            title="Expenses"
            balance={12000}
            footer="desde el mes pasado"
            colorText="text-red-500"
          />
          <CardBalanceInfo
            title="Savings"
            balance={12000}
            footer="desde el mes pasado"
            colorText="text-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
