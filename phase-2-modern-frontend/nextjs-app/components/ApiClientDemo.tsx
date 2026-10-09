"use client";

import { useState } from "react";

import apiClient from "../lib/api/client";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function ApiClientDemo() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadUsers() {
    try {
      setLoading(true);
      setError("");

      const response = await apiClient.get<User[]>("/users");

      setUsers(response.data);
    } catch (requestError) {
      console.error("API request failed:", requestError);

      setError("Unable to load users.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-3xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Day 145
        </p>

        <h1 className="text-3xl font-bold tracking-tight">
          Centralized API Client
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          The frontend communicates with the FastAPI backend
          through one centralized Axios client.
        </p>

        <button
          type="button"
          onClick={loadUsers}
          disabled={loading}
          className="mt-6 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Loading..." : "Load Users"}
        </button>

        {error && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {users.length > 0 && (
          <div className="mt-6 space-y-3">
            {users.map((user) => (
              <article
                key={user.id}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
              >
                <h2 className="font-semibold">
                  {user.name}
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {user.email}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}