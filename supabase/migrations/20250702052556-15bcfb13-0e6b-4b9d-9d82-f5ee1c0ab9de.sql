-- Add financial metrics for Apple, Google, and Microsoft
INSERT INTO financial_metrics (company_id, period_date, period_type, revenue, gross_profit, operating_income, net_income, total_assets, total_liabilities, shareholders_equity, eps, pe_ratio, pb_ratio, debt_to_equity, roe, roa)
SELECT 
  c.id,
  '2024-09-30'::date,
  'quarterly',
  CASE 
    WHEN c.ticker = 'AAPL' THEN 94930000000  
    WHEN c.ticker = 'GOOGL' THEN 88268000000  
    WHEN c.ticker = 'MSFT' THEN 65585000000  
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 42688000000
    WHEN c.ticker = 'GOOGL' THEN 56046000000
    WHEN c.ticker = 'MSFT' THEN 45703000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 28997000000
    WHEN c.ticker = 'GOOGL' THEN 23266000000
    WHEN c.ticker = 'MSFT' THEN 31048000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 14736000000
    WHEN c.ticker = 'GOOGL' THEN 26300000000
    WHEN c.ticker = 'MSFT' THEN 24669000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 364980000000
    WHEN c.ticker = 'GOOGL' THEN 402392000000
    WHEN c.ticker = 'MSFT' THEN 512360000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 308030000000
    WHEN c.ticker = 'GOOGL' THEN 96843000000
    WHEN c.ticker = 'MSFT' THEN 198298000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 56950000000
    WHEN c.ticker = 'GOOGL' THEN 305549000000
    WHEN c.ticker = 'MSFT' THEN 314062000000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 0.97
    WHEN c.ticker = 'GOOGL' THEN 2.12
    WHEN c.ticker = 'MSFT' THEN 3.30
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 36.8
    WHEN c.ticker = 'GOOGL' THEN 24.2
    WHEN c.ticker = 'MSFT' THEN 34.1
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 59.8
    WHEN c.ticker = 'GOOGL' THEN 6.8
    WHEN c.ticker = 'MSFT' THEN 12.4
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 5.41
    WHEN c.ticker = 'GOOGL' THEN 0.32
    WHEN c.ticker = 'MSFT' THEN 0.63
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 0.259
    WHEN c.ticker = 'GOOGL' THEN 0.086
    WHEN c.ticker = 'MSFT' THEN 0.078
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 0.040
    WHEN c.ticker = 'GOOGL' THEN 0.065
    WHEN c.ticker = 'MSFT' THEN 0.048
  END
FROM companies c
WHERE c.ticker IN ('AAPL', 'GOOGL', 'MSFT');

-- Add current stock data
INSERT INTO stock_data (company_id, data_timestamp, price, change_amount, change_percent, volume, day_high, day_low, year_high, year_low, market_cap)
SELECT 
  c.id,
  NOW(),
  CASE 
    WHEN c.ticker = 'AAPL' THEN 227.52
    WHEN c.ticker = 'GOOGL' THEN 178.35
    WHEN c.ticker = 'MSFT' THEN 441.58
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 2.85
    WHEN c.ticker = 'GOOGL' THEN -1.42
    WHEN c.ticker = 'MSFT' THEN 5.23
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 1.27
    WHEN c.ticker = 'GOOGL' THEN -0.79
    WHEN c.ticker = 'MSFT' THEN 1.20
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 45820000
    WHEN c.ticker = 'GOOGL' THEN 28450000
    WHEN c.ticker = 'MSFT' THEN 31250000
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 229.87
    WHEN c.ticker = 'GOOGL' THEN 180.25
    WHEN c.ticker = 'MSFT' THEN 443.15
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 224.33
    WHEN c.ticker = 'GOOGL' THEN 177.08
    WHEN c.ticker = 'MSFT' THEN 438.90
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 237.49
    WHEN c.ticker = 'GOOGL' THEN 193.31
    WHEN c.ticker = 'MSFT' THEN 468.35
  END,
  CASE 
    WHEN c.ticker = 'AAPL' THEN 164.08
    WHEN c.ticker = 'GOOGL' THEN 129.40
    WHEN c.ticker = 'MSFT' THEN 362.90
  END,
  c.market_cap
FROM companies c
WHERE c.ticker IN ('AAPL', 'GOOGL', 'MSFT');