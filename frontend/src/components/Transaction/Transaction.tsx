import { useState } from "react";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { Toaster } from "sonner";

import useTransactions from "../../hooks/useTransaction";
import useUserProfile from "../../hooks/useUserProfile";
import useCategoryTransaction from "../../hooks/useCategoryTransaction";
import { TransactionRequest } from "../../interfaces/TransactionInterface";
import { CategoryTransactionResponse } from "../../interfaces/CategoryTransactionInterface";

function Transaction() {
  const { state, addTransaction } = useTransactions();
  const { user } = useUserProfile();
  const { categoriesTransaction } = useCategoryTransaction();

  const [transactionType, setTransactionType] = useState("1");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState<number | undefined>(0);
  const [date, setDate] = useState<Date | undefined>();
  const [idCategoryTransaction, setIdCategoryTransaction] = useState(0);

  const handleAddTransaction = async () => {
    if (!concept || !amount || !date || !idCategoryTransaction) {
      toast.error("All fields are required.");
      return;
    }

    const dataTransaction: TransactionRequest = {
      amount,
      concept,
      date,
      userId: user?.id || 0,
      idCategoryTransaction,
      idTypeTran: parseInt(transactionType),
    };

    const result = await addTransaction(dataTransaction);

    if (result.success) {
      toast.success("Transaction added successfully", {
        description: "Your transaction has been recorded.",
      });

      // Reseteamos los campos después de agregar exitosamente
      setConcept("");
      setAmount(undefined);
      setDate(undefined);
      setIdCategoryTransaction(0);
    } else {
      toast.error("Error", {
        description:
          result.message || "An error occurred while adding the transaction",
      });
    }
  };

  return (
    <>
      <Toaster position="top-right" expand={false} richColors closeButton />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add Transaction</CardTitle>
          <p className="text-gray-500 text-sm">
            Register a new expense or income.
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label className="block mb-2 text-sm font-medium">
              Transaction Type
            </Label>
            <RadioGroup
              value={transactionType}
              onValueChange={(value) => setTransactionType(value)}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1" id="expense" />
                <Label htmlFor="expense">Expense</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="2" id="income" />
                <Label htmlFor="income">Income</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Concept</Label>
              <Input
                placeholder="E.g., Grocery shopping"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
            </div>
            <div>
              <Label>Amount</Label>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount ?? ""}
                onChange={(e) =>
                  setAmount(
                    e.target.value ? parseFloat(e.target.value) : undefined
                  )
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <Label>Category</Label>
              <Select
                value={
                  idCategoryTransaction ? idCategoryTransaction.toString() : ""
                }
                onValueChange={(value) =>
                  setIdCategoryTransaction(parseInt(value))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categoriesTransaction.map(
                    (category: CategoryTransactionResponse) => (
                      <SelectItem
                        key={category.idCategoryTransaction}
                        value={category.idCategoryTransaction.toString()}
                      >
                        {category.categoryTransaction}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant="outline"
                    className="w-full flex justify-between items-center"
                    type="button"
                  >
                    {date ? format(date, "MMMM dd, yyyy") : "Select a date"}
                    <CalendarIcon className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent align="end" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => setDate(selectedDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Button
            className="w-full mt-6 bg-black hover:bg-gray-800"
            onClick={handleAddTransaction}
            disabled={state.isAdding}
          >
            {state.isAdding ? "Saving..." : "Save Transaction"}
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default Transaction;
