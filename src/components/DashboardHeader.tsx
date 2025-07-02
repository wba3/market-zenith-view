
import { Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CompanySelector } from '@/components/CompanySelector';
import { useCompanyData } from '@/hooks/useCompanyData';

interface DashboardHeaderProps {
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

export function DashboardHeader({ sidebarCollapsed, setSidebarCollapsed }: DashboardHeaderProps) {
  const { companies, selectedCompany, setSelectedCompany } = useCompanyData();
  
  return (
    <header className="glass border-b border-border/30 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <CompanySelector 
            companies={companies}
            selectedCompany={selectedCompany}
            onCompanyChange={setSelectedCompany}
          />
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search companies, metrics, or reports..."
              className="pl-10 glass border-border/50 focus:border-primary/50 transition-all duration-200"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="glass-hover rounded-lg">
            <Settings size={18} />
          </Button>
          <Button variant="ghost" size="sm" className="glass-hover rounded-lg">
            <User size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
}
