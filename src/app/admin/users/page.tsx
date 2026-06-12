"use client";

import { motion } from "framer-motion";

const MOCK_USERS = [
  { id: "1", name: "Sarah Johnson", email: "sarah@example.com", children: 2, role: "PARENT", joined: "2024-01-15", active: true },
  { id: "2", name: "Mike Chen", email: "mike@example.com", children: 1, role: "PARENT", joined: "2024-01-20", active: true },
  { id: "3", name: "Emma Williams", email: "emma@example.com", children: 3, role: "PARENT", joined: "2024-02-01", active: false },
  { id: "4", name: "Admin User", email: "admin@ohfororange.com", children: 0, role: "ADMIN", joined: "2024-01-01", active: true },
];

export default function AdminUsersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-black text-gray-800">👥 Manage Users</h1>
          <p className="text-gray-500 font-bold">{MOCK_USERS.length} registered users</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary py-2 px-4 text-sm">📊 Export CSV</button>
          <button className="btn-primary py-2 px-4 text-sm">+ Invite User</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Parents", value: "124", emoji: "👨‍👩‍👧" },
          { label: "Active Today", value: "43", emoji: "✅" },
          { label: "Children Profiles", value: "89", emoji: "👧" },
          { label: "Admins", value: "3", emoji: "⚙️" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-center"
          >
            <div className="text-3xl">{s.emoji}</div>
            <div className="text-2xl font-black text-[#FF6B2B]">{s.value}</div>
            <div className="text-xs text-gray-500 font-bold">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-12 gap-3 p-4 bg-gray-50 text-xs font-black text-gray-500 border-b">
          <span className="col-span-3">User</span>
          <span className="col-span-3">Email</span>
          <span className="col-span-1 text-center">Role</span>
          <span className="col-span-1 text-center">Children</span>
          <span className="col-span-2">Joined</span>
          <span className="col-span-1 text-center">Status</span>
          <span className="col-span-1 text-right">Actions</span>
        </div>
        {MOCK_USERS.map((user, i) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-12 gap-3 p-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors"
          >
            <div className="col-span-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-[#FF6B2B] flex items-center justify-center font-black text-sm flex-shrink-0">
                {user.name[0]}
              </div>
              <span className="font-bold text-gray-800 text-sm truncate">{user.name}</span>
            </div>
            <div className="col-span-3 text-sm text-gray-500 truncate">{user.email}</div>
            <div className="col-span-1 text-center">
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${user.role === "ADMIN" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                {user.role}
              </span>
            </div>
            <div className="col-span-1 text-center font-bold text-gray-700">{user.children}</div>
            <div className="col-span-2 text-xs text-gray-400 font-bold">{user.joined}</div>
            <div className="col-span-1 text-center">
              <span className={`w-2 h-2 rounded-full inline-block ${user.active ? "bg-green-400" : "bg-gray-300"}`} />
            </div>
            <div className="col-span-1 text-right">
              <button className="text-xs text-[#FF6B2B] font-bold hover:underline">View</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
