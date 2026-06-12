"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { SparklesBackground } from "@/components/shared/SparklesBackground";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", email: "", password: "",
    childName: "", childAge: "5",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/home";
    }, 1200);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 bg-gradient-to-br from-[#FFF3EE] to-[#FFEEDD]">
      <SparklesBackground count={8} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-7xl mb-3">🍊</motion.div>
          <h1 className="text-3xl font-black text-[#FF6B2B]">Join OhforOrange!</h1>
          <p className="text-gray-500 font-bold">Create a free parent account</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-3 mb-6">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-3 flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 transition-all
                           ${step >= s ? "bg-[#FF6B2B] text-white" : "bg-gray-200 text-gray-400"}`}
              >
                {s}
              </div>
              <div className={`text-xs font-bold ${step >= s ? "text-[#FF6B2B]" : "text-gray-400"}`}>
                {s === 1 ? "Your Account" : "Child Profile"}
              </div>
              {s < 2 && <div className={`flex-1 h-1 rounded-full ${step > s ? "bg-[#FF6B2B]" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-card p-8 border border-orange-100">
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sarah Johnson"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold focus:outline-none focus:border-[#FF6B2B] text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="parent@example.com"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold focus:outline-none focus:border-[#FF6B2B] text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-1.5">Password</label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold focus:outline-none focus:border-[#FF6B2B] text-gray-700"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="text-center text-4xl mb-2">👧</div>
                <p className="text-center text-sm font-bold text-gray-500 mb-3">Tell us about your child!</p>
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-1.5">Child's Name</label>
                  <input
                    type="text"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder="Emma"
                    required
                    className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold focus:outline-none focus:border-[#FF6B2B] text-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-1.5">Child's Age</label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-orange-200 font-bold focus:outline-none focus:border-[#FF6B2B] text-gray-700"
                  >
                    {[3, 4, 5, 6, 7].map((age) => (
                      <option key={age} value={age}>{age} years old</option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-xl py-4 mt-2 disabled:opacity-70"
            >
              {loading ? "Creating account... 🔄" : step === 1 ? "Next Step →" : "Start Learning! 🚀"}
            </button>
          </form>

          {step === 1 && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500 font-bold">
                Already have an account?{" "}
                <Link href="/login" className="text-[#FF6B2B] font-black hover:underline">Log in →</Link>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
