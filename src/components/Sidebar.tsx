
import { Building2, TrendingUp, Users, Bell, FileText, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const navigationItems = [
  {
    id: 'overview',
    label: 'Company Overview',
    icon: Building2,
    description: 'Key metrics and performance'
  },
  {
    id: 'financial',
    label: 'Financial Analysis',
    icon: TrendingUp,
    description: 'Revenue, growth, and trends'
  },
  {
    id: 'competitors',
    label: 'Competitor Comparison',
    icon: Users,
    description: 'Market positioning analysis'
  },
  {
    id: 'news',
    label: 'News & Alerts',
    icon: Bell,
    description: 'Latest updates and insights'
  },
  {
    id: 'reports',
    label: 'Industry Reports',
    icon: FileText,
    description: 'Comprehensive market analysis'
  }
];

export function Sidebar({ activeSection, setActiveSection, collapsed, setCollapsed }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed left-0 top-0 h-full glass border-r border-border/50 transition-all duration-300 z-50",
      collapsed ? "w-20" : "w-72"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MarketScope
              </h1>
              <p className="text-xs text-muted-foreground mt-1">Competition Intelligence</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg glass-hover transition-all duration-200"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={cn(
                  "nav-item w-full text-left",
                  isActive && "active",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4 border-t border-border/30">
            <div className="glass rounded-lg p-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
                  U
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">Strategic Analyst</div>
                  <div className="text-xs text-muted-foreground">Premium Plan</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
