"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, LogOut, Settings, Bell, HelpCircle } from "lucide-react";
import { BottomNav } from "@/components/navigation/bottom-nav";

export default function ProfilePage() {
  return (
    <div className="pb-20 bg-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold">Profil</h1>
        </div>
      </div>

      <div className="px-4 space-y-4 pt-4">
        {/* Profile Card */}
        <Card className="border-border">
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">SN</span>
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold">Siti Nurhaliza</h2>
                <p className="text-sm text-muted-foreground">
                  +62 812 3456 7890
                </p>
                <p className="text-sm text-muted-foreground">
                  Driver Terverifikasi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-3">
          <Card className="border-border">
            <CardContent className="pt-4 text-center">
              <p className="text-2xl font-bold text-primary">4.8</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-4 text-center">
              <p className="text-2xl font-bold text-primary">1.2K</p>
              <p className="text-xs text-muted-foreground">Perjalanan</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="pt-4 text-center">
              <p className="text-2xl font-bold text-secondary">Rp 45M</p>
              <p className="text-xs text-muted-foreground">Pendapatan</p>
            </CardContent>
          </Card>
        </div> */}

        {/* Menu Items */}
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Pengaturan</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Notifikasi</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button> */}

          {/* <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-muted transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Bantuan & Dukungan</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button> */}
        </div>

        {/* Logout Button */}
        <Button className="w-full h-12 rounded-xl bg-destructive text-destructive-foreground font-semibold hover:bg-destructive/90 transition-all duration-200 flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          Keluar Akun
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
