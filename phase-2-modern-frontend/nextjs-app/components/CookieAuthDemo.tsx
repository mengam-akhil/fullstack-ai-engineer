
"use client";

import { useState } from "react";

import {
  getCurrentUser,
  login,
  logout,
  type AuthUser,
} from "../lib/api/auth";

export default function CookieAuthDemo() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      await login({ email, password });

      const currentUser = await getCurrentUser();

      setUser(currentUser);
      setPassword("");
      setMessage("Login successful.");
    } catch {
      setUser(null);
      setMessage("Login failed. Check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      setLoading(true);
      setMessage("");

      await logout();

      setUser(null);
      setPassword("");
      setMessage("Logout successful.");
    } catch {
      setMessage("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Day 147
        </p>

        <h1 className="text-3xl font-bold tracking-tight">
          HTTP-Only Cookie Authentication
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Sign in to create a server-managed session using an
          HTTP-only cookie.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label htmlFor="cookie-demo-email" className="mb-1 block text-sm font-medium">
              Email address
            </label>
            <input
              id="cookie-demo-email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-h-11 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700"
            />
          </div>

          <div>
            <label htmlFor="cookie-demo-password" className="mb-1 block text-sm font-medium">
              Password
            </label>
            <input
              id="cookie-demo-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="min-h-11 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={loading}
              className="min-h-11 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {loading ? "Processing..." : "Login"}
            </button>

            <button
              type="button"
              onClick={handleLogout}
              disabled={loading}
              className="min-h-11 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold hover:bg-slate-100 disabled:opacity-60 dark:border-slate-700 dark:hover:bg-slate-900"
            >
              Logout
            </button>
          </div>
        </form>

        {message && (
          <p role="status" className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-800 dark:bg-slate-900">
            {message}
          </p>
        )}

        {user && (
          <div className="mt-6 rounded-xl border border-slate-200 p-5 dark:border-slate-800">
            <h2 className="font-semibold">Authenticated User</h2>

            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="font-medium">Name</dt>
                <dd className="text-slate-600 dark:text-slate-400">{user.name}</dd>
              </div>
              <div>
                <dt className="font-medium">Email</dt>
                <dd className="text-slate-600 dark:text-slate-400">{user.email}</dd>
              </div>
              <div>
                <dt className="font-medium">Role</dt>
                <dd className="text-slate-600 dark:text-slate-400">{user.role}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </section>
  );
}
