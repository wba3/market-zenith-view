
import { Users, Trophy, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const competitors = [
  {
    name: 'TechCorp Inc.',
    marketShare: 35.2,
    revenue: '$2.1B',
    employees: 8500,
    growth: '+15.3%',
    strengths: ['Innovation', 'Market Leadership'],
    weaknesses: ['High Costs', 'Slow Adaptation'],
    threat: 'high'
  },
  {
    name: 'InnovateTech',
    marketShare: 22.8,
    revenue: '$1.4B',
    employees: 5200,
    growth: '+28.7%',
    strengths: ['Agility', 'Cost Efficiency'],
    weaknesses: ['Limited Resources', 'Brand Recognition'],
    threat: 'medium'
  },
  {
    name: 'FutureSoft',
    marketShare: 18.5,
    revenue: '$980M',
    employees: 3800,
    growth: '+12.1%',
    strengths: ['Technology', 'Partnerships'],
    weaknesses: ['Market Penetration', 'Scaling'],
    threat: 'low'
  },
  {
    name: 'Your Company',
    marketShare: 23.8,
    revenue: '$1.6B',
    employees: 6100,
    growth: '+19.4%',
    strengths: ['Customer Focus', 'Product Quality'],
    weaknesses: ['Marketing Reach', 'Price Competition'],
    threat: null
  }
];

const competitiveMetrics = [
  {
    title: 'Market Position',
    value: '#2',
    description: 'in key segments',
    icon: Trophy
  },
  {
    title: 'Competitive Score',
    value: '8.7/10',
    description: 'overall strength',
    icon: Target
  },
  {
    title: 'Innovation Index',
    value: '92%',
    description: 'vs competitors',
    icon: Zap
  },
  {
    title: 'Market Threats',
    value: '3 Active',
    description: 'monitoring required',
    icon: Users
  }
];

export function CompetitorComparison() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">Competitor Comparison</h1>
        <p className="text-muted-foreground">Analyze market positioning and competitive landscape</p>
      </div>

      {/* Competitive Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {competitiveMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card 
              key={metric.title}
              className="glass glass-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{metric.value}</h3>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Competitor Analysis */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Market Share Analysis</CardTitle>
          <CardDescription>Competitive positioning and market distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {competitors.map((competitor, index) => (
              <div 
                key={competitor.name}
                className="p-4 rounded-lg glass-hover animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className={`font-semibold ${competitor.name === 'Your Company' ? 'text-primary' : ''}`}>
                      {competitor.name}
                    </h3>
                    {competitor.threat && (
                      <Badge 
                        variant={competitor.threat === 'high' ? 'destructive' : 
                                competitor.threat === 'medium' ? 'default' : 'secondary'}
                      >
                        {competitor.threat} threat
                      </Badge>
                    )}
                    {competitor.name === 'Your Company' && (
                      <Badge variant="outline" className="border-primary text-primary">
                        Your Position
                      </Badge>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{competitor.marketShare}%</div>
                    <div className="text-sm text-muted-foreground">market share</div>
                  </div>
                </div>

                <Progress value={competitor.marketShare} className="mb-3" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Revenue: </span>
                    <span className="font-medium">{competitor.revenue}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Employees: </span>
                    <span className="font-medium">{competitor.employees.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Growth: </span>
                    <span className="font-medium text-green-400">{competitor.growth}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs text-muted-foreground">Strengths:</span>
                    {competitor.strengths.map((strength) => (
                      <Badge key={strength} variant="secondary" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs text-muted-foreground">Weaknesses:</span>
                    {competitor.weaknesses.map((weakness) => (
                      <Badge key={weakness} variant="outline" className="text-xs">
                        {weakness}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
