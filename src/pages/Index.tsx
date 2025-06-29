
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { CompanyOverview } from '@/components/CompanyOverview';
import { FinancialAnalysis } from '@/components/FinancialAnalysis';
import { CompetitorComparison } from '@/components/CompetitorComparison';
import { NewsAlerts } from '@/components/NewsAlerts';
import { IndustryReports } from '@/components/IndustryReports';

const Index = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'overview':
        return <CompanyOverview />;
      case 'financial':
        return <FinancialAnalysis />;
      case 'competitors':
        return <CompetitorComparison />;
      case 'news':
        return <NewsAlerts />;
      case 'reports':
        return <IndustryReports />;
      default:
        return <CompanyOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-background/50 to-transparent pointer-events-none" />
      
      <div className="flex h-screen relative">
        <Sidebar 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        
        <main className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-72'
        }`}>
          <DashboardHeader 
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
          
          <div className="flex-1 overflow-auto p-6">
            <div className="animate-fade-in">
              {renderActiveSection()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
