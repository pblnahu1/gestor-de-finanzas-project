import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Earnings", value: 4523.98 },
  { name: "Goals", value: 5000 - 4523.98 },
];

const COLORS = ["#4F46E5", "#E5E7EB"];

const Earnings = () => (
  <div className="col-span-2 row-span-2 rounded-3xl bg-[#F1F5FB] px-4 py-4 ">
    <div className="pt-5">
      <span className="text-xl font-bold">Earnings</span>
    </div>

    <div className="relative w-full max-w-sm">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center bottom-9">
        <div>
          <p className="text-lg font-semibold">$4,523.98</p>
          <p className="text-sm text-gray-500">Earnings</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm font-medium">Goals</p>
        <p className="text-xs text-gray-500">Achieve your $5,000 target</p>
      </div>
    </div>
  </div>
);

export default Earnings;
