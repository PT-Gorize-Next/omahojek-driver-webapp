"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Phone, CalendarIcon } from "lucide-react";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const transactionData = [
  {
    id: 1,
    serviceType: "ojek",
    pickup: "Jl. Sudirman, Jakarta Pusat",
    destination: "Jl. M.H. Thamrin, Jakarta Pusat",
    customerPhone: "+62 812 3456 7890",
    paymentMethod: "cash",
    distance: 2.5,
    total: "Rp 25.000",
    date: "2024-01-15",
  },
  {
    id: 2,
    serviceType: "mobil",
    pickup: "Bandara Soekarno-Hatta",
    destination: "Hotel Mandarin Oriental",
    customerPhone: "+62 812 9876 5432",
    paymentMethod: "qris",
    distance: 28.5,
    total: "Rp 185.000",
    date: "2024-01-15",
  },
  {
    id: 3,
    serviceType: "jastip",
    pickup: "Mall Grand Indonesia",
    destination: "Rumah, Jl. Gatot Subroto",
    customerPhone: "+62 821 1111 2222",
    paymentMethod: "cash",
    distance: 5.2,
    total: "Rp 35.000",
    date: "2024-01-14",
  },
  {
    id: 4,
    serviceType: "antar-barang",
    pickup: "Toko Elektronik Elang",
    destination: "Rumah, Jl. Dipati Ukur",
    customerPhone: "+62 856 7654 3210",
    paymentMethod: "qris",
    distance: 12.0,
    total: "Rp 95.000",
    date: "2024-01-14",
  },
];

export default function TransactionsPage() {
  const [selectedService, setSelectedService] = useState("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const filteredTransactions = transactionData.filter((t) => {
    const serviceMatch =
      selectedService === "all" || t.serviceType === selectedService;
    const dateMatch =
      !selectedDate || t.date === format(selectedDate, "yyyy-MM-dd");
    return serviceMatch && dateMatch;
  });

  const getServiceLabel = (type: string) => {
    const labels: Record<string, string> = {
      ojek: "Ojek",
      mobil: "Mobil",
      jastip: "Jastip",
      "antar-barang": "Antar Barang",
    };
    return labels[type] || type;
  };

  const getServiceColor = (type: string) => {
    const colors: Record<string, string> = {
      ojek: "bg-blue-100 text-blue-700",
      mobil: "bg-green-100 text-green-700",
      jastip: "bg-purple-100 text-purple-700",
      "antar-barang": "bg-orange-100 text-orange-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="px-4 py-4 flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Daftar Orderan</h1>
        </div>
      </div>

      <div className="px-4 space-y-4 pt-4">
        {/* Filters */}
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Filter Berdasarkan Tanggal
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-transparent"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pilih tanggal"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Service Type Tabs */}
          <Tabs
            value={selectedService}
            onValueChange={setSelectedService}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-5 gap-2 bg-transparent h-auto p-0">
              <TabsTrigger
                value="all"
                className="px-2 py-2 text-xs font-medium rounded-lg border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Semua
              </TabsTrigger>
              <TabsTrigger
                value="ojek"
                className="px-2 py-2 text-xs font-medium rounded-lg border border-border"
              >
                Ojek
              </TabsTrigger>
              <TabsTrigger
                value="mobil"
                className="px-2 py-2 text-xs font-medium rounded-lg border border-border"
              >
                Mobil
              </TabsTrigger>
              <TabsTrigger
                value="jastip"
                className="px-2 py-2 text-xs font-medium rounded-lg border border-border"
              >
                Jastip
              </TabsTrigger>
              <TabsTrigger
                value="antar-barang"
                className="px-2 py-2 text-xs font-medium rounded-lg border border-border"
              >
                Barang
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Transaction List */}
        <div className="space-y-3 pb-4">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <Card
                key={transaction.id}
                className="border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  {/* Service Type Badge */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${getServiceColor(
                        transaction.serviceType
                      )}`}
                    >
                      {getServiceLabel(transaction.serviceType)}
                    </span>
                    <span className="text-lg font-bold text-secondary">
                      {transaction.total}
                    </span>
                  </div>

                  {/* Locations */}
                  <div className="space-y-2 mb-3">
                    <div className="flex gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Dari</p>
                        <p className="text-foreground">{transaction.pickup}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground">Ke</p>
                        <p className="text-foreground">
                          {transaction.destination}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="flex gap-4 text-xs text-muted-foreground pt-3 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      <span>{transaction.customerPhone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      <span>{transaction.date}</span>
                    </div>
                  </div>

                  {/* Distance and Payment */}
                  <div className="flex justify-between mt-3 text-sm">
                    <span className="text-muted-foreground">
                      {transaction.distance} km
                    </span>
                    <span className="text-muted-foreground capitalize">
                      {transaction.paymentMethod}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Belum ada orderan ditemukan
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
