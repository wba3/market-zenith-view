import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type Company = Tables<'companies'>;
type StockData = Tables<'stock_data'>;
type FinancialMetrics = Tables<'financial_metrics'>;

export function useCompanyData() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [financialMetrics, setFinancialMetrics] = useState<FinancialMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch all companies
  useEffect(() => {
    async function fetchCompanies() {
      const { data, error } = await supabase
        .from('companies')
        .select('*')
        .order('name');
      
      if (error) {
        console.error('Error fetching companies:', error);
      } else if (data) {
        setCompanies(data);
        // Select first company by default
        if (data.length > 0) {
          setSelectedCompany(data[0]);
        }
      }
      setLoading(false);
    }

    fetchCompanies();
  }, []);

  // Fetch company-specific data when selected company changes
  useEffect(() => {
    if (!selectedCompany) return;

    async function fetchCompanyData() {
      setLoading(true);
      
      // Fetch latest stock data
      const { data: stockData } = await supabase
        .from('stock_data')
        .select('*')
        .eq('company_id', selectedCompany.id)
        .order('data_timestamp', { ascending: false })
        .limit(1)
        .maybeSingle();

      // Fetch latest financial metrics
      const { data: financialData } = await supabase
        .from('financial_metrics')
        .select('*')
        .eq('company_id', selectedCompany.id)
        .order('period_date', { ascending: false })
        .limit(1)
        .maybeSingle();

      setStockData(stockData);
      setFinancialMetrics(financialData);
      setLoading(false);
    }

    fetchCompanyData();
  }, [selectedCompany]);

  return {
    companies,
    selectedCompany,
    setSelectedCompany,
    stockData,
    financialMetrics,
    loading
  };
}