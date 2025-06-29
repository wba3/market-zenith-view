
import { TrendingUp, TrendingDown, DollarSign, Users, BarChart3, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MetricCard } from '@/components/MetricCard';
import { ChartContainer } from '@/components/ChartContainer';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, growth: 12 },
  { month: 'Feb', revenue: 52000, growth: 15 },
  { month: 'Mar', revenue: 48000, growth: 8 },
  { month: 'Apr', revenue: 61000, growth: 25 },
  { month: 'May', revenue: 55000, growth: 18 },
  { month: 'Jun', revenue: 67000, growth: 22 },
];

const metrics = [
  {
    title: 'Market Valuation',
    value: '$2.4B',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    description: 'vs last quarter'
  },
  {
    title: 'Employee Count',
    value: '1,247',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    description: 'growth this year'
  },
  {
    title: 'Market Share',
    value: '23.8%',
    change: '-2.1%',
    trend: 'down',
    icon: BarChart3,
    description: 'in key segments'
  },
  {
    title: 'Activity Score',
    value: '94.2',
    change: '+5.7%',
    trend: 'up',
    icon: Activity,
    description: 'competitive index'
  }
];

export function CompanyOverview() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">Company Overview</h1>
        <p className="text-muted-foreground">Monitor key performance indicators and market position</p>
      </div>

      {/* Metrics Grid */}
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
          title="Revenue Trend"
          description="Monthly revenue performance"
        >
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
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
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>

        <ChartContainer
          title="Growth Rate"
          description="Monthly growth percentage"
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
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
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>

      {/* Recent Activity */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest company developments and market movements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: '2 hours ago', event: 'Q3 earnings report released', impact: 'positive' },
              { time: '1 day ago', event: 'New product launch announced', impact: 'positive' },
              { time: '3 days ago', event: 'Competitor pricing change detected', impact: 'neutral' },
              { time: '1 week ago', event: 'Market share report updated', impact: 'negative' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg glass-hover">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.impact === 'positive' ? 'bg-green-500' :
                    activity.impact === 'negative' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium">{activity.event}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  activity.impact === 'positive' ? 'bg-green-500/20 text-green-400' :
                  activity.impact === 'negative' ? 'bg-red-500/20 text-red-400' : 
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {activity.impact}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
