"use client";

import { useAuth } from "../context/AuthContext";
import { Button } from "./ui/button";

export default function AuthDemo() {
  const {
    user,
    isAuthenticated,
    login,
    logout,
  } = useAuth();

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
          Authentication
        </p>

        <h2 className="text-2xl font-bold text-slate-900">
          Global Auth State
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Authentication state is available to components
          throughout the application.
        </p>
      </div>

      <div className="rounded-lg bg-slate-50 p-5">
        <p className="text-sm font-medium text-slate-500">
          Authentication Status
        </p>

        <p className="mt-1 text-lg font-semibold text-slate-900">
          {isAuthenticated
            ? "Authenticated"
            : "Not Authenticated"}
        </p>

        {user && (
          <div className="mt-5 space-y-1">
            <p className="text-sm text-slate-600">
              Name: {user.name}
            </p>

            <p className="text-sm text-slate-600">
              Email: {user.email}
            </p>

            <p className="text-sm text-slate-600">
              Role: {user.role}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {!isAuthenticated ? (
          <Button onClick={login}>
            Login
          </Button>
        ) : (
          <Button
            variant="destructive"
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </div>
    </section>
  );
}