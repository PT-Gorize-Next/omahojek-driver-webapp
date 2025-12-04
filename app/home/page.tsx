"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, History, TrendingUp, DollarSign, Zap } from "lucide-react";
import { WeeklyChart } from "@/components/home/weekly-chart";
import { ServiceBreakdown } from "@/components/home/service-breakdown";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function HomePage() {
  return (
    <div className="pb-20 bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Assalamualaikum, Yuk Semangat{" "}
            </p>
            <h1 className="text-2xl font-bold">Siti Nurhaliza</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">SN</span>
          </div>
        </div>
      </div>

      <div className="px-4 space-y-4 pt-3">
        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 space-y-3 pt-2">
          <Card className="border-border">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Order Hari Ini
                  </p>
                  <p className="text-3xl font-bold text-primary">12</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <ZAP className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Order Bulan Ini
                  </p>
                  <p className="text-3xl font-bold text-primary">187</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Total Pendapatan
                  </p>
                  <p className="text-3xl font-bold text-green-500">Rp 3.2M</p>
                </div>
                <div className="p-3 bg-green-100 rounded-xl">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Chart */}
        <div className="pt-2">
          <WeeklyChart />
        </div>

        {/* Service Type Breakdown */}
        <div className="pb-4">
          <ServiceBreakdown />
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

function ZAP(props: React.SVGProps<SVGSVGElement>) {
  return <Zap {...props} />;
}
