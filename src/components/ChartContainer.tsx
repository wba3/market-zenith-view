
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChartContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ChartContainer({ title, description, children }: ChartContainerProps) {
  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}
