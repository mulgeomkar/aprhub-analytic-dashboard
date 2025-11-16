import { useRef, useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { CanvasComponent } from '../ReportBuilder';
import { Trash2, GripVertical } from 'lucide-react';
import { MetricCard } from '../MetricCard';
import { DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CanvasComponentRendererProps {
  component: CanvasComponent;
  isSelected: boolean;
  onSelect: () => void;
  onUpdate: (updates: Partial<CanvasComponent>) => void;
  onDelete: () => void;
}

const sampleChartData = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

export function CanvasComponentRenderer({
  component,
  isSelected,
  onSelect,
  onUpdate,
  onDelete,
}: CanvasComponentRendererProps) {
  const renderContent = () => {
    switch (component.type) {
      case 'metric':
        return (
          <div className="h-full p-4">
            <MetricCard
              title={component.title}
              value="$12,450"
              change="+8.5%"
              trend="up"
              icon={<DollarSign className="w-5 h-5" />}
              color="indigo"
            />
          </div>
        );
      case 'chart':
        return (
          <div className="h-full p-4 bg-white">
            <h4 className="text-gray-900 mb-4">{component.title}</h4>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={sampleChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case 'table':
        return (
          <div className="h-full p-4 bg-white overflow-auto">
            <h4 className="text-gray-900 mb-4">{component.title}</h4>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-gray-600">Product</th>
                  <th className="text-right py-2 text-gray-600">Revenue</th>
                  <th className="text-right py-2 text-gray-600">Orders</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Product A</td>
                  <td className="text-right">$12,450</td>
                  <td className="text-right">124</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Product B</td>
                  <td className="text-right">$8,920</td>
                  <td className="text-right">89</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'text':
        return (
          <div className="h-full p-4 bg-white">
            <h4 className="text-gray-900 mb-2">{component.title}</h4>
            <p className="text-gray-600">Add your custom text content here...</p>
          </div>
        );
      case 'filter':
        return (
          <div className="h-full p-4 bg-white">
            <label className="text-gray-700 mb-2 block">{component.title}</label>
            <select className="w-full px-3 py-2 border border-gray-200 rounded-lg">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Rnd
      size={{ width: component.width, height: component.height }}
      position={{ x: component.x, y: component.y }}
      onDragStop={(e, d) => {
        onUpdate({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        onUpdate({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          ...position,
        });
      }}
      bounds="parent"
      minWidth={200}
      minHeight={100}
      className={`${isSelected ? 'ring-2 ring-indigo-500' : ''}`}
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          onSelect();
        }}
        className="h-full bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative group"
      >
        {/* Drag Handle */}
        {isSelected && (
          <div className="absolute -top-8 left-0 right-0 flex items-center justify-between px-2 py-1 bg-indigo-500 text-white rounded-t-lg">
            <div className="flex items-center gap-1 cursor-move">
              <GripVertical className="w-4 h-4" />
              <span className="text-sm">{component.title}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1 hover:bg-indigo-600 rounded"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
        {renderContent()}
      </div>
    </Rnd>
  );
}
