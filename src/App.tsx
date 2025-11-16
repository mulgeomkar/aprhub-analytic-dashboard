import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { ReportBuilder } from './components/ReportBuilder';
import { LayoutDashboard, FileBarChart } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'builder'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-indigo-600">APR Hub</h1>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveView('dashboard')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeView === 'dashboard'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveView('builder')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeView === 'builder'
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FileBarChart className="w-4 h-4" />
                  Report Builder
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <select className="px-3 py-2 border border-gray-200 rounded-lg text-gray-700 bg-white">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {activeView === 'dashboard' ? <Dashboard /> : <ReportBuilder />}
      </main>
    </div>
  );
}
