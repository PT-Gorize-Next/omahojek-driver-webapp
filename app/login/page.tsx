"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary/90 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <div className="text-xl font-bold text-primary">M</div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Muslimah Ojek</h1>
          <p className="text-white/80 text-sm">Professional Driver Platform</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-center text-muted-foreground mb-8 text-sm">
              Sign in to access your dashboard
            </p>

            {/* Google Login Button */}
            <Button
              className="w-full h-12 rounded-xl bg-white border-2 border-border text-foreground hover:bg-muted font-semibold transition-all duration-200 gap-x-4"
              variant="outline"
              onClick={() => router.push("/home")}
            >
              <img src="/icons/google.png" alt="" width={20} />
              Masuk dengan Google
            </Button>

            {/* Divider */}
            {/* <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="flex-1 h-px bg-border" />
            </div> */}

            {/* Email Input */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div> */}

            {/* Password Input */}
            {/* <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div> */}

            {/* Login Button */}
            {/* <Button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 mb-4">
              Sign In
            </Button> */}

            {/* Footer */}
            {/* <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <span className="text-primary font-semibold cursor-pointer hover:underline">
                Sign up
              </span>
            </p> */}
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-white/60 text-xs mt-6">
          By continuing, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
}
