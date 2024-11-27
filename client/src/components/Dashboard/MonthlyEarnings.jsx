import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 5000 },
  { month: "Feb", income: 7000 },
  { month: "Mar", income: 8000 },
  { month: "Apr", income: 7500 },
  { month: "May", income: 9000 },
  { month: "Jun", income: 10000 },
  { month: "Jul", income: 9500 },
  { month: "Aug", income: 11000 },
  { month: "Sep", income: 10500 },
  { month: "Oct", income: 12000 },
  { month: "Nov", income: 11500 },
  { month: "Dec", income: 13000 },
];

const MonthlyEarnings = () => (
  <div className="col-span-2 row-span-1 rounded-3xl bg-[#F1F5FB] px-4 py-4 flex flex-col place-content-center ">
    <div className="py-5">
      <span className="text-xl font-bold">Monthly Earnings</span>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="income"
          stroke="#4F46E5"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyEarnings;
