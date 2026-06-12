"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SparklesBackground } from "@/components/shared/SparklesBackground";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/home";
    }, 1000);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 bg-gradient-to-br from-[#FFF3EE] to-[#FFEEDD]">
      <SparklesBackground count={8} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-7xl mb-3"
          >
            🍊
          </motion.div>
          <h1 className="text-3xl font-black text-[#FF6B2B]">OhforOrange</h1>
          <p className="text-gray-500 font-bold">Read & Play — Log in to your account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="parent@example.com"
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold
                           focus:outline-none focus:border-[#FF6B2B] text-gray-700 placeholder-gray-300
                           transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-black text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold
                           focus:outline-none focus:border-[#FF6B2B] text-gray-700
                           transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-xl py-4 mt-2 disabled:opacity-70"
            >
              {loading ? "Logging in... 🔄" : "Log In! 🚀"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 font-bold">
              Don't have an account?{" "}
              <Link href="/register" className="text-[#FF6B2B] font-black hover:underline">
                Sign up free →
              </Link>
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-orange-100">
            <button
              onClick={() => window.location.href = "/home"}
              className="w-full py-3 rounded-2xl bg-orange-50 text-[#FF6B2B] font-black hover:bg-orange-100 transition-colors"
            >
              👧 Continue as Guest (Child Mode)
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
