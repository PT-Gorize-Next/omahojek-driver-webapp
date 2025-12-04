"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { day: "Mon", orders: 8, revenue: 120000 },
  { day: "Tue", orders: 12, revenue: 180000 },
  { day: "Wed", orders: 15, revenue: 225000 },
  { day: "Thu", orders: 11, revenue: 165000 },
  { day: "Fri", orders: 18, revenue: 270000 },
  { day: "Sat", orders: 22, revenue: 330000 },
  { day: "Sun", orders: 16, revenue: 240000 },
];

export function WeeklyChart() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Pesanan Mingguan</CardTitle>
        <CardDescription>Jumlah pesanan per hari</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
              />
              <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="orders"
                fill="var(--color-primary)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
