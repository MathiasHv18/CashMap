import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardBalanceInfoProps {
  title: string;
  balance: number;
  width?: string;
  height?: string;
  footer: string;
  colorText?: string;
}

export function CardBalanceInfo({
  title = "Balance",
  balance,
  width = "flex-1",
  height = "h-[130px]",
  footer,
  colorText,
}: CardBalanceInfoProps) {
  return (
    <Card className={`${width} ${height} flex flex-col justify-center  gap-0`}>
      <CardHeader className="space-y-0 pb-0 mb-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 mt-0">
        <div className={`text-2xl font-bold ${colorText}`}>
          ${balance.toLocaleString()}
        </div>
        <p className="text-xs text-muted-foreground">{footer}</p>
      </CardContent>
    </Card>
  );
}
