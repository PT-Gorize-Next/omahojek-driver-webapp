"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { useState } from "react";

export default function CreateOrderPage() {
  const [formData, setFormData] = useState({
    distance: "",
    serviceType: "ojek",
    pickupAddress: "",
    destinationAddress: "",
    customerPhone: "",
    paymentMethod: "cash",
    additionalCost: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pb-20 bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="px-4 py-4 flex items-center gap-3">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Buat Pesanan Baru</h1>
        </div>
      </div>

      <div className="px-4 space-y-4 pt-4">
        {/* Distance */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Jarak (km)
          </label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            placeholder="Masukkan jarak"
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Jenis Layanan
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-background"
          >
            <option value="ojek">Ojek</option>
            <option value="mobil">Mobil</option>
            <option value="jastip">Jastip</option>
            <option value="antar-barang">Antar Barang</option>
          </select>
        </div>

        {/* Pickup Address */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Alamat Penjemputan
          </label>
          <textarea
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Masukkan lokasi penjemputan"
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            rows={2}
          />
        </div>

        {/* Destination Address */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Alamat Tujuan
          </label>
          <textarea
            name="destinationAddress"
            value={formData.destinationAddress}
            onChange={handleChange}
            placeholder="Masukkan alamat tujuan"
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
            rows={2}
          />
        </div>

        {/* Customer Phone */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Nomor Telepon Pelanggan
          </label>
          <input
            type="tel"
            name="customerPhone"
            value={formData.customerPhone}
            onChange={handleChange}
            placeholder="+62 xxx xxxx xxxx"
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Metode Pembayaran
          </label>
          <div className="space-y-2">
            {["cash", "qris"].map((method) => (
              <label
                key={method}
                className="flex items-center p-3 border border-border rounded-xl cursor-pointer hover:bg-muted transition-colors"
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={formData.paymentMethod === method}
                  onChange={() => handleRadioChange("paymentMethod", method)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="ml-3 font-medium text-foreground capitalize">
                  {method}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Additional Cost */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Biaya Tambahan (Rp)
          </label>
          <input
            type="number"
            name="additionalCost"
            value={formData.additionalCost}
            onChange={handleChange}
            placeholder="0"
            className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 mb-20">
          Buat Pesanan
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
