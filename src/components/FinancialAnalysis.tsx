
import { TrendingUp, DollarSign, PieChart, Target } from 'lucide-react';
import { MetricCard } from '@/components/MetricCard';
import { ChartContainer } from '@/components/ChartContainer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { useCompanyData } from '@/hooks/useCompanyData';
import { Skeleton } from '@/components/ui/skeleton';

const financialData = [
  { quarter: 'Q1 2023', revenue: 120, profit: 25, expenses: 95 },
  { quarter: 'Q2 2023', revenue: 135, profit: 32, expenses: 103 },
  { quarter: 'Q3 2023', revenue: 148, profit: 38, expenses: 110 },
  { quarter: 'Q4 2023', revenue: 162, profit: 45, expenses: 117 },
];

const expenseBreakdown = [
  { name: 'R&D', value: 35, color: 'hsl(var(--primary))' },
  { name: 'Marketing', value: 25, color: 'hsl(var(--accent))' },
  { name: 'Operations', value: 30, color: '#8b5cf6' },
  { name: 'Other', value: 10, color: '#f59e0b' },
];

const metrics = [
  {
    title: 'Total Revenue',
    value: '$565M',
    change: '+18.4%',
    trend: 'up' as const,
    icon: DollarSign,
    description: 'annual growth'
  },
  {
    title: 'Profit Margin',
    value: '27.8%',
    change: '+3.2%',
    trend: 'up' as const,
    icon: TrendingUp,
    description: 'vs industry avg'
  },
  {
    title: 'EBITDA',
    value: '$140M',
    change: '+22.1%',
    trend: 'up' as const,
    icon: Target,
    description: 'year over year'
  },
  {
    title: 'Cash Flow',
    value: '$95M',
    change: '-5.3%',
    trend: 'down' as const,
    icon: PieChart,
    description: 'free cash flow'
  }
];

export function FinancialAnalysis() {
  const { selectedCompany, financialMetrics, loading } = useCompanyData();

  if (loading) {
    return (
      <div className="space-y-6 animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold mb-2">Financial Analysis</h1>
          <p className="text-muted-foreground">Deep dive into revenue, profitability, and financial health</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  if (!selectedCompany || !financialMetrics) {
    return (
      <div className="space-y-6 animate-slide-up">
        <div>
          <h1 className="text-3xl font-bold mb-2">Financial Analysis</h1>
          <p className="text-muted-foreground">No financial data available for selected company</p>
        </div>
      </div>
    );
  }

  const metrics = [
    {
      title: 'Total Revenue',
      value: `$${(financialMetrics.revenue / 1e9).toFixed(1)}B`,
      change: '+18.4%',
      trend: 'up' as const,
      icon: DollarSign,
      description: 'quarterly revenue'
    },
    {
      title: 'Net Income',
      value: `$${(financialMetrics.net_income / 1e9).toFixed(1)}B`,
      change: '+22.1%',
      trend: 'up' as const,
      icon: TrendingUp,
      description: 'quarterly profit'
    },
    {
      title: 'Gross Profit',
      value: `$${(financialMetrics.gross_profit / 1e9).toFixed(1)}B`,
      change: '+15.8%',
      trend: 'up' as const,
      icon: Target,
      description: 'gross margin'
    },
    {
      title: 'ROE',
      value: `${(financialMetrics.roe * 100).toFixed(1)}%`,
      change: '+3.2%',
      trend: 'up' as const,
      icon: PieChart,
      description: 'return on equity'
    }
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">{selectedCompany.name} Financial Analysis</h1>
        <p className="text-muted-foreground">Deep dive into revenue, profitability, and financial health</p>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            {...metric}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer
          title="Quarterly Performance"
          description="Revenue, profit, and expenses breakdown"
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financialData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="quarter" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  backdropFilter: 'blur(16px)'
                }}
              />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="profit" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer
          title="Expense Distribution"
          description="Current quarter expense allocation"
        >
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPieChart>
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  backdropFilter: 'blur(16px)'
                }}
              />
              <Pie
                data={expenseBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-4">
            {expenseBreakdown.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </ChartContainer>
      </div>
    </div>
  );
}
