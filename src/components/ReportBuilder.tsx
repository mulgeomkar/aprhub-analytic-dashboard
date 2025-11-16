import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ComponentsPalette } from './builder/ComponentsPalette';
import { BuilderCanvas } from './builder/BuilderCanvas';
import { ComponentEditor } from './builder/ComponentEditor';
import { Save, Eye, Download } from 'lucide-react';
import { Button } from './ui/button';

export interface CanvasComponent {
  id: string;
  type: 'metric' | 'chart' | 'table' | 'text' | 'filter';
  title: string;
  config: Record<string, any>;
  x: number;
  y: number;
  width: number;
  height: number;
}

export function ReportBuilder() {
  const [components, setComponents] = useState<CanvasComponent[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<CanvasComponent | null>(null);

  const handleAddComponent = (type: CanvasComponent['type'], title: string) => {
    const newComponent: CanvasComponent = {
      id: `component-${Date.now()}`,
      type,
      title,
      config: {},
      x: 20,
      y: 20 + components.length * 20,
      width: type === 'metric' ? 280 : 580,
      height: type === 'metric' ? 140 : 300,
    };
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent);
  };

  const handleUpdateComponent = (id: string, updates: Partial<CanvasComponent>) => {
    setComponents(components.map(c => c.id === id ? { ...c, ...updates } : c));
    if (selectedComponent?.id === id) {
      setSelectedComponent({ ...selectedComponent, ...updates });
    }
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter(c => c.id !== id));
    if (selectedComponent?.id === id) {
      setSelectedComponent(null);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-[calc(100vh-73px)] flex">
        {/* Left Sidebar - Components Palette */}
        <ComponentsPalette onAddComponent={handleAddComponent} />

        {/* Main Canvas */}
        <div className="flex-1 flex flex-col bg-gray-100">
          {/* Toolbar */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Untitled Report"
                  className="text-gray-900 bg-transparent border-none outline-none hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                />
                <p className="text-gray-500 px-2 mt-0.5">Last edited today</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save Report
                </Button>
              </div>
            </div>
          </div>

          {/* Canvas */}
          <BuilderCanvas
            components={components}
            selectedComponent={selectedComponent}
            onSelectComponent={setSelectedComponent}
            onUpdateComponent={handleUpdateComponent}
            onDeleteComponent={handleDeleteComponent}
          />
        </div>

        {/* Right Sidebar - Component Editor */}
        <ComponentEditor
          component={selectedComponent}
          onUpdateComponent={handleUpdateComponent}
        />
      </div>
    </DndProvider>
  );
}