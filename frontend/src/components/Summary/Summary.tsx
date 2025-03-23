import { CardBalanceInfo } from "@/components/layouts/CardBalanceInfo/CardBalanceInfo";
import SummaryChart from "@/components/layouts/Charts/SummaryChart";

// Api hooks
// Interfaces

export default function Summary() {
  return (
    <div className="w-full">
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
