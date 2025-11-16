import { useRef } from 'react';
import { CanvasComponent } from '../ReportBuilder';
import { CanvasComponentRenderer } from './CanvasComponentRenderer';

interface BuilderCanvasProps {
  components: CanvasComponent[];
  selectedComponent: CanvasComponent | null;
  onSelectComponent: (component: CanvasComponent | null) => void;
  onUpdateComponent: (id: string, updates: Partial<CanvasComponent>) => void;
  onDeleteComponent: (id: string) => void;
}

export function BuilderCanvas({
  components,
  selectedComponent,
  onSelectComponent,
  onUpdateComponent,
  onDeleteComponent,
}: BuilderCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      onSelectComponent(null);
    }
  };

  return (
    <div
      ref={canvasRef}
      onClick={handleCanvasClick}
      className="flex-1 p-6 overflow-auto"
      style={{
        backgroundImage: `
          linear-gradient(to right, #f0f0f0 1px, transparent 1px),
          linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="relative min-h-[1200px] bg-white rounded-lg shadow-sm" style={{ width: '1400px' }}>
        {components.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-400 mb-2">Your canvas is empty</div>
              <div className="text-gray-500">Add components from the left panel to get started</div>
            </div>
          </div>
        ) : (
          components.map((component) => (
            <CanvasComponentRenderer
              key={component.id}
              component={component}
              isSelected={selectedComponent?.id === component.id}
              onSelect={() => onSelectComponent(component)}
              onUpdate={(updates) => onUpdateComponent(component.id, updates)}
              onDelete={() => onDeleteComponent(component.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
