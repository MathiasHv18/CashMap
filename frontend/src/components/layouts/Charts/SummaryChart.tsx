import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TransactionData {
  month: string;
  income: number;
  expenses: number;
}

const data: TransactionData[] = [
  { month: "Jan", income: 5000, expenses: 3000 },
  { month: "Feb", income: 7000, expenses: 4500 },
  { month: "Mar", income: 6000, expenses: 4000 },
  { month: "Apr", income: 8000, expenses: 5000 },
  { month: "May", income: 6500, expenses: 4200 },
  { month: "Jun", income: 7200, expenses: 4600 },
];

export default function SummaryChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="income" fill="#4caf50" name="Income" />
        <Bar dataKey="expenses" fill="#f44336" name="Expenses" />
      </BarChart>
    </ResponsiveContainer>
  );
}
