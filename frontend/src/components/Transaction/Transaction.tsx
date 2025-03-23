import { useState } from "react";
//Components
import Summary from "@/components/Summary/Summary";
//Api hooks
import useTransactions from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import useCategoryTransaction from "../../hooks/useCategoryTransaction";
//Interfaces
import { TransactionRequest } from "../../interfaces/TransactionInterface";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionInterface";

function Transaction() {
  const [selectedTab, setSelectedTab] = useState("Summary");

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

  return <div className="w-full"></div>;
}

export default Transaction;
