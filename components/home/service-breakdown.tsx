"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const serviceData = [
  { name: "Ojek", value: 45, color: "var(--color-primary)" },
  { name: "Mobil", value: 25, color: "var(--color-secondary)" },
  { name: "Jastip", value: 20, color: "var(--color-chart-3)" },
  { name: "Antar Barang", value: 10, color: "var(--color-chart-4)" },
];

export function ServiceBreakdown() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Rincian Layanan</CardTitle>
        <CardDescription>Pesanan berdasarkan jenis layanan</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={serviceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
