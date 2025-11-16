import { TrendingUp, TrendingDown } from 'lucide-react';

const products = [
  { name: 'Premium Wireless Headphones', revenue: '$24,580', orders: 342, growth: '+18.2%', trend: 'up' },
  { name: 'Smart Watch Pro', revenue: '$18,920', orders: 256, growth: '+12.5%', trend: 'up' },
  { name: 'Bluetooth Speaker', revenue: '$15,340', orders: 412, growth: '-3.2%', trend: 'down' },
  { name: 'USB-C Cable 3-Pack', revenue: '$12,180', orders: 628, growth: '+8.9%', trend: 'up' },
  { name: 'Phone Case Bundle', revenue: '$9,450', orders: 315, growth: '+5.4%', trend: 'up' },
];

export function TopProductsTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-gray-900 mb-1">Top Products</h3>
        <p className="text-gray-500">Best performing products by revenue</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-gray-600">Product</th>
              <th className="text-right py-3 text-gray-600">Revenue</th>
              <th className="text-right py-3 text-gray-600">Orders</th>
              <th className="text-right py-3 text-gray-600">Growth</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="py-4 text-gray-900">{product.name}</td>
                <td className="py-4 text-right text-gray-900">{product.revenue}</td>
                <td className="py-4 text-right text-gray-600">{product.orders}</td>
                <td className="py-4 text-right">
                  <span className={`inline-flex items-center gap-1 ${product.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {product.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {product.growth}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
