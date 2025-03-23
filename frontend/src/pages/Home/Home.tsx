import { useState } from "react";
import styles from "./Home.module.css";
//Components
import { CardBalanceInfo } from "@/components/layouts/CardBalanceInfo/CardBalanceInfo";
import SummaryChart from "@/components/layouts/Charts/SummaryChart";
//Api hooks
import useTransactions from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import useCategoryTransaction from "../../hooks/useCategoryTransaction";
//Interfaces
import { TransactionRequest } from "../../interfaces/TransactionInterface";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionInterface";

function Home() {
  const data = [
    { name: "January", income: 3000, expenses: 2000 },
    { name: "February", income: 2000, expenses: 3000 },
    { name: "March", income: 4000, expenses: 1000 },
    { name: "April", income: 5000, expenses: 4000 },
    { name: "May", income: 6000, expenses: 5000 },
    { name: "June", income: 7000, expenses: 6000 },
    { name: "July", income: 8000, expenses: 7000 },
  ];

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
      <div className="mt-8 p-4 bg-white shadow-md rounded-lg w-1/2">
        <h2 className="text-xl font-semibold mb-4">
          Income & Expenses by Month
        </h2>
        <SummaryChart />
      </div>
    </div>
  );
}

export default Home;
