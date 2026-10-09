import TabbedDashboard from "../../components/TabbedDashboard";

export default function TabbedDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 md:p-8">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600">
            Day 130
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Tabbed Dashboard
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Organize dashboard information into focused views
            using reusable shadcn/ui tabs.
          </p>
        </div>

        <TabbedDashboard />
      </section>
    </main>
  );
}