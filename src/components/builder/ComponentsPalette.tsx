import { BarChart3, Table2, Type, Filter, TrendingUp } from 'lucide-react';

interface ComponentsPaletteProps {
  onAddComponent: (type: 'metric' | 'chart' | 'table' | 'text' | 'filter', title: string) => void;
}

const componentTypes = [
  {
    category: 'Metrics',
    items: [
      { type: 'metric' as const, title: 'Revenue Card', icon: TrendingUp, description: 'Display key metric' },
      { type: 'metric' as const, title: 'Orders Card', icon: TrendingUp, description: 'Display key metric' },
      { type: 'metric' as const, title: 'ROAS Card', icon: TrendingUp, description: 'Display key metric' },
    ],
  },
  {
    category: 'Visualizations',
    items: [
      { type: 'chart' as const, title: 'Line Chart', icon: BarChart3, description: 'Trend over time' },
      { type: 'chart' as const, title: 'Bar Chart', icon: BarChart3, description: 'Compare values' },
      { type: 'chart' as const, title: 'Area Chart', icon: BarChart3, description: 'Show cumulative data' },
    ],
  },
  {
    category: 'Data',
    items: [
      { type: 'table' as const, title: 'Data Table', icon: Table2, description: 'Display tabular data' },
      { type: 'table' as const, title: 'Top Products', icon: Table2, description: 'Product ranking' },
    ],
  },
  {
    category: 'Elements',
    items: [
      { type: 'text' as const, title: 'Text Block', icon: Type, description: 'Add text content' },
      { type: 'filter' as const, title: 'Date Filter', icon: Filter, description: 'Filter by date' },
    ],
  },
];

export function ComponentsPalette({ onAddComponent }: ComponentsPaletteProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <h3 className="text-gray-900 mb-1">Components</h3>
        <p className="text-gray-500 mb-6">Click to add to canvas</p>

        {componentTypes.map((category) => (
          <div key={category.category} className="mb-6">
            <h4 className="text-gray-700 mb-3">{category.category}</h4>
            <div className="space-y-2">
              {category.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => onAddComponent(item.type, item.title)}
                    className="w-full flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-colors text-left group"
                  >
                    <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-indigo-100 transition-colors">
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-900 mb-0.5">{item.title}</div>
                      <div className="text-gray-500">{item.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
