import { CanvasComponent } from '../ReportBuilder';
import { Settings } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface ComponentEditorProps {
  component: CanvasComponent | null;
  onUpdateComponent: (id: string, updates: Partial<CanvasComponent>) => void;
}

export function ComponentEditor({ component, onUpdateComponent }: ComponentEditorProps) {
  if (!component) {
    return (
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <Settings className="w-5 h-5" />
          <h3>Properties</h3>
        </div>
        <div className="text-center text-gray-400 mt-12">
          <p>Select a component to edit its properties</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
      <div className="flex items-center gap-2 text-gray-900 mb-6">
        <Settings className="w-5 h-5" />
        <h3>Properties</h3>
      </div>

      <div className="space-y-6">
        {/* Basic Properties */}
        <div>
          <h4 className="text-gray-700 mb-4">Basic</h4>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={component.title}
                onChange={(e) => onUpdateComponent(component.id, { title: e.target.value })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                value={component.type}
                disabled
                className="mt-1 bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Layout Properties */}
        <div>
          <h4 className="text-gray-700 mb-4">Layout</h4>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="x">X Position</Label>
              <Input
                id="x"
                type="number"
                value={component.x}
                onChange={(e) => onUpdateComponent(component.id, { x: parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="y">Y Position</Label>
              <Input
                id="y"
                type="number"
                value={component.y}
                onChange={(e) => onUpdateComponent(component.id, { y: parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                type="number"
                value={component.width}
                onChange={(e) => onUpdateComponent(component.id, { width: parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                value={component.height}
                onChange={(e) => onUpdateComponent(component.id, { height: parseInt(e.target.value) })}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Component-specific Properties */}
        {component.type === 'metric' && (
          <div>
            <h4 className="text-gray-700 mb-4">Metric Settings</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="metric">Metric</Label>
                <select
                  id="metric"
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg"
                >
                  <option>Revenue</option>
                  <option>Orders</option>
                  <option>AOV</option>
                  <option>ROAS</option>
                </select>
              </div>
              <div>
                <Label htmlFor="color">Color</Label>
                <select
                  id="color"
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg"
                >
                  <option>Indigo</option>
                  <option>Green</option>
                  <option>Blue</option>
                  <option>Purple</option>
                  <option>Orange</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {component.type === 'chart' && (
          <div>
            <h4 className="text-gray-700 mb-4">Chart Settings</h4>
            <div className="space-y-4">
              <div>
                <Label htmlFor="chartType">Chart Type</Label>
                <select
                  id="chartType"
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg"
                >
                  <option>Line Chart</option>
                  <option>Bar Chart</option>
                  <option>Area Chart</option>
                  <option>Pie Chart</option>
                </select>
              </div>
              <div>
                <Label htmlFor="dataSource">Data Source</Label>
                <select
                  id="dataSource"
                  className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg"
                >
                  <option>Revenue Over Time</option>
                  <option>Orders Over Time</option>
                  <option>Ad Spend</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
