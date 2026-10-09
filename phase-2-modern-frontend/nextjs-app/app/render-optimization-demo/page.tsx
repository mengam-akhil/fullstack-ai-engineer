import OptimizedStateDemo from "../../components/OptimizedStateDemo";

export default function RenderOptimizationDemoPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100 md:p-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            Week 23 — Global State & Context Providers
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            State Update Optimization
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Optimize React state updates and prevent unnecessary
            component re-renders when application data changes.
          </p>
        </div>

        <OptimizedStateDemo />
      </section>
    </main>
  );
}