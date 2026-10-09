"use client";

import { useUser } from "../context/UserContext";

export default function GlobalUserCard() {
  const { user } = useUser();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
        Global User State
      </p>

      <h2 className="text-2xl font-bold text-slate-900">
        {user.name}
      </h2>

      <p className="mt-2 text-sm text-slate-600">
        Email: {user.email}
      </p>

      <p className="mt-1 text-sm text-slate-600">
        Role: {user.role}
      </p>
    </section>
  );
}