"use client";

import { useAuth } from "../context/AuthContext";

export default function AuthStatus() {
  const { user, isAuthenticated } = useAuth();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
        Global State
      </p>

      <h2 className="text-xl font-bold text-slate-900">
        Header Authentication Status
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        {isAuthenticated
          ? `Logged in as ${user?.name}`
          : "No user is currently logged in."}
      </p>
    </section>
  );
}