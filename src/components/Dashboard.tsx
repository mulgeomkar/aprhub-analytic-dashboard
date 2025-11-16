import { MetricCard } from './MetricCard';
import { SalesChart } from './SalesChart';
import { SpendROASChart } from './SpendROASChart';
import { TopProductsTable } from './TopProductsTable';
import { CampaignPerformanceTable } from './CampaignPerformanceTable';
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, MousePointerClick, Eye, Target } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600">Track your Shopify store and Meta Ads performance</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard
          title="Revenue"
          value="$124,582"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="w-5 h-5" />}
          color="indigo"
        />
        <MetricCard
          title="Orders"
          value="1,847"
          change="+8.3%"
          trend="up"
          icon={<ShoppingCart className="w-5 h-5" />}
          color="green"
        />
        <MetricCard
          title="Average Order Value"
          value="$67.45"
          change="+3.8%"
          trend="up"
          icon={<TrendingUp className="w-5 h-5" />}
          color="blue"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.24%"
          change="-0.4%"
          trend="down"
          icon={<Target className="w-5 h-5" />}
          color="purple"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <MetricCard
          title="Returning Customer Rate"
          value="24.8%"
          change="+2.1%"
          trend="up"
          icon={<Users className="w-5 h-5" />}
          color="purple"
        />
        <MetricCard
          title="Ad Spend"
          value="$18,432"
          change="+15.2%"
          trend="up"
          icon={<DollarSign className="w-5 h-5" />}
          color="orange"
        />
        <MetricCard
          title="ROAS"
          value="6.76x"
          change="+0.8x"
          trend="up"
          icon={<TrendingUp className="w-5 h-5" />}
          color="green"
        />
        <MetricCard
          title="Impressions"
          value="2.4M"
          change="+22.1%"
          trend="up"
          icon={<Eye className="w-5 h-5" />}
          color="blue"
        />
        <MetricCard
          title="CTR"
          value="2.18%"
          change="+0.3%"
          trend="up"
          icon={<MousePointerClick className="w-5 h-5" />}
          color="indigo"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesChart />
        <SpendROASChart />
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProductsTable />
        <CampaignPerformanceTable />
      </div>
    </div>
  );
}