import { Badge } from './ui/badge';

const campaigns = [
  { name: 'Summer Sale 2024', spend: '$4,250', roas: '8.2x', impressions: '485K', ctr: '2.4%', purchases: 348, status: 'active' },
  { name: 'Holiday Bundle', spend: '$3,890', roas: '7.5x', impressions: '392K', ctr: '2.1%', purchases: 292, status: 'active' },
  { name: 'New Product Launch', spend: '$5,120', roas: '6.8x', impressions: '628K', ctr: '1.9%', purchases: 412, status: 'active' },
  { name: 'Retargeting Q1', spend: '$2,840', roas: '9.1x', impressions: '215K', ctr: '3.2%', purchases: 258, status: 'active' },
  { name: 'Brand Awareness', spend: '$2,332', roas: '4.5x', impressions: '892K', ctr: '1.2%', purchases: 105, status: 'paused' },
];

export function CampaignPerformanceTable() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-gray-900 mb-1">Campaign Performance</h3>
        <p className="text-gray-500">Active Meta Ads campaigns</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 text-gray-600">Campaign</th>
              <th className="text-right py-3 text-gray-600">Spend</th>
              <th className="text-right py-3 text-gray-600">ROAS</th>
              <th className="text-right py-3 text-gray-600">CTR</th>
              <th className="text-right py-3 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="py-4 text-gray-900">{campaign.name}</td>
                <td className="py-4 text-right text-gray-900">{campaign.spend}</td>
                <td className="py-4 text-right text-gray-900">{campaign.roas}</td>
                <td className="py-4 text-right text-gray-600">{campaign.ctr}</td>
                <td className="py-4 text-right">
                  <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                    {campaign.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}