import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: 'Week 1', spend: 3200, roas: 6.2 },
  { date: 'Week 2', spend: 4100, roas: 5.8 },
  { date: 'Week 3', spend: 3800, roas: 6.9 },
  { date: 'Week 4', spend: 5200, roas: 7.1 },
];

export function SpendROASChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-gray-900 mb-1">Ad Spend vs ROAS</h3>
        <p className="text-gray-500">Weekly performance breakdown</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis yAxisId="left" stroke="#f59e0b" />
          <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="spend" fill="#f59e0b" radius={[8, 8, 0, 0]} name="Ad Spend ($)" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="roas"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 5 }}
            name="ROAS"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
