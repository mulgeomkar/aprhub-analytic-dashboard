import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: 'Jan 1', revenue: 3200, orders: 48 },
  { date: 'Jan 5', revenue: 4100, orders: 62 },
  { date: 'Jan 10', revenue: 3800, orders: 54 },
  { date: 'Jan 15', revenue: 5200, orders: 78 },
  { date: 'Jan 20', revenue: 4800, orders: 71 },
  { date: 'Jan 25', revenue: 6100, orders: 89 },
  { date: 'Jan 30', revenue: 5500, orders: 82 },
];

export function SalesChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-gray-900 mb-1">Sales Over Time</h3>
        <p className="text-gray-500">Revenue and order trends</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis yAxisId="left" stroke="#6366f1" />
          <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ fill: '#6366f1', r: 4 }}
            name="Revenue ($)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="orders"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            name="Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
