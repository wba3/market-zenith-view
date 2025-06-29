
import { Bell, ExternalLink, TrendingUp, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    id: 1,
    title: 'TechCorp Announces Major Acquisition',
    summary: 'Strategic move to expand market presence in emerging technologies sector.',
    source: 'Tech News Daily',
    time: '2 hours ago',
    impact: 'high',
    type: 'market',
    relevance: 95
  },
  {
    id: 2,
    title: 'New AI Regulations Impact Industry Players',
    summary: 'Government announces new compliance requirements for AI companies.',
    source: 'Regulatory Watch',
    time: '4 hours ago',
    impact: 'medium',
    type: 'regulatory',
    relevance: 88
  },
  {
    id: 3,
    title: 'InnovateTech Stock Surges on Earnings Beat',
    summary: 'Company reports 35% revenue growth, beating analyst expectations.',
    source: 'Financial Times',
    time: '6 hours ago',
    impact: 'medium',
    type: 'financial',
    relevance: 82
  },
  {
    id: 4,
    title: 'Industry Report: Market Consolidation Trends',
    summary: 'Analysis shows increasing merger activity in tech sector.',
    source: 'Market Research Pro',
    time: '8 hours ago',
    impact: 'low',
    type: 'analysis',
    relevance: 75
  },
  {
    id: 5,
    title: 'New Product Launch from FutureSoft',
    summary: 'Company unveils next-generation platform targeting enterprise market.',
    source: 'Product Hunt',
    time: '12 hours ago',
    impact: 'medium',
    type: 'product',
    relevance: 78
  }
];

const alerts = [
  {
    title: 'Price War Alert',
    message: 'TechCorp reduced pricing by 15% across key product lines',
    severity: 'high',
    time: '1 hour ago'
  },
  {
    title: 'Patent Filing',
    message: 'InnovateTech filed 3 new patents in your core technology area',
    severity: 'medium',
    time: '3 hours ago'
  },
  {
    title: 'Executive Movement',
    message: 'Former VP of Engineering joined competitor FutureSoft',
    severity: 'low',
    time: '1 day ago'
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case 'high': return 'text-red-400 bg-red-500/20';
    case 'medium': return 'text-yellow-400 bg-yellow-500/20';
    case 'low': return 'text-green-400 bg-green-500/20';
    default: return 'text-gray-400 bg-gray-500/20';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'market': return TrendingUp;
    case 'regulatory': return AlertTriangle;
    case 'financial': return TrendingUp;
    case 'analysis': return Info;
    case 'product': return Info;
    default: return Info;
  }
};

export function NewsAlerts() {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold mb-2">News & Alerts</h1>
        <p className="text-muted-foreground">Stay informed about market developments and competitive intelligence</p>
      </div>

      {/* Critical Alerts */}
      <Card className="glass border-red-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-red-400" />
            Critical Alerts
          </CardTitle>
          <CardDescription>High-priority notifications requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg glass-hover animate-fade-in border-l-4 ${
                  alert.severity === 'high' ? 'border-red-500' :
                  alert.severity === 'medium' ? 'border-yellow-500' : 'border-green-500'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant="outline"
                      className={getImpactColor(alert.severity)}
                    >
                      {alert.severity}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Feed */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Industry News Feed</CardTitle>
          <CardDescription>Latest developments affecting your competitive landscape</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div 
                  key={item.id}
                  className="p-4 rounded-lg glass-hover animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <TypeIcon className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {item.relevance}% relevant
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.summary}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{item.source}</span>
                          <span>•</span>
                          <span>{item.time}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Read More
                        </Button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge 
                        variant="outline"
                        className={getImpactColor(item.impact)}
                      >
                        {item.impact} impact
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
