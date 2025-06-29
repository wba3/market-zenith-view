
import { FileText, Download, Calendar, Users, TrendingUp, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const reports = [
  {
    id: 1,
    title: 'Q3 2024 Market Analysis Report',
    description: 'Comprehensive analysis of market trends, competitor movements, and growth opportunities in the technology sector.',
    category: 'Market Analysis',
    publishDate: '2024-10-15',
    readTime: '12 min',
    pages: 45,
    status: 'published',
    insights: 23,
    relevance: 95
  },
  {
    id: 2,
    title: 'Competitive Intelligence Briefing',
    description: 'Deep dive into competitor strategies, product launches, and market positioning changes observed in the past quarter.',
    category: 'Competitive Intelligence',
    publishDate: '2024-10-10',
    readTime: '8 min',
    pages: 28,
    status: 'published',
    insights: 18,
    relevance: 92
  },
  {
    id: 3,
    title: 'Industry Disruption Forecast 2025',
    description: 'Predictive analysis of emerging technologies and market forces that could reshape the competitive landscape.',
    category: 'Strategic Planning',
    publishDate: '2024-10-05',
    readTime: '15 min',
    pages: 52,
    status: 'published',
    insights: 31,
    relevance: 88
  },
  {
    id: 4,
    title: 'Customer Sentiment Analysis',
    description: 'Analysis of customer feedback, satisfaction scores, and brand perception across key market segments.',
    category: 'Customer Intelligence',
    publishDate: '2024-09-28',
    readTime: '10 min',
    pages: 35,
    status: 'published',
    insights: 19,
    relevance: 85
  },
  {
    id: 5,
    title: 'Regulatory Impact Assessment',
    description: 'Ongoing analysis of regulatory changes and their potential impact on market dynamics and competitive positioning.',
    category: 'Regulatory Analysis',
    publishDate: 'In Progress',
    readTime: '— min',
    pages: '—',
    status: 'draft',
    insights: 0,
    relevance: 90
  }
];

const reportMetrics = [
  {
    title: 'Total Reports',
    value: '24',
    change: '+6 this quarter',
    icon: FileText
  },
  {
    title: 'Key Insights',
    value: '187',
    change: '+23 this month',
    icon: TrendingUp
  },
  {
    title: 'Active Analysts',
    value: '8',
    change: '2 new this quarter',
    icon: Users
  },
  {
    title: 'Data Sources',
    value: '156',
    change: '+12 integrated',
    icon: BarChart3
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Market Analysis': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'Competitive Intelligence': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'Strategic Planning': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Customer Intelligence': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'Regulatory Analysis': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

export function IndustryReports() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">Industry Reports</h1>
        <p className="text-muted-foreground">Comprehensive analysis and strategic intelligence reports</p>
      </div>

      {/* Report Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card 
              key={metric.title}
              className="glass glass-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{metric.value}</h3>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Reports List */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>Strategic intelligence and market analysis documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => (
              <div 
                key={report.id}
                className="p-6 rounded-lg glass-hover animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{report.title}</h3>
                      <Badge 
                        variant="outline"
                        className={getCategoryColor(report.category)}
                      >
                        {report.category}
                      </Badge>
                      {report.status === 'draft' && (
                        <Badge variant="secondary">Draft</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {report.description}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-medium mb-1">{report.relevance}%</div>
                    <div className="text-xs text-muted-foreground">relevance</div>
                  </div>
                </div>

                <div className="mb-4">
                  <Progress value={report.relevance} className="h-2" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {report.publishDate}
                    </div>
                    {report.status === 'published' && (
                      <>
                        <div>{report.readTime} read</div>
                        <div>{report.pages} pages</div>
                        <div>{report.insights} insights</div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {report.status === 'published' ? (
                      <>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Report
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Report Generation</CardTitle>
          <CardDescription>Create custom reports and analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg glass-hover border border-border/50">
              <h4 className="font-medium mb-2">Custom Analysis</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Generate tailored reports based on specific metrics and timeframes.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Create Report
              </Button>
            </div>
            
            <div className="p-4 rounded-lg glass-hover border border-border/50">
              <h4 className="font-medium mb-2">Competitor Deep Dive</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Detailed analysis of specific competitors and market positioning.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Start Analysis
              </Button>
            </div>
            
            <div className="p-4 rounded-lg glass-hover border border-border/50">
              <h4 className="font-medium mb-2">Market Forecast</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Predictive analysis and trend forecasting for strategic planning.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Generate Forecast
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
