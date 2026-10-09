
import { redirect } from "next/navigation";

import { getCurrentUserServer } from "../../lib/api/server-auth";
import LazyUserList from "../../components/LazyUserList";
import WorkspaceDashboard from "../../components/workspace/WorkspaceDashboard";

export default async function ProtectedDashboardPage() {
  let user;

  try {
    user = await getCurrentUserServer();
  } catch {
    redirect("/login");
  }

  return (
    <main className="flex-1 space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      {/* Authenticated user information */}
      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          Protected Area
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Enterprise Dashboard
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Welcome back, {user.name}.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1 wrap-break-word font-medium">
              {user.email}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm text-slate-500">Role</p>
            <p className="mt-1 font-medium">{user.role}</p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <p className="text-sm text-slate-500">Access</p>
            <p className="mt-1 font-medium">Authenticated</p>
          </div>
        </div>
      </section>

      {/* Task workspace */}
      <section className="mx-auto w-full max-w-7xl">
        <WorkspaceDashboard />
      </section>

      {/* Registered users */}
      <section className="mx-auto w-full max-w-4xl">
        <LazyUserList />
      </section>
    </main>
  );
}
