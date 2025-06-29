
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  description: string;
  delay?: number;
}

export function MetricCard({ title, value, change, trend, icon: Icon, description, delay = 0 }: MetricCardProps) {
  return (
    <Card 
      className="glass glass-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className={cn(
            "text-sm font-medium px-2 py-1 rounded-full",
            trend === 'up' 
              ? "bg-green-500/20 text-green-400" 
              : "bg-red-500/20 text-red-400"
          )}>
            {change}
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{value}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
